package com.realspice.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ExternalBeans {
    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}
