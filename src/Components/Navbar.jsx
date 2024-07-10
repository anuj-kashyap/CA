import React, { useState } from 'react'
import ca from '../assets/ca_logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={ca} alt="CA Chartered Accountants" className="h-10 md:h-14" />
        </div>

        {/* Burger menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-semibold">
          <Link to="/" className="text-black hover:text-gray-800">Home</Link>
          <Link to="/Aboutus" className="text-black hover:text-gray-800">About Us</Link>
          <Link to="/Services" className="text-black hover:text-gray-800">Services</Link>
          <Link to="/Gst" className="text-black hover:text-gray-800">GST</Link>
          <Link to="/Ourteams" className="text-black hover:text-gray-800">Our Team</Link>
        </div>

        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
          Contact Us
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link to="/" className="block py-2 text-black hover:text-gray-800">Home</Link>
          <Link to="/Aboutus" className="block py-2 text-black hover:text-gray-800">About Us</Link>
          <Link to="/Services" className="block py-2 text-black hover:text-gray-800">Services</Link>
          <Link to="/Gst" className="block py-2 text-black hover:text-gray-800">GST</Link>
          <Link to="/Ourteams" className="block py-2 text-black hover:text-gray-800">Our Team</Link>
          <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar