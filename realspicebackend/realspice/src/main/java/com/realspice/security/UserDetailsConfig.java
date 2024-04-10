package com.realspice.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetailsService;

@Configuration
public class UserDetailsConfig {
    @Bean
    public UserDetailsService userDetailsService(){
        return new UserInfo();
    }

}
