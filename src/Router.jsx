import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Profile from './Profile'
import Cart from './Cart'
import Sort from './Sort'

const Router = () => {
  const [cartnum, setcartnum] = useState(0);
  
  return (
    <div>
        <Routes>
            <Route path ='/' element = {<Signup/>}/>
            <Route path ="/login" element = {<Login/>} />
            <Route path ='/home' element = {<Home cartnum={cartnum} setcartnum={setcartnum}/>}/>
            <Route path="/profile" element={<Profile setcartnum={setcartnum}/>} />
            <Route path="/cart" element={<Cart cartnum={cartnum} setcartnum={setcartnum}/>} />
            <Route path="/sort" element={<Sort/>} />
            
        </Routes>
    </div>
  )
}

export default Router