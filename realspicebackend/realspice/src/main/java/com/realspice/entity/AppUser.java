package com.realspice.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;
import org.hibernate.annotations.Check;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppUser {
    @Id
    private String appUserId;
    @Column(nullable = false)
    @Size(min = 2, max = 20, message = "Name must be between 2 and 20 characters")
    private String name;
    @Column(nullable = false,unique = true)
    @Pattern(regexp="(^$|[0-9]{10})", message="Mobile number must be 10 digits")
    private String mobile;
    @Column(nullable = false,unique = true)
    @Email(message = "Email should be valid")
    private String email;
    @Column(nullable = false)
    @NotBlank(message = "Password cannot be blank")
    @Size(min = 6,message = "Password must be at least 6 characters long")
    private String password;
    @OneToMany(mappedBy = "appUser",cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<UserOrder> userOrder;
    @CreationTimestamp
    private LocalDateTime createdAt;
    @UpdateTimestamp
    private LocalDateTime updatedAt;

}
