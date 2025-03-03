package com.sachi.service;

import java.util.List;

import com.sachi.Model.Category;
import com.sachi.Model.Food;
import com.sachi.Model.Restaurent;
import com.sachi.request.CreateFoodRequest;

public interface FoodService {
	
	public Food createFood(CreateFoodRequest req,Category category,Restaurent restaurent)throws Exception;
	
	public void deleteFood(Long foodId)throws Exception;
	
	public List<Food> getRestaurentsFood(Long restaurentId,boolean isVegetarain,boolean nonVegetarain,boolean seasonal,String foodCategory)throws Exception;
	
	public List<Food> searchFood(String keyword)throws Exception;
	
	public  Food findFoodById(Long foodId)throws Exception;
	
	public Food updateAvailibilityStatus(Long foodId)throws Exception;
	
}
