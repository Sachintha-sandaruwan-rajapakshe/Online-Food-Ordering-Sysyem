package com.sachi.request;

public class IngredientRequest {
	private String name;
	private Long categoryId;
	private Long restaurentId;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}
	public Long getRestaurentId() {
		return restaurentId;
	}
	public void setRestaurentId(Long restaurentId) {
		this.restaurentId = restaurentId;
	}
	
	
	
}
