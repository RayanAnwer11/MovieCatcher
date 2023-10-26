package com.movie.moviecatcher.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.moviecatcher.Models.Movie;

public interface MovieRepo extends JpaRepository<Movie, Long>{
    List<Movie> findByName(String name);
    
}
