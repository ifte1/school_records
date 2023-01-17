import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function AddClass() {
    
    let navigate=useNavigate()
    const[classes,setUser]=useState({
        class_name:""
    });
    const{class_name}=classes;

    const onInputChange=(e)=>{
        setUser({class_name : e.target.value})

    };
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/class",classes)
        navigate("/")

    }

    

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h1 className='text-center m-4'>Add Class </h1>
                <form onSubmit={(e) => onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Class Name
                        <span style={{color:'red'}}>*</span>
                    </label>
                    <input
                    type={'text'} className='form-control'
                    placeholder='Enter Class Name'
                    name='class_name'
                    value={class_name}
                    onChange={(e)=>onInputChange(e)}
                    required
                    /> 
  
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link type='cancel' className='btn btn-outline-danger mx-3' to={'/'}>Cancel
                
                </Link>
                </form>
            </div>
        </div>
    </div>
  )
}
