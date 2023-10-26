package com.movie.moviecatcher.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie.moviecatcher.Models.Movie;
import com.movie.moviecatcher.Repositories.MovieRepo;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/movie/bio")
public class MovieController {
    @Autowired
    private MovieRepo movieRepo;

    @GetMapping("/{name}")
    public List<Movie> getMovieByName(@PathVariable String name){
        return movieRepo.findByName(name);
    }
    
    @GetMapping("/all")
    public List<Movie> getAllNames(){
        return movieRepo.findAll();
    }
}
