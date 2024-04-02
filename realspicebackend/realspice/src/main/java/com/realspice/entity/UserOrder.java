package com.realspice.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserOrder {
    @Id
    private String orderId;
    @ManyToOne
    @JoinColumn(name = "user_id",nullable = false)
    @JsonBackReference
    private AppUser appUser;
    @ManyToMany
    @JoinTable(
            name = "order_product",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    @Column(nullable = false)
    private Set<Product> products = new HashSet<>();
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private int orderedQty;
    @Column(nullable = false)
    private long amount;
    @Column(nullable = false)
    private String status="pending";
    @CreationTimestamp
    private LocalDateTime createdAt;
    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
