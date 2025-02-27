package com.sachi.Model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Food {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	private String description;
	private Long price;
	
	@ManyToOne
	private Category foodCategory;
	
	@ElementCollection
	@Column(length = 1000)
	private List<String> images;
	
	private boolean availabel;
	
	@ManyToOne
	private Restaurent restaurent;
	
	private boolean isVegetarian;
	private boolean isSeasonal;
	
	@ManyToMany
	private List<IngredientItem> ingredients = new ArrayList<>();
	
	private Date creationDate;
	
}
