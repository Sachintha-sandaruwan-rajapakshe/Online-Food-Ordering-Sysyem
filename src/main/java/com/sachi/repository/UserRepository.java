package com.sachi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sachi.Model.User;

public interface UserRepository extends JpaRepository<User, Long>{
public User findByEmail(String username);

}
