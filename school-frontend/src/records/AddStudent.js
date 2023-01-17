import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function AddStudent(props) {
    let navigate=useNavigate()
    let params=useParams();
    console.log(params);
    const[user,setUser]=useState({
     name:"",
     date_of_birth:"",
     gender:"",
     guardian:"",
     contact_number:"",
     section_id: params.id
    });
    const{name,date_of_birth,gender,guardian,contact_number,section_id}=user
    const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})    

    };
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/student",user)

        navigate(`/student/${params.id}`)
        //navigate("/")

    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Add Student</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                    Name
                    <span style={{color:'red'}}>*</span>
                    </label>
                    <input type={'text'}
                    className='form-control' placeholder='Student name'
                    name='name'
                    value={name}
                    onChange={(e)=>onInputChange(e)}
                    required
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Birthday' className='form-label'>
                    Brithday
                    <span style={{color:'red'}}>*</span>
                    </label>
                    <input type={'date'}
                    className='form-control' placeholder='Date of Birth'
                    name='date_of_birth'
                    value={date_of_birth}
                    onChange={(e)=>onInputChange(e)}
                    required
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Gender' className='form-label'>
                    Gender
                    <span style={{color:'red'}}>*</span>
                    </label>
                    <input type={'text'}
                    className='form-control' placeholder='Gender'
                    name='gender'
                    value={gender}
                    onChange={(e)=>onInputChange(e)}
                    required
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Guardian' className='form-label'>
                    Guardian
                    <span style={{color:'red'}}>*</span>
                    </label>
                    <input type={'text'}
                    className='form-control' placeholder='Guardian'
                    name='guardian'
                    value={guardian}
                    onChange={(e)=>onInputChange(e)}
                    required
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Number' className='form-label'>
                    Number
                    <span style={{color:'red'}}>*</span>
                    </label>
                    <input type={'text'}
                    className='form-control' placeholder='Contact Number'
                    name='contact_number'
                    value={contact_number}
                    onChange={(e)=>onInputChange(e)}
                    required
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
