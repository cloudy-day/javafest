package com.javafest.backend.controller;

import com.javafest.backend.model.Institution;
import com.javafest.backend.service.InstitutionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/institution")
public class InstitutionController {

    private InstitutionService institutionService;
    public InstitutionController(InstitutionService institutionService){this.institutionService=institutionService;}

    @PostMapping
    public ResponseEntity<String> createInstitution(@RequestBody Institution institution){
        
    }
}
