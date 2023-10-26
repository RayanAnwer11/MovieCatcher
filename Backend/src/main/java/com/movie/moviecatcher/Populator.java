package com.movie.moviecatcher;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.movie.moviecatcher.Models.Bio;
import com.movie.moviecatcher.Models.Movie;
import com.movie.moviecatcher.Models.MovieGen;
import com.movie.moviecatcher.Repositories.BioRepo;
import com.movie.moviecatcher.Repositories.MovieGenRepo;
import com.movie.moviecatcher.Repositories.MovieRepo;

@Component
public class Populator implements CommandLineRunner{
    @Autowired
    private MovieRepo movieRepo;

    @Autowired
    private MovieGenRepo movieGenRepo;

    @Autowired
    private BioRepo bioRepo;

    @Override
    public void run(String... args) throws Exception {
        Movie movie1 = new Movie("First");
        movieRepo.save(movie1);

        MovieGen movieGen1 = new MovieGen("second");
        movieGenRepo.save(movieGen1);

        Bio Rayan = new Bio(movieGen1, "Rayan", "I am a developer engineer who enjoys crafting efficient software solutions. I excel in collaborative environments, staying up-to-date with the latest tech trends. My passion is enhancing user experiences and driving business success through code.", "rayan" ,"https://linkedin.com/in/rayan-anwer-20a1519a","https://github.com/RayanAnwer11");
        bioRepo.save(Rayan);

        Bio Korey = new Bio(movieGen1, "Korey", "As a software developer, I balance creativity with coding. Music, gaming, pet care, and family time inspire me. Continuous learning keeps my skills sharp, helping me craft exceptional software solutions.", "korey","https://www.linkedin.com/in/korey-stokes-85428a279/","https://github.com/KoreyJamal");
        bioRepo.save(Korey);

        Bio Kam = new Bio(movieGen1, "Kamron", "I'm passionate about creating and maintaining software solutions that empower users and contribute to a brighter, more efficient future. I excel in coding, problem-solving, and collaboration, ensuring innovative, secure, and user-friendly applications.", "kamron","https://www.linkedin.com/in/kamron-anderson0186/","https://github.com/KamronAnderson");
        bioRepo.save(Kam);

        Bio Jae = new Bio(movieGen1, "Jae", "Jae Descriptions", "jae","https://www.linkedin.com/in/jesse-evans-477a38a4/","https://github.com/jesseevans94" );
        bioRepo.save(Jae);

        Bio Shola = new Bio(movieGen1, "Shola", "Shola Descriptions", "shola","https://www.linkedin.com/in/sholzhokage/","https://github.com/SholzWCCI" );
        bioRepo.save(Shola);

        
    }
    
}
