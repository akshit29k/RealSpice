package com.realspice.service;

import com.realspice.entity.AppUser;
import com.realspice.payload.LoginDto;

public interface AppUserService {
    public String addAppUser(AppUser appUser);

    String signInAppUser(LoginDto loginDto);
}
