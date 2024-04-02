package com.realspice.controller;

import com.realspice.entity.Product;
import com.realspice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping("/addproduct")
    public ResponseEntity<String> addProduct(@RequestBody Product product){
        String msg = productService.addProduct(product);
        return new ResponseEntity<>(msg, HttpStatus.CREATED);
    }
    @PostMapping("/addproductlist")
    public ResponseEntity<String> addProductList(@RequestBody List<Product> product){
        String msg = productService.addProductList(product);
        return new ResponseEntity<>(msg, HttpStatus.CREATED);
    }
    @GetMapping("/getproducts")
    public ResponseEntity<List<Product>> getProducts(){
        List<Product> products= productService.getProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @GetMapping("/getproductbyslug/{slug}")
    public ResponseEntity<Product> getProductBySlug(@PathVariable String slug){
        Product product= productService.getProductBySlug(slug);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
    @PutMapping("/updateproducts")
    public ResponseEntity<String> updateProducts(@RequestBody List<Product> product){
        String msg= productService.updateProducts(product);
        return new ResponseEntity<>(msg, HttpStatus.OK);
    }


}
