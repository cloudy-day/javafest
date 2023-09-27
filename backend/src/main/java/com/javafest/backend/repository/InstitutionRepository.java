package com.javafest.backend.repository;

import com.javafest.backend.model.Institution;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InstitutionRepository extends MongoRepository<Institution,String> {

}
