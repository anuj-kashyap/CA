import React from 'react'
import bg from '../assets/bg.png'

function Header() {
  return (
    <div className='relative pb-16 sm:pb-24 md:pb-32 lg:pb-48 text-center'>
      <div className='relative'>
        <img src={bg} alt="" className='w-full h-auto object-cover'/>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-4'>
            Collaborative Solutions
          </h2>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
            for Your Finances
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Header