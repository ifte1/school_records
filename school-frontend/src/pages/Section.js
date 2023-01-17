import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';

export default function Home() {
    let cid=useParams();
    console.log(cid);
    const [classes,setClasses]=useState([])
    
    useEffect(()=>{
        loadClasses();
        
    },[])
    const loadClasses=async()=>{
        const result=await axios.get(`http://localhost:8080/sections/${cid.id}`)
        setClasses(result.data);
    }
  return (
    <div className='container'>
        <div className='py-4'>
            <div>
            <Link className='btn btn-outline-info mb-2'to={`/addsection/${cid.id}`} >Add Section</Link>
            </div>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Section Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        classes.map((clas)=>(
            <tr>
             <td>{clas.id}</td>
             <td>{clas.section_name}</td>
             
             <td>
                <Link className='btn btn-outline-primary mx-1' to={`/Student/${clas.id}`}>Enter</Link>
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
