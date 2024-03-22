package com.realspice.service;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class PincodeServiceImpl implements PincodeService{
    @Override
    public List<Integer> getAllPincode() {

        List<Integer> pincodeList = Arrays.asList(312605,110001,110002,560067);
        return pincodeList;
    }
}
