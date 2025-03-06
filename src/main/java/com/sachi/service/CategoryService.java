package com.sachi.service;

import java.util.List;

import com.sachi.Model.Category;


public interface CategoryService {
	public com.sachi.Model.Category createCategory(String name,Long userId)throws Exception;
	
	public List<Category> findCategoryByRestaurentId(Long id) throws Exception;
	
	public Category findcategoryById(long id) throws Exception;

}
