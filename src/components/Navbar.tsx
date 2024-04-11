import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='flex items-center justify-end px-[7%] py-12 '>
      <div className='flex items-center gap-12 text-grayish font-bold text-lg'>
        <NavLink to="/" className="px-6 py-4 rounded-lg bg-bg hover:bg-white hover:text-accent duration-300 hover:shadow-lg">Home</NavLink>
        <NavLink to="/aboutUs" className="px-6 py-4 rounded-lg bg-bg hover:bg-white hover:text-accent duration-300 hover:shadow-lg">About Us</NavLink>
        <NavLink to="/locations" className="px-6 py-4 rounded-lg bg-bg hover:bg-white hover:text-accent duration-300 hover:shadow-lg">Locations</NavLink>
        <NavLink to="/developers" className="px-6 py-4 rounded-lg bg-bg hover:bg-white hover:text-accent duration-300 hover:shadow-lg">Developers</NavLink>
        <button className="px-4 py-4 rounded-lg bg-bg hover:bg-white hover:text-accent duration-300 hover:shadow-lg"><IoMenu /></button>
      </div>
    </div>
  )
}

export default Navbar
