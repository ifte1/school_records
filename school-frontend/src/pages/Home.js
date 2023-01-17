import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
    const [classes,setClasses]=useState([])
    
    useEffect(()=>{
        loadClasses();
        
    },[])
    const loadClasses=async()=>{
        const result=await axios.get("http://localhost:8080/classes")
        setClasses(result.data);
    }
  return (
    <div className='container'>
        <div className='py-4'>
            <div>
            <Link className='btn btn-outline-info mb-2'to="/addclass" >Add Class</Link>
            </div>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Class Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        classes.map((c)=>(
            <tr>
             <td>{c.id}</td>
             <td>{c.class_name}</td>
             
             <td>
                <Link className='btn btn-outline-primary mx-1' to={`/Section/${c.id}`}>Enter</Link>
             </td>
            
            </tr>
            
        ))
    }
    

  </tbody>
</table>

        </div>

    </div>
  )
}
