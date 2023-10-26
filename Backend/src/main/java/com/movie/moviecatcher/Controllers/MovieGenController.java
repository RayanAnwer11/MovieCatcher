package com.movie.moviecatcher.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie.moviecatcher.Models.MovieGen;
import com.movie.moviecatcher.Repositories.MovieGenRepo;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/Api")
public class MovieGenController {
    @Autowired
    private MovieGenRepo movieGenRepo;

    @GetMapping("/id/{id}")
    public MovieGen getMovieGenById(@PathVariable Long id){
        return movieGenRepo.findById(id).orElse(null);
    }

    @GetMapping("/{name}")
    public List<MovieGen> getMovieGenByName(@PathVariable String name){
        return movieGenRepo.findByName(name);
    }
}
