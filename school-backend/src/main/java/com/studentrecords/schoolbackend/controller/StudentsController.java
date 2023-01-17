package com.studentrecords.schoolbackend.controller;

import com.studentrecords.schoolbackend.Service.StudentServiceImpl;
import com.studentrecords.schoolbackend.model.Students;
import com.studentrecords.schoolbackend.repository.StudentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class StudentsController {
    @Autowired
    private StudentsRepository studentsRepository;
    @Autowired
    private StudentServiceImpl studentServiceImpl;
    @PostMapping("/student")
    Students newStudents(@RequestBody Students newStudents){
        return studentsRepository.save(newStudents);
    }
    @GetMapping("/students")
    List<Students> getAllStudents(){
        return studentsRepository.findAll();
    }
    @GetMapping("/student/{id}")
    Students getUserById(@PathVariable Long id){
        return  studentsRepository.findById(id)
                .orElseThrow();

    }

    @GetMapping(value = "/students/{section_id}")
    public ResponseEntity<List<Students>> findBySectionId(@PathVariable int section_id){
        return new ResponseEntity<List<Students>>(studentServiceImpl.findBySectionID(section_id), HttpStatus.OK);

    }
}
