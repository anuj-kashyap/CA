import React from 'react'
import bg from '../assets/bg.png'
function Header() {
  return (
    <div className='relative pb-48 text-center'>
        <div className='relative'>
            <img src={bg} alt="" className='w-full h-auto absolute'/>
            <div className="absolute w-full flex flex-col justify-center items-center text-white">
            <h2 className=' text-7xl mt-32'>Collaborative Solutions
            for</h2>
            <h2 className='text-7xl font-bold mt-5'>Your Finances</h2>

            </div>
            
        </div>
    </div>
  )
}

export default Header