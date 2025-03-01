package com.sachi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sachi.Model.Restaurent;
@Repository
public interface RestaurentRepository extends JpaRepository<Restaurent, Long> {
	
	@Query("SELECT r FROM Restaurent r WHERE lower(r.name) lIKE lower( concat ('%',:query,'%'))OR lower(r.cuisineType)LIKE lower(concat('%',:query,'%'))")
	List<Restaurent> findBySearchQuery(String query);

	
	Restaurent findByOwnerId(Long userId);

}
