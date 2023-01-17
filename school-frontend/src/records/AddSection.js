import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom';

export default function AddSection() {
    let navigate=useNavigate()
    let params=useParams();
    console.log(params);
    const[section,setsection]=useState({
        section_name:"",
        class_id:params.id
    });
    const{section_name,class_id}=section
    const onInputChange=(e)=>{
    setsection({...section,[e.target.name]:e.target.value})    

    };
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/section",section)
        navigate(`/section/${params.id}`)

    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Add Section</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='SectionName' className='form-label'>
                    Section Name
                    <span style={{color:'red'}}>*</span>
                    </label>
                    <input type={'text'}
                    className='form-control' placeholder='enter Section Name'
                    name='section_name'
                    value={section_name}
                    onChange={(e)=>onInputChange(e)}
                    required
                    />
                </div>
                
                <button type='submit' className='btn btn-outline-primary'>
                    Submit
                </button>
                <Link type='Cancel' className='btn btn-outline-danger mx-2' to={`/section/${params.id}` }>
                    Cancel
                </Link>
                </form>
            </div>
        </div>
    </div>
  )
}
