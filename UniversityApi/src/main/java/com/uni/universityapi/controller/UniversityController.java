package com.uni.universityapi.controller;
import com.uni.universityapi.model.University;
import com.uni.universityapi.service.UniversityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/university")
@CrossOrigin(origins = "http://localhost:3002")
public class UniversityController {
	private final UniversityService universityService;
	
	public UniversityController(UniversityService universityService) {
		this.universityService = universityService;
	}
	
	@GetMapping("/all")
	public List<University> getAll() {
		return universityService.getAll();
	}
	
	@GetMapping("/id/{id}")
	public University getById(@PathVariable int id) {
		return universityService.getById(id);
	}
	
	@PostMapping("/add")
	public University add(@RequestBody University university) {
		System.out.println("Saving University:" + university);
		return universityService.save(university);
	}
	
	@PutMapping("/update")
	public University update(@RequestBody University university) {
		return universityService.update(university);
	}
	
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id) {
		return universityService.delete(id);
	}
	
	@GetMapping("/search")
	public List<University> searchUniversities(
			@RequestParam(value = "name", required = false) String name,
			@RequestParam(value = "country", required = false) String country,
			@RequestParam(value = "limit", required = false) Integer limit) {
		return universityService.searchUniversities(name, country, limit);
	}
	
	@GetMapping("/favourites/all")
	public List<University> getFavourites() {
		return universityService.getFavourites();
	}
}