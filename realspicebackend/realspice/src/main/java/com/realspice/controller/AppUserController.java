package com.realspice.controller;

import com.realspice.entity.AppUser;
import com.realspice.jwt.JwtHelper;
import com.realspice.jwt.JwtResponse;
import com.realspice.payload.LoginDto;
import com.realspice.payload.ResponseDto;
import com.realspice.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/appuser")
public class AppUserController {

    @Autowired
    private AppUserService appUserService;
    @Autowired
    private JwtHelper jwtHelper;
    @PostMapping("/signup")
    public ResponseEntity<ResponseDto> signUpAppUser(@RequestBody AppUser appUser){
        String msg = appUserService.addAppUser(appUser);
        ResponseDto resDto = new ResponseDto();
        resDto.setMessage(msg);
        return new ResponseEntity<>(resDto, HttpStatus.OK);
    }
    @PostMapping("/signin")
    public ResponseEntity<?> signInAppUser(@RequestBody LoginDto loginDto){
        String msg = appUserService.signInAppUser(loginDto);
        if(msg.equals("success")){
            String token = jwtHelper.generateToken(loginDto);
            JwtResponse jwtResponse = new JwtResponse();
            jwtResponse.setToken(token);
            jwtResponse.setEmail(loginDto.getEmail());
            return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
        }else {
            ResponseDto resDto = new ResponseDto();
            resDto.setMessage(msg);
            return new ResponseEntity<>(resDto, HttpStatus.OK);
        }
    }
}
