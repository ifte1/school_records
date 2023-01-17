package com.studentrecords.schoolbackend.controller;

import com.studentrecords.schoolbackend.model.Classes;
import com.studentrecords.schoolbackend.repository.ClassesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ClassesController {
    @Autowired
    private ClassesRepository classesRepository;

    @PostMapping("/class")
    Classes newClasses(@RequestBody Classes newClasses){
        return classesRepository.save(newClasses);
    }
    @GetMapping("classes")
    List<Classes> getAllClasses(){
        return classesRepository.findAll();
    }

}

