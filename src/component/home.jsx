import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import axios from 'axios';

const Home = () => {

  
  const [val, setVal] = useState([])


  useEffect(()=>{
    loadUser()
  },[])

  const loadUser= async () =>{
   const result= await axios.get("http://localhost:5000/users")
   setVal(result.data)
  
  }


  const deleteUser =  id => {
    axios.delete(`http://localhost:5000/users/${id}`);
    loadUser();
  };

 


  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell align="right">Id</TableCell>
              <TableCell align="right"> Name</TableCell>
              <TableCell align="right">User Name</TableCell>
              <TableCell align="right">Email</TableCell>
             
              <TableCell variant="outlined">Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
                val?.map((user,index)=>(

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
             
              <>
              <TableCell align="right" key={index}>{index + 1}</TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.username}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>

              
              <Box sx={{display:"flex",justifyContent:"space-around"}}>
              <Button variant="outlined">View</Button>
              <Button variant="outlined" component={Link} to={`/users/edit/${user.id}`}>Edit</Button>
              <Button
                    variant='outlined'
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
              </Box>
              </>

              


               
              
             
           

          </TableRow>
           ))
                }
          
           </TableBody>
      </Table>
    </TableContainer>
    </div >
  )
}

export default Home