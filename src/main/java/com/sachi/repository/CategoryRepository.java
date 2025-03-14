package com.sachi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sachi.Model.Category;
@Repository

public interface CategoryRepository extends JpaRepository<Category, Long>{
	
	public List<Category> findByRestaurentId(Long id);

}
