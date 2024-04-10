import React from 'react'

import apartment from "../../assets/imperial.png";

const ApartmentPreview = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/3">
            <div>
            <h3>Lodha</h3>
            <h4>Imperial Heights</h4>
            </div>
            <div>
                <div className="flex items-center gap-4"></div>
                <div className="flex items-center gap-4"></div>
                <div className="flex items-center gap-4"></div>
                
            </div>
        </div>
        <div className="w-2/3 h-[500px] relative">
            <img src={apartment} alt="Imperial Heights" className='h-full w-full'/>
        </div>
      </div>
    </div>
  )
}

export default ApartmentPreview
