package com.movie.moviecatcher.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.moviecatcher.Models.SuperMovie;

public interface SuperMovieRepo extends JpaRepository<SuperMovie, Long>{
    
}
