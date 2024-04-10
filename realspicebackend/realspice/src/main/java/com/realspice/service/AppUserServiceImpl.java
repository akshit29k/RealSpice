package com.realspice.service;

import com.realspice.entity.AppUser;
import com.realspice.jwt.JwtHelper;
import com.realspice.payload.LoginDto;
import com.realspice.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class AppUserServiceImpl implements AppUserService{
    @Autowired
    private AppUserRepository appUserRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public String addAppUser(AppUser appUser) {
        Optional<AppUser> opAppUSEm = appUserRepository.findByEmail(appUser.getEmail());
        if(opAppUSEm.isPresent()){
            return "Email Already Exist";
        }
        Optional<AppUser> opAppUSMo = appUserRepository.findByMobile(appUser.getMobile());
        if(opAppUSMo.isPresent()){
            return "Mobile Already Exist";
        }
        try {
            appUser.setAppUserId(UUID.randomUUID().toString());
            appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
            appUser.setRoles("ROLE_USER");
            appUserRepository.save(appUser);
            return "Registered Successfully";
        }catch(Exception e){
            return "Error Occur...Try Again";
        }
    }

    @Override
    public String signInAppUser(LoginDto loginDto) {
        Optional<AppUser> appUser = appUserRepository.findByEmail(loginDto.getEmail());
        if(appUser.isPresent()){
            if(passwordEncoder.matches(loginDto.getPassword(),appUser.get().getPassword())){
                return "success";
            }else{
                return "Enter a correct password";
            }
        }else{
            return "User does not exists";
        }
    }
}
