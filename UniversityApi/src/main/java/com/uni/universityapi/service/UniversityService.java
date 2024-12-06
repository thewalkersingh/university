package com.uni.universityapi.service;
import com.uni.universityapi.model.University;
import com.uni.universityapi.repository.UniversityRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UniversityService {
	private final UniversityRepository universityRepository;
	
	public UniversityService(UniversityRepository universityRepository) {
		this.universityRepository = universityRepository;
	}
	
	public List<University> getAll() {
		return universityRepository.findAll();
	}
	
	public University getById(int id) {
		return universityRepository.findById(id).get();
	}
	
	public University save(University university) {
		return universityRepository.save(university);
	}
	
	public University update(University university) {
		return universityRepository.save(university);
	}
	
	public String delete(int id) {
		universityRepository.deleteById(id);
		return "University deleted";
	}
	
	public List<University> searchUniversities(String name, String country, Integer limit) {
		if (limit != null && limit > 0) {
			Pageable pageable = PageRequest.of(0, limit);
			return universityRepository.findByNameContainingAndCountryContaining(name, country, pageable);
		}
		else {
			return universityRepository.findByNameContainingAndCountryContaining(name, country);
		}
	}
	
	public List<University> getFavourites() {
		return universityRepository.findByFavouriteTrue();
	}
}