import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[age, setAge] = useState(0);

  const navigate = useNavigate()

   
  const handleSubmit = async (e) =>{
      e.preventDefault();

      const addUser = {name, email, age};

      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        body: JSON.stringify(addUser),
        headers:{
          "Content-Type": "application/json"
        }
      })

      const result = await response.json()

      if(!response.ok){
        console.log(result.error)
      }

      if(response.ok){
        console.log(result)

        navigate("/read")
      }
  }

  return (
    <div className='container mt-5'>

        <h2 className='text-center bg-dark text-white p-3'>Enter User Details Here</h2>

      <form onSubmit={handleSubmit} className='border m-4 p-4 shadow'>
        <div className="mb-3">
          <label className="form-label">User Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/> 
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
          <div className="mb-3">
          <label className="form-label">Age of User:</label>
          <input type="number" className="form-control" value={age} onChange={(e)=>setAge(e.target.value)}/>
        </div>
         
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default Create