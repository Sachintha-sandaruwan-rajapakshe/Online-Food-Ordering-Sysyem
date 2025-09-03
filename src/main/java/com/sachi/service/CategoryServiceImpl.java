package com.sachi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sachi.Model.Category;
import com.sachi.Model.Restaurent;
import com.sachi.repository.CategoryRepository;
@Service
public class CategoryServiceImpl implements CategoryService{
	
	@Autowired
	private CategoryRepository categoryRepository;
	@Autowired
	private RestaurentService restarentService;

	@Override
	public Category createCategory(String name, Long userId) throws Exception {
		Restaurent restaurent = restarentService.findRestaurentByUserId(userId);
		Category category =new Category();
		category.setName(name);
		category.setRestaurent(restaurent);
		return categoryRepository.save(category);
	}

	@Override
	public List<Category> findCategoryByRestaurentId(Long id) throws Exception {
		return categoryRepository.findByRestaurentId(id);
	}

	@Override
	public Category findcategoryById(long id) throws Exception {
		Optional<Category> optionalCategory =categoryRepository.findById(id);
		if(optionalCategory.isEmpty()) {
			throw new Exception("category not found.!");
		}
		return optionalCategory.get();
	}

	@Override
	public Category deleteCategoryByCategoryId(Long id) throws Exception {
	    Optional<Category> optionalCategory = categoryRepository.findById(id);
	    if(optionalCategory.isEmpty()) {
	        throw new Exception("Category not found!");
	    }
	    categoryRepository.delete(optionalCategory.get()); // delete from DB
	    return optionalCategory.get(); // return deleted category
	}

	

}
