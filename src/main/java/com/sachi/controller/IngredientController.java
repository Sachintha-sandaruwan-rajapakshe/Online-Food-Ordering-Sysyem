package com.sachi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.Category;
import com.sachi.Model.IngredientCategory;
import com.sachi.Model.IngredientItem;
import com.sachi.Model.User;
import com.sachi.request.IngredientCategoryRequest;
import com.sachi.request.IngredientRequest;
import com.sachi.service.IngredientsService;
import com.sachi.service.UserService;

@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientController {
	@Autowired
	private IngredientsService ingredientsService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/category")
	public ResponseEntity<IngredientCategory> createIngredientCategory(@RequestBody IngredientCategoryRequest req) throws Exception{
		IngredientCategory  item = ingredientsService.createIngredientsCategory(req.getName(), req.getRestaurentId());
		
		return new ResponseEntity<IngredientCategory>(item,HttpStatus.CREATED);
	}
	
	@PostMapping()
	public ResponseEntity<IngredientItem> createIngredientItem(@RequestBody IngredientRequest req) throws Exception{
		IngredientItem item = ingredientsService.createIngredientItem( req.getRestaurentId(),req.getName(),req.getCategoryId());
		
		return new ResponseEntity<IngredientItem>(item,HttpStatus.CREATED);
	}
	
	@PutMapping("/{id}/stock")
	public ResponseEntity<IngredientItem> updateIngredientStoke(@PathVariable Long id) throws Exception{
		IngredientItem item = ingredientsService.updateIngredientItem(id);
		
		return new ResponseEntity<IngredientItem>(item,HttpStatus.OK);  
	}
	
	@GetMapping("/restaurent/{id}")
	public ResponseEntity<List<IngredientItem>> getrestaurentIngredient(@PathVariable Long id) throws Exception{
		List<IngredientItem> item = ingredientsService.findRestaurentsIngredients(id);
		
		return new ResponseEntity<List<IngredientItem>>(item,HttpStatus.OK);  
	}
	
	@GetMapping("/restaurent/{id}/category")
	public ResponseEntity<List<IngredientCategory>> getrestaurentIngredientCategory(@PathVariable Long id) throws Exception{
		List<IngredientCategory> item = ingredientsService.findIngredientCategoryByRestaurentId(id);
		
		return new ResponseEntity<List<IngredientCategory>>(item,HttpStatus.OK);  
	}
	
	@DeleteMapping("/category/delete/{id}")
	public ResponseEntity<IngredientCategory> deleteRestaurentCategory(
	        @PathVariable Long id,
	        @RequestHeader("Authorization") String jwt) throws Exception {
	    
	    User user = userService.findUserByJwtToken(jwt);
	    IngredientCategory deletedCategory = ingredientsService.deleteCategoryByCategoryId(id);
	    return new ResponseEntity<>(deletedCategory, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<IngredientItem> deleteIngredientItem(
	        @PathVariable Long id,
	        @RequestHeader("Authorization") String jwt) throws Exception {
	    
	    User user = userService.findUserByJwtToken(jwt);
	    IngredientItem deletedingredient = ingredientsService.deleteIngredientByItemId(id);
	    return new ResponseEntity<>(deletedingredient, HttpStatus.OK);
	}

}
