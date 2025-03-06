package com.sachi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sachi.Model.IngredientItem;
@Repository
public interface IngredientItemRepository extends JpaRepository<IngredientItem, Long>{
	
	List<IngredientItem> findByRestaurentId(Long id);

}
