package com.sachi.service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sachi.Model.Category;
import com.sachi.Model.Food;
import com.sachi.Model.Restaurent;
import com.sachi.repository.FoodRepository;
import com.sachi.request.CreateFoodRequest;

import io.jsonwebtoken.lang.Collections;

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
		List<Food> foods = foodRepository.findByrestaurentId(restaurentId);
		if(isVegetarain) {
			foods =filterByVegetarian(foods,isVegetarain);
		}
		if(nonVegetarain) {
			foods = filterBynonVegetarian(foods,nonVegetarain);
		}
		
		if(seasonal) {
			foods = filterBySeasonal(foods,seasonal);
		}
		if(foodCategory != null && !foodCategory.equals("")) {
			foods = filterbyCategory(foods,foodCategory);
		}
		return foods;
	}
	
	

	private List<Food> filterbyCategory(List<Food> foods, String foodCategory) {
		return foods.stream().filter(food -> {
			if(food.getFoodCategory()!= null) {
				return food.getFoodCategory().getName().equals(foodCategory);
			}
			return false;
		}).collect(Collectors.toList());
	}

	private List<Food> filterBySeasonal(List<Food> foods, boolean seasonal) {
		return foods.stream().filter(food ->food.isSeasonal()==seasonal).collect(Collectors.toList());
	}

	private List<Food> filterBynonVegetarian(List<Food> foods, boolean nonVegetarain) {
		return foods.stream().filter(food ->food.isVegetarian()==false).collect(Collectors.toList());
	}

	private List<Food> filterByVegetarian(List<Food> foods, boolean isVegetarain) {
		return  foods.stream().filter(food -> food.isVegetarian()==isVegetarain).collect(Collectors.toList());
	}
	
	
	
	

	@Override
	public List<Food> searchFood(String keyword) throws Exception {
		return foodRepository.searchFood(keyword);
	}

	@Override
	public Food findFoodById(Long foodId) throws Exception {
		Optional<Food> optionalFood = foodRepository.findById(foodId);
		if(optionalFood.isEmpty()) {
			throw new Exception("Food not exist.!");
		}
		return optionalFood.get();
	}

	@Override
	public Food updateAvailibilityStatus(Long foodId) throws Exception {
		Food food =findFoodById(foodId);
		food.setAvailabel(!food.isAvailabel());
		return foodRepository.save(food);
	}
	

}
