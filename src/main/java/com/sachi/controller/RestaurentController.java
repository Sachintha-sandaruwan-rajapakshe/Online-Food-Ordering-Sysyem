package com.sachi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.Restaurent;
import com.sachi.Model.User;
import com.sachi.dto.RestaurantDto;
import com.sachi.service.RestaurentService;
import com.sachi.service.UserService;

@RestController
@RequestMapping("api/restaurents")
public class RestaurentController {
	@Autowired
	private RestaurentService restaurentService;
	@Autowired
	private UserService userService;
	
	@GetMapping()
	public ResponseEntity<List<Restaurent>> searchRestaurent(
	        @RequestParam(required = false) String keyword, 
	        @RequestHeader("Authorization") String jwt) throws Exception {
	    
	    User user = userService.findUserByJwtToken(jwt);
	    
	    List<Restaurent> restaurent;
	    if (keyword == null || keyword.trim().isEmpty()) {
	        restaurent = restaurentService.getAllRestaurent();
	    } else {
	        restaurent = restaurentService.searchRestaurent(keyword);
	    }
	    
	    return new ResponseEntity<List<Restaurent>>(restaurent, HttpStatus.OK);
	}

	
	@GetMapping("/search")
	public ResponseEntity<List<Restaurent>>getAllRestaurent(@RequestHeader("Authorization") String jwt) throws Exception{
		User user =userService.findUserByJwtToken(jwt);
		
		List<Restaurent> restaurent = restaurentService.getAllRestaurent();
		return new ResponseEntity<List<Restaurent>>(restaurent,HttpStatus.OK);
		
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Restaurent>findRestaurentById(@RequestHeader("Authorization") String jwt,@PathVariable Long id) throws Exception{
		User user =userService.findUserByJwtToken(jwt);
		
		Restaurent restaurent = restaurentService.findRestaurentById(id);
		return new ResponseEntity<Restaurent>(restaurent,HttpStatus.OK);
		
	}
	
	@PutMapping("/{id}/add-favorite")
	public ResponseEntity<RestaurantDto>addfavoritRestaurent(@RequestHeader("Authorization") String jwt,@PathVariable Long id) throws Exception{
		User user =userService.findUserByJwtToken(jwt);
		
		RestaurantDto restaurent = restaurentService.addToFavorites(id, user);
		return new ResponseEntity<RestaurantDto>(restaurent,HttpStatus.OK);
		
	}

}
