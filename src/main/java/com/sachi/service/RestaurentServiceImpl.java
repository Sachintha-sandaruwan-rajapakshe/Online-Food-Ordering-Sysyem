package com.sachi.service;

import java.nio.file.OpenOption;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sachi.Model.Address;
import com.sachi.Model.Restaurent;
import com.sachi.Model.User;
import com.sachi.dto.RestaurantDto;
import com.sachi.repository.AddressRepository;
import com.sachi.repository.RestaurentRepository;
import com.sachi.repository.UserRepository;
import com.sachi.request.CreateRestaurentRequest;
@Service
public class RestaurentServiceImpl implements RestaurentService{
	@Autowired
	private RestaurentRepository restaurentRepository;
	@Autowired
	private AddressRepository addressRepository;
	@Autowired
	private UserRepository userRepository;

	@Override
	public Restaurent createRestaurent(CreateRestaurentRequest req, User user) {
		Address address = addressRepository.save(req.getAddress());
		Restaurent restaurent =new Restaurent();
		restaurent.setAddress(req.getAddress());
		restaurent.setContactInformation(req.getContactInformation());
		restaurent.setCuisineType(req.getCuisineType());
		restaurent.setDescription(req.getDescription());
		restaurent.setImages(req.getImages());
		restaurent.setName(req.getName());
		restaurent.setOpeningHours(req.getOpeningHours());
		restaurent.setRegistrationDate(LocalDateTime.now(ZoneId.systemDefault()));
		restaurent.setOwner(user);
		return restaurentRepository.save(restaurent);
	}

	@Override
	public Restaurent updateRestaurent(Long id, CreateRestaurentRequest updaredRestaurent) throws Exception {
		Restaurent restaurent = findRestaurentById(id);
		if(restaurent.getCuisineType()!=null) {
			restaurent.setCuisineType(updaredRestaurent.getCuisineType());
		}
		if(restaurent.getDescription()!=null) {
			restaurent.setDescription(updaredRestaurent.getDescription());
		}
		if(restaurent.getName()!=null) {
			restaurent.setName(updaredRestaurent.getName());
		}
		if(restaurent.getContactInformation()!=null) {
			restaurent.setContactInformation(updaredRestaurent.getContactInformation());
		}
		if(restaurent.getOpeningHours()!=null) {
			restaurent.setOpeningHours(updaredRestaurent.getOpeningHours());
		}
		if(restaurent.getImages()!=null) {
			restaurent.setImages(updaredRestaurent.getImages());
		}
        return restaurentRepository.save(restaurent);
	}

	@Override
	public void deleteRestaurent(Long restaurentId) throws Exception {
		Restaurent restaurent =findRestaurentById(restaurentId);
		restaurentRepository.delete(restaurent);
		
	}

	@Override
	public List<Restaurent> getAllRestaurent() {
		
		return restaurentRepository.findAll();
	}

	@Override
	public List<Restaurent> searchRestaurent(String keyword) {
		
		return restaurentRepository.findBySearchQuery(keyword);
	}

	@Override
	public Restaurent findRestaurentById(Long id) throws Exception {
		Optional<Restaurent>opt=restaurentRepository.findById(id);
		if(opt.isEmpty()) {
			throw new Exception("Restaurent Not Found with id"+id);
		}
		return opt.get();
	}

	@Override
	public Restaurent findRestaurentByUserId(Long userId) throws Exception {
		Restaurent restaurent =restaurentRepository.findByOwnerId(userId);
		if(restaurent==null) {
			throw new Exception("Restaurent not found with owner id");
		}
		return restaurent;
	}

	@Override
	public RestaurantDto addToFavorites(Long restaurentId, User user) throws Exception {
	    // Find the restaurant by its ID
	    Restaurent restaurent = findRestaurentById(restaurentId);

	    // Convert Restaurent to RestaurantDto
	    RestaurantDto dto = new RestaurantDto();
	    dto.setDescription(restaurent.getDescription());
	    dto.setId(restaurent.getId());
	    dto.setImages(restaurent.getImages());
	    dto.setTitle(restaurent.getName());

	    // Check if the user's favorites already contain the restaurant (using DTO comparison)
	    List<RestaurantDto> favorites = user.getFavorites();
	    
	    boolean exists = favorites.stream().anyMatch(fav -> fav.getId().equals(restaurent.getId()));

	    if (exists) {
	        favorites.removeIf(fav -> fav.getId().equals(restaurent.getId())); // Remove if exists
	    } else {
	        favorites.add(dto); // Add DTO instead of Restaurent
	    }

	    // Save the updated user entity
	    userRepository.save(user);

	    return dto;
	}



	@Override
	public Restaurent updateRestaurentStatus(Long id) throws Exception {
		Restaurent restaurent = findRestaurentById(id);
		restaurent.setOpen(!restaurent.isOpen());
		return restaurentRepository.save(restaurent);
	}

}
