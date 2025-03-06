package com.sachi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.service.CategoryService;
import com.sachi.service.UserService;

@RestController
@RequestMapping("/api/admin/category")
public class CategoryController {
	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private UserService userService;
	

}
