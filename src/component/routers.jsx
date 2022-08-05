import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import  AddUser  from './addUser'
import EditUser from './editUser'
import Home from './home'
import Navbar from './navbar'


const Routeres = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/users/add' element={<AddUser />} />
                    <Route path='/users/edit/:id' element={<EditUser />} />


                    
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Routeres