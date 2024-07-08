import React from 'react'
import ca from '../assets/ca_logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className="flex items-center justify-between bg-white p-6">
      <div className="flex items-center ">
        <img src={ca} alt="CA Chartered Accountants" className="h-14 ml-6" />
        
      </div>
      <div className="flex-grow flex justify-center">
      <div className="flex items-center text-lg font-semibold ml-40 mr-16 space-x-16">
        <Link to="/" className="text-black hover:text-gray-800">Home</Link>
        <Link to="/Aboutus" className="text-black hover:text-gray-800">About Us</Link>
        <Link to="/Services" className="text-black hover:text-gray-800">Services</Link>
        <Link to="/Gst" className="text-black hover:text-gray-800">GST</Link>
        <Link to="/Ourteam" className="text-black hover:text-gray-800">Our Team</Link>
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