package com.movie.moviecatcher.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie.moviecatcher.Models.Bio;
import com.movie.moviecatcher.Repositories.BioRepo;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/bio")
public class bioController {
    @Autowired
    private BioRepo bioRepo;

    @GetMapping("/name/{name}")
    public List<Bio> getBioByName(@PathVariable String name){
        return bioRepo.findByName(name);
    }

    @GetMapping("/name/all")
    public List<Bio> getAllBios(){
        return bioRepo.findAll();
    }
    
}
