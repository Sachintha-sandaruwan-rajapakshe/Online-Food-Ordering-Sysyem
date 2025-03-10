package com.sachi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.Category;
import com.sachi.Model.User;
import com.sachi.service.CategoryService;
import com.sachi.service.UserService;

@RestController
@RequestMapping("/api/admin/category")
public class CategoryController {
	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping
	public ResponseEntity<Category> createCategory(@RequestBody  Category category,@RequestHeader("Authorization")String jwt)throws Exception{
		User user=userService.findUserByJwtToken(jwt);
		Category createCategory =categoryService.createCategory(category.getName(),user.getId());
		return new ResponseEntity<Category>(createCategory,HttpStatus.CREATED);
	}
	
	@GetMapping("/category/restaurent")
	public ResponseEntity<List<Category>>getRestaurentCategory(@RequestHeader("Authorization")String jwt)throws Exception{
		User user=userService.findUserByJwtToken(jwt);
		List<Category> categories =categoryService.findCategoryByRestaurentId(user.getId());
		return new ResponseEntity<List<Category>>(categories,HttpStatus.OK);
	}
	
	

}
