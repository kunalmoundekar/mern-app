import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {

  const[data, setData] = useState();

  async function getData(){
    const response = await fetch("http://localhost:5000/read");
    const result = await response.json();

    if(!response.ok){
      console.log(result.error);
       
  }
  if(response.ok){
      setData(result);
   
  }
  }


  const handleDelete = async (id) => {

    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });

    const result = await response.json();

    if(!response.ok){
      console.log(result.error);
       
  }
  if(response.ok){
    alert("Are you sure you want to remove user data...?")

    setTimeout(() => {
      getData()

    }, 1000);
   
  }
  }


  useEffect(() => {
    getData();
  }, []);

  console.log(data)
  

  return (
    <div className='container m-5'>
      <h2 className='text-center bg-dark text-white p-3'>This is All Data of Users</h2>

      <div className='row'>

          {/* { data && data.length > 0 ? ( */}

        {  data?.map((ele)=>(

                 <div key={ele._id} className='col-3'>
                 <div className="card shadow m-2 p-4">
                   <div className="card-body">
                   <h2 className="card-title">{ele.name}</h2>
                   <h4 className="card-subtitle mb-2 text-muted">{ele.email}</h4>
                   <p className='text-muted'>{ele.age}</p>

                   <a href="#" className="card-link text-decoration-none border rounded-2 bg-danger text-white p-1" onClick={()=>handleDelete(ele._id)}>Delete User</a>

                   <Link to={`/${ele._id}`} className="card-link text-decoration-none border rounded-2 bg-success text-white p-1">Edit User</Link>

                   </div>
                 </div>
                 </div>

          )) 
        // ) : (
        //   <p className='text-center'>Loading Data........!</p>
        // )} 
        
        }

      </div>

    </div>
  )
}

export default Read;