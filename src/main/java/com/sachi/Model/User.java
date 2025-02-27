package com.sachi.Model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sachi.dto.RestaurantDto;

import jakarta.persistence.CascadeType;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String fullName;
	private String email;
	private String password;
	private USER_ROLE role;
	
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL,mappedBy ="customer" )
	private List<Order> orders = new ArrayList<>();
	
	@ElementCollection //when you just want to store a list of simple objects (e.g., a list of favorite restaurants, addresses, tags, etc.).
	private List<RestaurantDto> favorites = new ArrayList();
	
	@OneToMany(cascade = CascadeType.ALL,orphanRemoval = true) // user is deleted when automatically delete all address
	private List<Address> addresses = new ArrayList<>();
	

}
