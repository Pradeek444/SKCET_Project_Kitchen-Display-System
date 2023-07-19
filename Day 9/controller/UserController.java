
package com.kds.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kds.service.*;
import com.kds.models.*;
@RestController

@CrossOrigin(origins="*",allowedHeaders="*")
public class UserController {

    @Autowired
    private UserService Service;

    @GetMapping("/get")
    public List<User> getAllStaffs() {
        return Service.getAllStaff();
    }
    @PostMapping("/add")
    public String addStaff(@RequestBody User f) {
        return Service.SignUpx(f);
    }

 

    @DeleteMapping("/{id}")
    public String deleteStaff(@PathVariable int id) {
        return (Service.deleteStaff(id)) ? "User deleted successfully" : "User Not Found";
    }

}