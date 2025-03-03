package com.sachi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sachi.Model.Food;

public interface FoodRepository extends JpaRepository<Food, Long>{
	
	List<Food> findByrestaurentId(Long restaurentId);
	
	@Query("SELECT f FROM Food f WHERE f.name Like %:keyword% OR f.foodCategory")
	List<Food> searchFood(@Param("keyword") String keyword);

}
