package com.studentrecords.schoolbackend.Service;
import com.studentrecords.schoolbackend.model.Students;
import com.studentrecords.schoolbackend.repository.StudentsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl {
    @Autowired
    private StudentsRepository studentsRepository;

    @Transactional
    public List<Students> findBySectionID(int section_id) {
        return studentsRepository.findBySectionID(section_id);
    }
}
