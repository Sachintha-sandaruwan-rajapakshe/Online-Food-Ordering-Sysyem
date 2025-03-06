package com.sachi.request;

public class IngredientCategoryRequest {
	private String name;
	private Long restaurentId;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getRestaurentId() {
		return restaurentId;
	}
	public void setRestaurentId(Long restaurentId) {
		this.restaurentId = restaurentId;
	}
	
	

}
