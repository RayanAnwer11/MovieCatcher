package com.movie.moviecatcher.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.moviecatcher.Models.Bio;

public interface BioRepo extends JpaRepository<Bio, Long> {
    List<Bio> findByName(String name);
    
}
