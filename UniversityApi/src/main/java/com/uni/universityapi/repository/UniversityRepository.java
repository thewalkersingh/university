package com.uni.universityapi.repository;
import com.uni.universityapi.model.University;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UniversityRepository extends JpaRepository<University, Integer> {
	List<University> findByNameContainingAndCountryContaining(String name, String country);
	
	List<University> findByNameContainingAndCountryContaining(String name, String country, Pageable pageable);
	
	List<University> findByFavouriteTrue();
}