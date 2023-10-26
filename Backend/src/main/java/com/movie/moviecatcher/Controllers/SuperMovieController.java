package com.movie.moviecatcher.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie.moviecatcher.Models.SuperMovie;
import com.movie.moviecatcher.Repositories.SuperMovieRepo;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/SuperMovie")
public class SuperMovieController {
    @Autowired
    private SuperMovieRepo superMovieRepo;
    
    @GetMapping("/{id}")
    public SuperMovie getSuperMovieByID(@PathVariable long id ){
        return superMovieRepo.findById(id).orElse(null);
    }
    
}
