package com.javafest.backend.service;

import com.javafest.backend.model.Institution;
import com.javafest.backend.repository.InstitutionRepository;
import org.springframework.stereotype.Service;

@Service
public class InstitutionService {
    private final InstitutionRepository institutionRepository;

    public InstitutionService(InstitutionRepository institutionRepository){this.institutionRepository=institutionRepository;}

    public void createInstitution(Institution institution){institutionRepository.insert(institution);}


}
