package com.sachi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.Food;
import com.sachi.Model.Restaurent;
import com.sachi.Model.User;
import com.sachi.request.CreateFoodRequest;
import com.sachi.response.MessageResponse;
import com.sachi.service.FoodService;
import com.sachi.service.RestaurentService;
import com.sachi.service.UserService;
@RestController
@RequestMapping("/api/food")
public class FoodController {
	@Autowired
	private FoodService foodService;
	
	@Autowired
	private UserService userService;
	
	@Autowired	
	private RestaurentService restaurentService;
	
	@GetMapping("/search")
	public ResponseEntity<List<Food>>searchFood(@RequestHeader("Authorization")String jwt,@RequestParam String name) throws Exception{
		
		User user =userService.findUserByJwtToken(jwt);
		List<Food> foods =foodService.searchFood(name);
		
		return new ResponseEntity<List<Food>>(foods,HttpStatus.OK);
	}
	
	@GetMapping("/restaurent/{restaurentId}")
	public ResponseEntity<List<Food>>getRestaurentFood(
			@RequestHeader("Authorization")String jwt,
			@RequestParam (required = false) boolean vegetarain,
			@RequestParam (required = false) boolean nonvegetarain,
			@RequestParam (required = false) boolean seasonal,
			@RequestParam (required = false) String food_category,
			@PathVariable Long restaurentId) throws Exception{
		
		User user =userService.findUserByJwtToken(jwt);
		List<Food> foods =foodService.getRestaurentsFood(restaurentId, vegetarain, nonvegetarain, seasonal, food_category);
		
		return new ResponseEntity<List<Food>>(foods,HttpStatus.OK);
	}

}
