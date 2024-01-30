 import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

 function Create() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate();

const handlesubmit = ((e)=>{
    e.preventDefault();
        Axios.post('https://65a92b52219bfa371868a755.mockapi.io/crud',
        {
            e_name : name,
            e_age :  age,
            e_email : email})
            .then(()=>{
                    navigate('/');
            })

})

    return (
        <>

            <div className='row'>
            <div className='col-md-4'>

            <div className='mb-2 mt-2'>
          <Link to = '/'>
          <button className='btn btn-success'>READ DATA</button>
          </Link>
          </div>
  
                    <div className='bg-primary p-4  text-center'>
                        <h1>Create Data</h1>
                    </div>    


                <form onSubmit={handlesubmit}>
                    <div className='form-group'>
                        <label> Enter Name:</label>
                        <input type='text' placeholder='Enter Name' onChange={(e)=>  setName(e.target.value)} className='form-control'/>
                    </div>

                    <div className='form-group'>
                        <label> Enter Age:</label>
                        <input type='text' placeholder='Enter Age'  onChange={(e)=>{setAge(e.target.value)}}  className='form-control'/>
                    </div>

                    <div className='form-group'>
                        <label> Enter Email:</label>
                        <input type='text' placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}}   className='form-control'/>
                    </div>
                        <br/>
                      <div className='d-grid'>
                      <input type="submit"  value='Submit'  className='btn btn-primary'/>
                      </div>
                </form>

                </div>
            </div>
        </>
    )
 }
 
 export default Create