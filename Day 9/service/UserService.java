package com.kds.service;

import org.springframework.stereotype.Service;

import com.kds.repositories.UserRepo;

import com.kds.models.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
@Service
public class UserService {
	
	@Autowired
	private UserRepo Repo;
	
    public boolean deleteStaff(int id) {
        if (Repo.findById(id).isPresent()) {
            Repo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
    public List<User> getAllStaff() {
        return Repo.findAll();
    }

	public String SignUpx(User staffx) {
        String email = staffx.getEmail();
        User staffxAuth = Repo.findByEmail(email);
        if (staffxAuth == null) {
            Repo.save(staffx);
            return "Signup Successful !";
        } else {
            if (staffxAuth.getEmail().equals(email)) {
                return "Email ID Already Exists";
            } else {
                return "Invalid Email ID";
            }
        }
    } 
      

  
}