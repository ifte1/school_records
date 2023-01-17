package com.studentrecords.schoolbackend.exception;

public class StudentNotFoundException extends RuntimeException{
    public StudentNotFoundException(Long id){
        super("could not fount student with id"+id);
    }
}
