package com.realspice.repository;

import com.realspice.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product,String> {
    public Optional<Product> findBySlug(String slug);
}
