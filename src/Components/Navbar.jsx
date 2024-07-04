import React from 'react'
import ca from '../assets/ca_logo.png'


const Navbar = () => {
  return (
    <div>
      <div className='flex items-center ml-8'>
        <img src={ca} alt="" />
        <div className='flex items-center space-x-8'>
        <a href="#" className="text-lg font-semibold hover:underline">Home</a>
          <a href="#" className="text-lg font-semibold hover:underline">About us</a>
          <a href="#" className="text-lg font-semibold hover:underline">Services</a>
          <a href="#" className="text-lg font-semibold hover:underline">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar