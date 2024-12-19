import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'

function Navbar() {


  return (
    
        <ul className=' flex gap-20 mb-10 justify-start px-16 pt-8 pb-2 text-blue-700 text-xl font-medium poppins'>
            <li>
                <NavLink to="/" className={({isActive})=>`${isActive?'text-slate-800':''}`} > Home </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive})=>`${isActive?'text-slate-800':''}`}> About </NavLink>
            </li>
            <li className='relative' >
                <NavLink href="" className='hover:underline'> Projects </NavLink>
                
            </li>
            <li>
                <NavLink to="/contact" className={({isActive})=>`${isActive?'text-slate-800':''}`}> Contact</NavLink>
            </li>
            <li className='ml-auto'>
                <a href=""> </a>
            </li>
        </ul>
    
  )
}

export default Navbar