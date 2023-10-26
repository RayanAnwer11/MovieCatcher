package com.movie.moviecatcher.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.moviecatcher.Models.MovieGen;

public interface MovieGenRepo extends JpaRepository<MovieGen, Long>{
    List<MovieGen> findByName(String name);
    
}
