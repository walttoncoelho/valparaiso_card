import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home';
export function AppRoutes() {
  return (

 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />} />      
      </Routes>
 

  )
}
