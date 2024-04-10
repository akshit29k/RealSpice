package com.realspice.repository;

import com.realspice.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AppUserRepository extends JpaRepository<AppUser,String> {
    public Optional<AppUser> findByEmail(String email);
    public Optional<AppUser> findByMobile(String mobile);
}
