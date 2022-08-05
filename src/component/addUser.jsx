import React,{useState} from 'react'
import { Box, TextField, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddUser = () => {
const navigate=useNavigate()

  const [user,setUser]=useState({
   
    name:"",
    username:"",
    email:"",
    phone:""
  })
   const {name,username,email,phone}=user

   const noChangeHandle=(e)=>{
    console.log(e.target .value);
    setUser({...user,[e.target.name]:e.target.value})
   }

   const onSubmit=  async e =>{
    e.preventDefault()
    await axios.post("http://localhost:5000/users",user)
    navigate("/")
   }
  return (
    <div>
    <Box>
      <br />
      <Box sx={{
        display: "flex", flexDirection: "column",
        justifyContent: "center", width: 600, margin: "auto"
      }}>
        <form  onSubmit={e => onSubmit(e)}>
       
        <br />
        <br />

        <TextField
          type="text"
          label="name"
          variant="filled"
          value={name}
          name="name"
          onChange={e => noChangeHandle(e)}

        />
        <br />
        <br />
        <TextField
          type="text"
          name="username"
          label="name-user"
          variant="filled"
          value={username}
          onChange={e=>noChangeHandle(e)}

        />
        <br />
        <br />
        <TextField
          type="email"
          label="Email"
          variant="filled"
          name="email"
          value={email}
          onChange={e=>noChangeHandle(e)}

        />
        <br />
        <br />
        <TextField
        type="number"
        name="phone"
          label="phone"
          variant="filled"
          value={phone}
          onChange={e=>noChangeHandle(e)}

        />
        <br />
        <br />
        <Button variant="contained" type="submit">Submit</Button>

        </form>
       

       
      </Box>


    </Box>
  </div>
  )
}

export default AddUser