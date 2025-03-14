package com.sachi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sachi.Model.CartItem;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long>{

}
