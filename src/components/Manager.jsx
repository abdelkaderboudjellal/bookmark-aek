import React from 'react'
import hero from './images/illustration-hero.svg'
const Manager = () => {
  return (
    <>
    <div>
    <div className=' relative  grid grid-cols-1 md:grid-cols-2 md:w-[80%]   py-36 md:mx-[10%]  '>
      <div className='' >
       
        <h1 className='text-[#1E293B] font-bold text-3xl md:text-7xl text-left py-8'>A Simple Bookmark Manager</h1>
        <p className='text-[#5d5f60] font-semibold text-left text-lg py-6 '>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className=' flex    py-2'>

        <button className='w-36 mx-2 py-2 bg-[#5368DF] hover:bg-[#6b7de9] text-white font-semibold text-center text-md rounded-md  shadow-md shadow-[#585656]'>Get it on Chrome</button>
        <button className='w-36 mx-2 py-2 text-black bg-[#F1F5F9] font-semibold hover:text-gray-700 rounded-md  shadow-md shadow-[#585656] '>Get it on Firefox</button>
        </div>
      </div>
      <div className=' ' >
         <img src={hero}alt="" srcSet="" />
    <div className=' -z-50 xl:hid  bg-[#5368DF] -mt-24 md:-mt-72  w-[80%] md:w-[100%] h-24 md:h-[80%] rounded-l-full ml-[20%]'>
      </div>
    </div>

    </div>
    </div>
    </>
  )
}

export default Manager
