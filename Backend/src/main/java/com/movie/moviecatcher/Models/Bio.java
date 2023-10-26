package com.movie.moviecatcher.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Bio extends SuperMovie {
    @ManyToOne
    @JoinColumn(name = "Bio_api_id")
    private MovieGen movieGen;

    private String name, description, image, linkedin, github;

    public Bio() {
    }

    public Bio(MovieGen movieGen, String name, String description, String image, String linkedin, String github) {
        this.movieGen = movieGen;
        this.name = name;
        this.description = description;
        this.image = image;
        this.github = github;
        this.linkedin = linkedin;
    }

    public MovieGen getMovieGen() {
        return movieGen;
    }

    public void setMovieGen(MovieGen movieGen) {
        this.movieGen = movieGen;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

}
