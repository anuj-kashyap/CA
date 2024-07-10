import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ca from '../assets/ca_logo.png';
import ContactForm from '../Components/ContatctForm';  // Adjust this import path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showGstDropdown, setShowGstDropdown] = useState(false);
  const location = useLocation();

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const serviceItems = [
    "Audit & Assurance",
    "Tax Advisory",
    "Accounting Services",
    "Business Consulting",
    "Financial Planning"
  ];

  const gstItems = [
    "GST Registration",
    "GST Filing",
    "GST Compliance",
    "GST Audits",
    "GST Consultancy"
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const activeStyle = "bg-clip-text text-transparent bg-gradient-to-r from-[#00AAFF] to-black font-bold";
  const inactiveStyle = "text-black hover:text-gray-800";

  return (
    <>
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
            <Link to="/" className={isActive('/') ? activeStyle : inactiveStyle}>Home</Link>
            <Link to="/Aboutus" className={isActive('/Aboutus') ? activeStyle : inactiveStyle}>About Us</Link>
            <div 
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <Link to="/Services" className={isActive('/Services') ? activeStyle : inactiveStyle}>Services</Link>
              {showServicesDropdown && (
                <div className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  {serviceItems.map((item, index) => (
                    <Link 
                      key={index}
                      to={`/Services/${item.toLowerCase().replace(/ /g, '-')}`}
                      className={isActive(`/Services/${item.toLowerCase().replace(/ /g, '-')}`) ? `${activeStyle} block px-4 py-2 text-sm` : 'block px-4 py-2 text-sm text-gray-700 hover:text-gray-900'}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div 
              className="relative"
              onMouseEnter={() => setShowGstDropdown(true)}
              onMouseLeave={() => setShowGstDropdown(false)}
            >
              <Link to="/Gst" className={isActive('/Gst') ? activeStyle : inactiveStyle}>GST</Link>
              {showGstDropdown && (
                <div className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  {gstItems.map((item, index) => (
                    <Link 
                      key={index}
                      to={`/Gst/${item.toLowerCase().replace(/ /g, '-')}`}
                      className={isActive(`/Gst/${item.toLowerCase().replace(/ /g, '-')}`) ? `${activeStyle} block px-4 py-2 text-sm` : 'block px-4 py-2 text-sm text-gray-700 hover:text-gray-900'}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/Ourteams" className={isActive('/Ourteams') ? activeStyle : inactiveStyle}>Our Team</Link>
          </div>

          <button 
            onClick={toggleContactForm}
            className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <Link to="/" className={`block py-2 ${isActive('/') ? activeStyle : inactiveStyle}`}>Home</Link>
            <Link to="/Aboutus" className={`block py-2 ${isActive('/Aboutus') ? activeStyle : inactiveStyle}`}>About Us</Link>
            <div>
              <Link to="/Services" className={`block py-2 ${isActive('/Services') ? activeStyle : inactiveStyle}`}>Services</Link>
              <div className="pl-4">
                {serviceItems.map((item, index) => (
                  <Link 
                    key={index}
                    to={`/Services/${item.toLowerCase().replace(/ /g, '-')}`}
                    className={`block py-2 text-sm ${isActive(`/Services/${item.toLowerCase().replace(/ /g, '-')}`) ? activeStyle : 'text-gray-600 hover:text-gray-800'}`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <Link to="/Gst" className={`block py-2 ${isActive('/Gst') ? activeStyle : inactiveStyle}`}>GST</Link>
              <div className="pl-4">
                {gstItems.map((item, index) => (
                  <Link 
                    key={index}
                    to={`/Gst/${item.toLowerCase().replace(/ /g, '-')}`}
                    className={`block py-2 text-sm ${isActive(`/Gst/${item.toLowerCase().replace(/ /g, '-')}`) ? activeStyle : 'text-gray-600 hover:text-gray-800'}`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/Ourteams" className={`block py-2 ${isActive('/Ourteams') ? activeStyle : inactiveStyle}`}>Our Team</Link>
            <button 
              onClick={toggleContactForm}
              className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Contact Form Popup */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <ContactForm />
            <button
              onClick={toggleContactForm}
              className="absolute top-4 right-4 text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
