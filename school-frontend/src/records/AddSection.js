import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom';

export default function AddSection() {
    let navigate=useNavigate()
    let params=useParams();
    console.log(params);
    const[user,setUser]=useState({
        section_name:"",
        class_id:params.id
    });
    const{section_name,class_id}=user
    const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})    

    };
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/section",user)
        navigate("/")

    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Add Section</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                    Name
                    </label>
                    <input type={'text'}
                    className='form-control' placeholder='enter Section Name'
                    name='section_name'
                    value={section_name}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                
                <button type='submit' className='btn btn-outline-primary'>
                    Submit
                </button>
                <Link type='Cancel' className='btn btn-outline-danger mx-2' to="/">
                    Cancel
                </Link>
                </form>
            </div>
        </div>
    </div>
  )
}
