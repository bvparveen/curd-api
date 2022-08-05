import { Box ,Typography,Button,TextField} from '@mui/material';
import React, { useEffect, useState } from 'react'
import {useNavigate,useParams} from "react-router-dom"
import axios from 'axios';


const EditUser = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    console.log(id,"hello");

   

    const [users,setUSers]=useState({
        name:"",
        username:"",
        email:"",
        phone:""
    })
    const {email,username,name,phone}=users

    const onChangeInput=(e)=>{
        console.log(e.target.value);
        setUSers({...users,[e.target.name]:e.target.value})
    }


    useEffect(()=>{
     loadUser()
    },[])

    const loadUser =async ()=>{
    const result =await axios.get(`http://localhost:5000/users/${id}`)
    setUSers(result.data)
    console.log(result.data);
    }


  
     
   const onSubmit = async e => {
    e.preventDefault()
   const res= await axios.put(`http://localhost:5000/users/${id}`, users);
   console.log(res,"hgidghuig") 
   navigate("/")

  }

  return (
    <div>
        <Box>
        <br />
        <br />

            <Typography>
               Edit user details
            </Typography>
            <br />
            <br />
            <br />

            <form  onSubmit={e => onSubmit(e)}>
                <Box sx={{diplay:"flex",justifyContent:"center",flexDirection:"column"}}>
                <TextField 
                label="name"
                name="name"
                value={name}
                onChange={e=>onChangeInput(e)}

                
                />
                <br />

                 <TextField 
                label="user-name"
                name="username"
                value={username}
                onChange={e=>onChangeInput(e)}

                
                />
                <br />

                 <TextField 
                label="email"
                name="email"
                value={email}
                onChange={e=>onChangeInput(e)}

                
                />
                <br />

                 <TextField 
                label="phone"
                name="phone"
                value={phone}
                onChange={e=>onChangeInput(e)}

                
                />
                <br />
                <br />


                <Button  variant="outlined" type="submit">
                    Submit
                </Button>

                </Box>
              
            </form>
        </Box>
    </div>
  )
}

export default EditUser