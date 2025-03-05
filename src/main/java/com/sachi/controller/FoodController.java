package com.sachi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.service.FoodService;
import com.sachi.service.UserService;
@RestController
@RequestMapping("/api/food")
public class FoodController {
	@Autowired
	private FoodService foodService;
	
	@Autowired
	private UserService userService;

}
