package com.sachi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sachi.Model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{
	public List<Order> findBycustomerId(Long userId);
	
	public List<Order> findByRestaurentId(Long restaurentId);
	 

}
