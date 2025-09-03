package com.sachi.service;

import java.util.List;

import com.sachi.Model.IngredientCategory;
import com.sachi.Model.IngredientItem;

public interface IngredientsService {
	
	public IngredientCategory createIngredientsCategory(String name,Long restaurentId)throws Exception;
	
	public IngredientCategory findIngredientCategoryById(Long id)throws Exception;
	
	public List<IngredientCategory> findIngredientCategoryByRestaurentId(Long id)throws Exception;
	
	public IngredientItem createIngredientItem(Long restaurentId,String ingredientName,Long categoryId)throws Exception;
	
	public List<IngredientItem> findRestaurentsIngredients(Long restaurentId);
	
	public IngredientItem updateIngredientItem(Long id)throws Exception;

	public IngredientCategory deleteCategoryByCategoryId(Long id)throws Exception;

	public IngredientItem deleteIngredientByItemId(Long id)throws Exception;
	 
	
}
