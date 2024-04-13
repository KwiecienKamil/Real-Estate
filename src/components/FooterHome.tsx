import React from 'react'

const FooterHome = () => {
  return (
    <div className="flex justify-center py-20">
    <div className='w-[1600px] flex items-center justify-center flex-col gap-8'>
      <h6 className='text-4xl font-semibold'>Do we have everything you're looking for?</h6>
      <p className='text-grayish'>Drop us your contact details, We are always more than happy to help.</p>
      <div className="flex items-center gap-4 px-[5%]">
        <input type="text" className='w-[250px] px-6 py-3 rounded-lg text-grayish font-semibold shadow-lg focus:outline-none' placeholder='Your Name'/>
        <input type="text" className='w-[250px] px-6 py-3 rounded-lg text-grayish font-semibold shadow-lg focus:outline-none' placeholder='Your Email'/>
        <button className=" px-6 py-3 text-accent font-bold bg-white shadow-lg rounded-lg hover:bg-accent hover:text-white duration-300">
            Get in Touch
          </button>
      </div>
    </div>
    </div>
  )
}

export default FooterHome
