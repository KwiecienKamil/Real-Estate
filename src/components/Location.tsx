import React from 'react'

import map from "../assets/map.png"

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const Location = () => {
  return (
    <div className='flex justify-center py-16'>
        <div className="w-[1400px] flex items-center justify-between">
            <div className="w-[40%]">
                <h6 className='text-3xl font-semibold'>Where Are We Located?</h6>
                <p className='text-grayish py-4 w-[70%]'>We provide a quality, consumer driver platform for   
                new property buyers. For the first time, prospective buyers will be able to access every listing 
                consisting of New Age Homes or properties  with amenities and life style features of the 21st century 
                all in one place.</p>
                <p className='text-grayish font-semibold'>LODHA Excelus, NM Joshi Marg, Mahalaxmi, Mumbai - 400 001</p>
                <div className="flex items-center gap-4 text-grayish pt-8 text-lg">
                <span className='hover:text-accent duration-300'><FaFacebookF /></span>
                <span className='hover:text-accent duration-300'><FaTwitter /></span>
                <span className='hover:text-accent duration-300'><FaInstagram /></span>
                <span className='hover:text-accent duration-300'><FaYoutube /></span>
                <span className='hover:text-accent duration-300'><FaLocationArrow /></span>
                </div>
            </div>
            <div className="w-[40%] flex justify-end">
            <img src={map} alt="Map" className='w-[80%]'/>
            </div>
        </div>
      
    </div>
  )
}

export default Location;