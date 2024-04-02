package com.realspice.service;

import com.realspice.entity.Product;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface ProductService {
    public String addProduct(Product product);
    public List<Product> getProducts();
    public Product getProductBySlug(String slug);
    public String addProductList(List<Product> product);
    public String updateProducts(List<Product> product);
}
