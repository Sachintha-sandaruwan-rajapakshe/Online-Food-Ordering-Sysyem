package com.sachi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sachi.Model.Food;
@Repository
public interface FoodRepository extends JpaRepository<Food, Long>{
	
	List<Food> findByrestaurentId(Long restaurentId);
	
	@Query("SELECT f FROM Food f WHERE LOWER(f.name) LIKE LOWER(CONCAT('%', :keyword, '%')) OR LOWER(f.foodCategory) LIKE LOWER(CONCAT('%', :keyword, '%'))")
	List<Food> searchFood(@Param("keyword") String keyword);


}
