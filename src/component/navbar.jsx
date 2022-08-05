import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom"

const Navbar = () => 
{

    return (
        <Box >

            <AppBar color="secondary" position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>Kavita </Typography>
                    <Button color="inherit" component={Link} to="/"> Home </Button>
                    {/* <Button color="inherit" component={Link} to="/about">About</Button> */}
                    {/* <Button color="inherit" component={Link} to="/contact">Contact</Button> */}

                    <Button color="success" variant="contained" component={Link} to="/users/add">Add User</Button>

                </Toolbar>
            </AppBar >
        </Box >

    )
}

export default Navbar