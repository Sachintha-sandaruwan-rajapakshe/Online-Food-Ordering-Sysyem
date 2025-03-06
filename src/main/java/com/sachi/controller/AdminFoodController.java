package com.sachi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
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
@RequestMapping("/api/admin/food")
public class AdminFoodController {
	
	@Autowired
	private FoodService foodService;
	
	@Autowired
	private UserService userService;
	
	@Autowired	
	private RestaurentService restaurentService;
	
	@PostMapping
	public ResponseEntity<Food> createFood(@RequestHeader("Authorization")String jwt,@RequestBody CreateFoodRequest req) throws Exception{
		
		User user =userService.findUserByJwtToken(jwt);
		Restaurent restaurent =restaurentService.findRestaurentById(req.getRestaurentId());
		
		Food foods =foodService.createFood(req, req.getCategory(), restaurent);
		
		return new ResponseEntity<Food>(foods,HttpStatus.CREATED);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<MessageResponse> deleteFood(@RequestHeader("Authorization")String jwt,@PathVariable Long id) throws Exception{
		
		User user =userService.findUserByJwtToken(jwt);
		
		foodService.deleteFood(id);
		MessageResponse msg= new MessageResponse();
		msg.setMessage("Food Deleted sucessfully");
		return new ResponseEntity<MessageResponse>(msg,HttpStatus.CREATED);
	}
	
	
	@PutMapping("{id}")
	public ResponseEntity<Food> updateFoodAvailability(@RequestHeader("Authorization")String jwt,@PathVariable Long id) throws Exception{
		
		User user =userService.findUserByJwtToken(jwt);
		
		Food food = foodService.updateAvailibilityStatus(id);
		return new ResponseEntity<Food>(food,HttpStatus.OK);
	}
	

}











