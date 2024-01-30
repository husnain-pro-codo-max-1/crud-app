import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';


function Read() {
  
  const [apidata , setApiData] = useState([]);
  
  function Getdata(){
    Axios.get('https://65a92b52219bfa371868a755.mockapi.io/crud')
    .then((response)=>
    {

        setApiData(response.data);
    })

}

function handledelete(id)
 {
  Axios.delete(`https://65a92b52219bfa371868a755.mockapi.io/crud/${id}`).then((response)=>{
    Getdata();
  })

}

const setdatatostorage = (id,name ,age,email)=>
{
  localStorage.setItem('id',id);
  localStorage.setItem('name',name);
  localStorage.setItem('age',age);
  localStorage.setItem('email',email);

}

useEffect(()=>{

  Getdata();

},[])

  return (
      <>
        <div className='row'>
          <div  className='col-md-12'>
          <div className='mb-2 mt-2'>
          <Link to = '/create'>
          <button className='btn btn-success'>CREATE NEW DATA</button>
          </Link>
          </div>
            <table className='table table-bordered table-striped  table-dark table-hover'>
              <thead>
                
                <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>EDIT</th>
                <th>DELETE</th>
               </tr>

              </thead>

              <tbody>
                
                {
                  apidata.map((item) =>
                  
                  {
                    return (  
               <> <tr>
                <td>{item.id}</td>
                <td>{item.e_name}</td>
                <td>{item.e_age}</td>
                <td>{item.e_email}</td>
                <td>
                
                <Link to='/edit'>
                  <button className='btn btn-success' onClick={()=> setdatatostorage(item.id,item.e_name,item.e_age,item.e_email)}>EDIT</button>
                 </Link>
                
                </td>
                
                <td> 
                <button className='btn btn-danger' onClick={()=>{if(window.confirm("Are you sure to delete this data")){{handledelete(item.id)}}} }>DELETE</button>
                
                </td>
               </tr>
               </>
                    )

                  })
                }
                
                            
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
}

export default Read