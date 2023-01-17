package com.studentrecords.schoolbackend.repository;

import com.studentrecords.schoolbackend.model.Classes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassesRepository extends JpaRepository<Classes,Long> {
}
