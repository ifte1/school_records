import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Student() {
    
    const [student,setStudent]=useState([])
    let params=useParams();
    console.log(params);
    useEffect(()=>{
        loadClasses();
        
    },[])
    const loadClasses=async()=>{
        const result=await axios.get(`http://localhost:8080/students/${params.id}`)
        setStudent(result.data);
    }
  return (
    <div className='container'>
        <div className='py-4'>
            <div>
            <Link className='btn btn-outline-info mb-2'to={`/addstudent/${params.id}`} >Add Student</Link>
            </div>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Birthdate</th>
      <th scope="col">Gender</th>
      <th scope="col">Guardian</th>
      <th scope="col">Contact_Number</th>
    </tr>
  </thead>
  <tbody>
    {
        student.map((student)=>(
            <tr>
             <td>{student.id}</td>
             <td>{student.name}</td>
             <td>{student.date_of_birth}</td>
             <td>{student.gender}</td>
             <td>{student.guardian}</td>
             <td>{student.contact_number}</td>
            
            </tr>
            
        ))
    }
    

  </tbody>
</table>

        </div>

    </div>
  )
}
