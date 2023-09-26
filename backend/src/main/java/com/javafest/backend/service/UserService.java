package com.javafest.backend.service;

import com.javafest.backend.model.User;
import com.javafest.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public void createUser(User user){
        userRepository.insert(user);
    }
    public List<User> getAllUser(){
        return userRepository.findAll();
    }

}
