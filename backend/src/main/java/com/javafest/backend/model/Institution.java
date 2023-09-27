package com.javafest.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Institution {
    private String name;
    private String eiin;
    private String address;
    private  String postCode;
    private String upazila;
    private String district;
    private String division;
    private String type;
    private boolean isVerified;
}
