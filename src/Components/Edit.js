import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Edit() {
    const navigate = useNavigate();
    
    const [id, setID] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge ]= useState('');
    const [email, setEmail] = useState('');

    useEffect(()=>{

        setID(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));

    },[])

    const handleupdate = (e)=>{
        e.preventDefault();
        Axios.put(`https://65a92b52219bfa371868a755.mockapi.io/crud/${id}`,{
            e_name:name,
            e_age:age,
            e_email:email,
        })
        
        .then((respone)=>
        {
           navigate('/');

        })
    }
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
                <h1>Update Data</h1>
            </div>    


        <form onSubmit={handleupdate}>
            <div className='form-group'>
                <label> Enter Name:</label>
                <input type='text' value={name}  onChange={(e)=> setName(e.target.value)} placeholder='Enter Name' className='form-control'/>
            </div>

            <div className='form-group'>
                <label> Enter Age:</label>
                <input type='text' value={age}  onChange={(e)=> setAge(e.target.value)} placeholder='Enter Age'    className='form-control'/>
            </div>

            <div className='form-group'>
                <label> Enter Email:</label>
                <input type='text'  value={email}  onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Email'   className='form-control'/>
            </div>
                <br/>
              <div className='d-grid'>
              <input type="submit"  value='Update'  className='btn btn-primary'/>
              </div>
        </form>

        </div>
    </div>
</>  
    )
}

export default Edit