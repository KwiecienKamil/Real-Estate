import React from 'react'
import { NavLink } from 'react-router-dom'

import { IoMenu } from "react-icons/io5";
import logo from "../assets/home-logo.png";

const TopNavbar = () => {
  return (
    <div className='pt-4 flex justify-center'>
        <div className="w-[1600px] flex items-center justify-between">
            <div className="">
            <img src={logo} alt="logo" className="w-[60px]" />
            </div>
            <div className='flex items-center gap-12 text-grayish font-bold text-md'>
        <NavLink to="/" className="px-6 py-4 rounded-lg bg-bg hover:bg-white hover:text-accent duration-300 hover:shadow-lg">Home</NavLink>
        <NavLink to="/aboutUs" className="px-6 py-4 rounded-lg bg-bg hover:bg-white hover:text-accent duration-300 hover:shadow-lg">About Us</NavLink>
        <NavLink to="/locations" className="px-6 py-4 rounded-lg bg-bg hover:bg-white hover:text-accent duration-300 hover:shadow-lg">Locations</NavLink>
        <NavLink to="/developers" className="px-6 py-4 rounded-lg bg-bg hover:bg-white hover:text-accent duration-300 hover:shadow-lg">Developers</NavLink>
        <button className="px-4 py-4 rounded-lg bg-bg hover:bg-white hover:text-accent duration-300 hover:shadow-lg"><IoMenu /></button>
      </div>

        </div>
      
    </div>
  )
}

export default TopNavbar
