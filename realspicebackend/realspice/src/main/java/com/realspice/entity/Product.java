package com.realspice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    private String productId;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false,unique = true)
    private String slug;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private String image;
    @Column(nullable = false)
    private String category;
    private String size;
    private String flavour;
    @Column(nullable = false)
    private Long packetQty;
    @Column(nullable = false)
    private Integer inStock;
    @Column(nullable = false)
    private Integer packOf;
    @Column(nullable = false)
    private Long price;
    @CreationTimestamp
    private LocalDateTime createdAt;
    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
