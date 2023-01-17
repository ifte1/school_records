package com.studentrecords.schoolbackend.Service;

import com.studentrecords.schoolbackend.model.Sections;
import com.studentrecords.schoolbackend.repository.SectionsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SectionServiceImpl {
    @Autowired
    private SectionsRepository sectionsRepository;
    @Transactional
    public List<Sections> findByClassId(int class_id){
        return sectionsRepository.findByClassId(class_id);

    }
}
