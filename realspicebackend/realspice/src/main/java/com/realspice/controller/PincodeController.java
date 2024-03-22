package com.realspice.controller;

import com.realspice.service.PincodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pincode")
public class PincodeController {

    @Autowired
    private PincodeService pincodeService;
    @GetMapping
    public ResponseEntity<List<Integer>> getAllPincode(){
        List<Integer> pincodeList = pincodeService.getAllPincode();
        return new ResponseEntity<>(pincodeList, HttpStatus.OK);
    }
}
