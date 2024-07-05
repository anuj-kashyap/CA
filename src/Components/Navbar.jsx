import React from 'react'
import ca from '../assets/ca_logo.png'


const Navbar = () => {
  return (
    <div>
    <nav className="flex items-center justify-between bg-white p-6">
      <div className="flex items-center ">
        <img src={ca} alt="CA Chartered Accountants" className="h-14 ml-6" />
        
      </div>
      <div className="flex-grow flex justify-center">
      <div className="flex items-center text-lg font-semibold ml-40 mr-16 space-x-16">
        <a href="#" className="text-black hover:text-gray-800">Home</a>
        <a href="#" className="text-black hover:text-gray-800">About Us</a>
        <a href="#" className="text-black hover:text-gray-800">Services</a>
        <a href="#" className="text-black hover:text-gray-800">GST</a>
        <a href="#" className="text-black hover:text-gray-800">Our Team</a>
      </div>
      </div>
        <button className="bg-blue-600 text-white px-4 py-2 mr-12 rounded-full hover:bg-blue-700">
          Contact Us
        </button>
       </nav>
    </div>
  )
}

export default Navbar