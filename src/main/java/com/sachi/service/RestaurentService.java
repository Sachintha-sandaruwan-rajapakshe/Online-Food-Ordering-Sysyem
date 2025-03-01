package com.sachi.service;

import java.util.List;

import com.sachi.Model.Restaurent;
import com.sachi.Model.User;
import com.sachi.dto.RestaurantDto;
import com.sachi.request.CreateRestaurentRequest;

public interface RestaurentService {
	public Restaurent createRestaurent(CreateRestaurentRequest req, User user) ;
	
	public Restaurent updateRestaurent(Long id,CreateRestaurentRequest updaredRestaurent)throws Exception;
		
	public void deleteRestaurent(Long restaurentId)throws Exception;
	
	public List<Restaurent>getAllRestaurent();
	
	public List<Restaurent>searchRestaurent(String keyword);
	
	public Restaurent findRestaurentById(Long id)throws Exception;
	
	public Restaurent findRestaurentByUserId(Long userId)throws Exception;
	
	public RestaurantDto addToFavorites(Long restarentId,User User)throws Exception;
	
	public Restaurent updateRestaurentStatus(Long id)throws Exception;

}
