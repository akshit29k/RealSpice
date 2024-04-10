package com.realspice.service;

import com.realspice.entity.Product;
import com.realspice.exception.NotFoundException;
import com.realspice.repository.ProductRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService{
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public String addProduct(Product product) {
        try {
            product.setProductId(UUID.randomUUID().toString());
            productRepository.save(product);
            return "Success";
        }catch(Exception e){
          throw new RuntimeException(new InternalError("Duplicates Not Allowed"));
        }

    }

    @Override
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public List<Product> getProducts() {
        try {
            return productRepository.findAll();
        }catch(Exception e){
            throw new NotFoundException("Products Not Found");
        }
    }

    @Override
    public Product getProductBySlug(String slug) {
        return productRepository.findBySlug(slug).orElseThrow(()-> new NotFoundException("Product not found"));

    }

    @Override
    public String addProductList(List<Product> product) {
        try {
            product.forEach(pro->pro.setProductId(UUID.randomUUID().toString()));
            productRepository.saveAll(product);
            return "Success";
        }catch(Exception e){
            throw new RuntimeException(new InternalError("Duplicates Not Allowed"));
        }
    }

    @Override
    @Transactional
    public String updateProducts(List<Product> product) {
        product.forEach(upPro->{
            Optional<Product> exPro = productRepository.findById(upPro.getProductId());
            if(exPro.isPresent()){
                Product updatedProduct = mapUpdateToExisting(upPro,exPro.get());
                productRepository.save(updatedProduct);
            }else{
                throw new NotFoundException("No product id found");
            }
        });
        return "Updated Successfully";
    }

    @Override
    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category).orElseThrow(()->new NotFoundException("Product Not Found"));

    }

    public Product mapUpdateToExisting(Product upPro,Product exPro){
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        modelMapper.getConfiguration().setPropertyCondition(ctx -> ctx.getSource() != null);

        modelMapper.map(upPro, exPro);
        return exPro;
    }
}
