package com.sachi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sachi.Model.IngredientCategory;
import com.sachi.Model.IngredientItem;
import com.sachi.Model.Restaurent;
import com.sachi.repository.IngredientCategoryRepository;
import com.sachi.repository.IngredientItemRepository;

@Service
public class IngredentServiceIMPL implements IngredientsService{
	@Autowired
	private IngredientCategoryRepository IngredientCategoryRepository;
	@Autowired
	private IngredientItemRepository ingredientItemRepository;
	@Autowired
	private RestaurentService restaurentService;
	
	
	@Override
	public IngredientCategory createIngredientsCategory(String name, Long restaurentId) throws Exception {
		Restaurent restaurent = restaurentService.findRestaurentById(restaurentId);
		IngredientCategory category = new IngredientCategory();
		category.setName(name);
		category.setRestaurent(restaurent);
		return IngredientCategoryRepository.save(category);
	}
	@Override
	public IngredientCategory findIngredientCategoryById(Long id) throws Exception {
		Optional<IngredientCategory> optionalCategory = IngredientCategoryRepository.findById(id);
		if(optionalCategory.isEmpty()) {
			throw new Exception("Intrdent categpory not found .!");
		}
		return optionalCategory.get();
	}
	@Override
	public List<IngredientCategory> findIngredientCategoryByRestaurentId(Long id) throws Exception {
		Restaurent restaurent = restaurentService.findRestaurentById(id);
		return IngredientCategoryRepository.findByRestaurentId(id);
	}
	@Override
	public IngredientItem createIngredientItem(Long restaurentId, String ingredientName, Long categoryId)
			throws Exception {
		Restaurent restaurent = restaurentService.findRestaurentById(restaurentId);
		IngredientCategory category =findIngredientCategoryById(categoryId);
		
		
		IngredientItem ingredientItem =new IngredientItem();
		ingredientItem.setName(ingredientName);
		ingredientItem.setCategory(category);
		
		IngredientItem ingredient = ingredientItemRepository.save(ingredientItem);
		category.getIngredients().add(ingredient);
		return ingredient;
	}
	@Override
	public List<IngredientItem> findRestaurentsIngredients(Long restaurentId) {
		
		return ingredientItemRepository.findByRestaurentId(restaurentId);
	}
	@Override
	public IngredientItem updateIngredientItem(Long id) throws Exception {
		Optional<IngredientItem>optionalIngredientItem= ingredientItemRepository.findById(id);
		if(optionalIngredientItem.isEmpty()) {
			throw new Exception("Ingredient not found.!");
		}
		IngredientItem ingredientItem  = optionalIngredientItem.get();
		ingredientItem.setInStock(!ingredientItem.isInStock());
		return ingredientItemRepository.save(ingredientItem);
	}
	
	

}
