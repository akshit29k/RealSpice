package com.realspice.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.realspice.entity.AppUser;
import com.realspice.payload.LoginDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Date;

@Component
public class JwtHelper {
    @Value("${jwt.issuer}")
    private String issuer;
    @Value("${jwt.algorithm.key}")
    private String secretKey;
    @Value("${jwt.expiry}")
    private int expiry;


    public String generateToken(LoginDto loginDto){
       return JWT.create().withClaim("USER_NAME",loginDto.getEmail()).withExpiresAt(new Date(System.currentTimeMillis() + expiry))
                .withIssuer(issuer).sign(Algorithm.HMAC256(secretKey));
    }

    //Verify the token and return username if token is valid
    public String getUserName(String token){
        DecodedJWT decodedJWT = JWT.require(Algorithm.HMAC256(secretKey)).withIssuer(issuer).build().verify(token);
        return decodedJWT.getClaim("USER_NAME").asString();
    }
}
