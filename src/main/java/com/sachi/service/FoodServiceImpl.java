package com.sachi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sachi.Model.Category;
import com.sachi.Model.Food;
import com.sachi.Model.Restaurent;
import com.sachi.repository.FoodRepository;
import com.sachi.request.CreateFoodRequest;

@Service
public class FoodServiceImpl implements FoodService{
	
	@Autowired
	private FoodRepository foodRepository;

	@Override
	public Food createFood(CreateFoodRequest req, Category category, Restaurent restaurent) throws Exception {
		Food food =new Food();
		food.setFoodCategory(category);
		food.setRestaurent(restaurent);
		food.setDescription(req.getDescription());
		food.setImages(req.getImages());
		food.setName(req.getName());
		food.setPrice(req.getPrice());
		food.setIngredients(req.getIngredients());
		food.setSeasonal(req.isSeasional());
		food.setVegetarian(req.isVegetarin());
		
		Food saveFood=foodRepository.save(food);
		restaurent.getFoods().add(saveFood);
		return saveFood;
	}

	@Override
	public void deleteFood(Long foodId) throws Exception {
		Food food = findFoodById(foodId);
		food.setRestaurent(null);
		foodRepository.save(food);
		
	}

	@Override
	public List<Food> getRestaurentsFood(Long restaurentId, boolean isVegetarain, boolean nonVegetarain,
			boolean seasonal, String foodCategory) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Food> searchFood(String keyword) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Food findFoodById(Long foodId) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Food updateAvailibilityStatus(Long foodId) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}
	

}
