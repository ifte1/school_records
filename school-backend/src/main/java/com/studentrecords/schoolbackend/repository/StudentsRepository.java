package com.studentrecords.schoolbackend.repository;


import com.studentrecords.schoolbackend.model.Students;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface StudentsRepository extends JpaRepository<Students,Long> {

    @Query("SELECT t FROM Students t WHERE t.section_id= :section_id")
    List<Students> findBySectionID(int section_id);
}
