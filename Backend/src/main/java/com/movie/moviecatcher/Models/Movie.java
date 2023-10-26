package com.movie.moviecatcher.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Movie extends SuperMovie{
    @ManyToOne
    @JoinColumn(name = "movie_api_id")
    private MovieGen movieGen;

    public Movie(String name) {
        super(name);
    }
    public Movie(){

    }
    public MovieGen getMovieGen() {
        return movieGen;
    }
    public void setMovieGen(MovieGen movieGen) {
        this.movieGen = movieGen;
    }
    
    
    
}
