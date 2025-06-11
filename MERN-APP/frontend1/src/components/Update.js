import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const navigate = useNavigate()

  const {id} = useParams();

  const getSingleUser = async ()=>{
    const response = await fetch(`http://localhost:5000/${id}`)

    const result = await response.json()

    if(!response.ok){
      console.log(result.error);
       
  }
  if(response.ok){
    
    console.log("update user", result)

    setName(result.name);
    setEmail(result.email);
    setAge(result.age);
   
  }
  }


  const handleUpdate = async (e) =>{
    e.preventDefault();

    const updatedUser = {name, email, age}

    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedUser),
        headers:{
          "Content-Type": "application/json"
        }
    })

    const result = await response.json();

    if(!response.ok){
        console.log(result.error)
      }

      if(response.ok){
        alert("Are you sure you want to updateuser data...?")
        console.log(result)

        navigate("/read")
      }
  }

  useEffect(()=>{
    getSingleUser()
  },[])

  return (
    <div className='container mt-5'>

      <h2 className='text-center bg-dark text-white p-3'>Update User Details Here</h2>

      <form onSubmit={handleUpdate} className='border m-4 p-4 shadow'>
        <div className="mb-3">
          <label className="form-label">User Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Age of User:</label>
          <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">Update User</button>
      </form>

    </div>
  )
}

export default Update