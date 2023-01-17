package com.studentrecords.schoolbackend.repository;

import com.studentrecords.schoolbackend.model.Sections;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface SectionsRepository extends JpaRepository<Sections,Long> {

    @Query("SELECT t FROM Sections t WHERE t.class_id= :class_id")
    List<Sections> findByClassId(int class_id);
}
