package com.kds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.kds.models.User;
public interface UserRepo extends JpaRepository<User,Integer>{
     User findByEmail(String email);
}
