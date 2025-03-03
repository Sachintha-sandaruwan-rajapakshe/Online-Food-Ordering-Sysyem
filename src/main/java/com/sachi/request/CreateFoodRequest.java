package com.sachi.request;
import java.util.List;

import com.sachi.Model.Category;
import com.sachi.Model.IngredientItem;

public class CreateFoodRequest {
	private String name;
	private String description;
	private Long price;
	private Category category;
	private List<String>images;
	private Long restaurentId;
	private boolean vegetarin;
	private boolean seasional;
	private List<IngredientItem>ingredients;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Long getPrice() {
		return price;
	}
	public void setPrice(Long price) {
		this.price = price;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public List<String> getImages() {
		return images;
	}
	public void setImages(List<String> images) {
		this.images = images;
	}
	public Long getRestaurentId() {
		return restaurentId;
	}
	public void setRestaurentId(Long restaurentId) {
		this.restaurentId = restaurentId;
	}
	public boolean isVegetarin() {
		return vegetarin;
	}
	public void setVegetarin(boolean vegetarin) {
		this.vegetarin = vegetarin;
	}
	public boolean isSeasional() {
		return seasional;
	}
	public void setSeasional(boolean seasional) {
		this.seasional = seasional;
	}
	public List<IngredientItem> getIngredients() {
		return ingredients;
	}
	public void setIngredients(List<IngredientItem> ingredients) {
		this.ingredients = ingredients;
	}
	
	

}
