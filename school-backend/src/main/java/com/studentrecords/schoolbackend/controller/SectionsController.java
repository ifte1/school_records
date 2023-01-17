package com.studentrecords.schoolbackend.controller;

import com.studentrecords.schoolbackend.Service.SectionServiceImpl;
import com.studentrecords.schoolbackend.model.Sections;
import com.studentrecords.schoolbackend.repository.SectionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class SectionsController {
    @Autowired
    private SectionsRepository sectionsRepository;
    @Autowired
    private SectionServiceImpl sectionServiceImpl;

    @PostMapping("/section")
    Sections newSections(@RequestBody Sections newSections){
        return sectionsRepository.save(newSections);
    }
    @GetMapping("/sections")
    List<Sections> getAllUser(){
        return sectionsRepository.findAll();
    }

//    @GetMapping("/sections/{classId}")
//    public List<Sections> getSectionsByClass(@PathVariable(value = "classId") int classId) {
//        List<Sections> sectionList = sectionsRepository.getAllSectionsByClass(classId);
//        return sectionList;
//    }

    @GetMapping(value = "/sections/{class_id}")
    public ResponseEntity<List<Sections>> findByClassId(@PathVariable int class_id){
        return new ResponseEntity<List<Sections>>(sectionServiceImpl.findByClassId(class_id), HttpStatus.OK);

    }
}
