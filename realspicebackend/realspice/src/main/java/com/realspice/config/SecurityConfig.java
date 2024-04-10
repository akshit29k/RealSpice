package com.realspice.config;

import com.realspice.jwt.JwtAuthenticationEntryPoint;
import com.realspice.jwt.JwtRequestFilter;
import com.realspice.security.UserDetailsConfig;
import com.realspice.security.UserInfo;
import com.realspice.security.UserInfoUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Autowired
    private UserDetailsService userDetailsService;
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
           return http.csrf(AbstractHttpConfigurer::disable)
                   .authorizeHttpRequests((a)->a.requestMatchers("/api/appuser/**","/pincode","/api/product/**")
                           .permitAll()
                           .requestMatchers("/api/product/addproduct","/api/product/addproductlist","/api/product/updateproduct").authenticated())
                   .exceptionHandling((e)->e.authenticationEntryPoint(jwtAuthenticationEntryPoint))
                   .sessionManagement((s)->s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                   .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class)
                   .httpBasic(Customizer.withDefaults()).build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){return new BCryptPasswordEncoder();};

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService);
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }

}
