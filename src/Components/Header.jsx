import React from 'react'
import bg from '../assets/bg.png'

function Header() {
  return (
    <div className='relative sm:pb-24 md:pb-32 lg:pb-1 text-center'>
      <div className='relative'>
        <img src={bg} alt="" className='w-full h-auto object-cover min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px]'/>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <h2 className='text-4xl sm:text-3xl md:text-4xl lg:text-7xl xl:text-5xl mb-1 sm:mb-2 md:mb-3 leading-tight'>
            Collaborative Solutions
          </h2>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight'>
            for Your Finances
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Header