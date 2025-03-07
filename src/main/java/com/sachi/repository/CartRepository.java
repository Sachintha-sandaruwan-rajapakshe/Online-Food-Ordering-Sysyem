package com.sachi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sachi.Model.Cart;

public interface CartRepository extends JpaRepository<Cart, Long>{
	public Cart findByCustomerId(Long userId);

}
