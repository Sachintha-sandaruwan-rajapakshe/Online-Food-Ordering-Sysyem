package com.sachi.service;

import java.util.List;
import java.util.Optional;

import com.sachi.Model.Category;


public interface CategoryService {
	public com.sachi.Model.Category createCategory(String name,Long userId)throws Exception;
	
	public List<Category> findCategoryByRestaurentId(Long id) throws Exception;
	
	public Category findcategoryById(long id) throws Exception;

	public Category deleteCategoryByCategoryId(Long id)throws Exception;

}
