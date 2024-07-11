import React from 'react';
import logoImage from '../assets/logo 2.png'; // Adjust this import path as needed

const ContactForm = () => {
  return (
    <div className="bg-[linear-gradient(102.13deg,#00AAFF_-24.21%,#000000_150.42%)] p-4 sm:p-6 md:p-8 rounded-3xl max-w-4xl mx-auto text-white">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Contact Info */}
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <div className="mb-8">
            <img src={logoImage} alt="CA Logo" className="h-12 sm:h-16 w-auto mb-2" />
            <p className="uppercase text-sm">Chartered Accountant</p>
          </div>
          <div className="space-y-4 text-sm sm:text-base">
            <p className="flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              <span className="break-all">info@markletechandmedia.com</span>
            </p>
            <p className="flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"></path></svg>
              www.markletechandmedia.com
            </p>
            <p className="flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              +91-798-233-2070
            </p>
            <p className="flex items-start">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
              <span className="flex-1">A, 52, Som Bazar Rd, Chowk, Vikas Nagar, Uttam Nagar, East, New Delhi, Delhi, 110059</span>
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2">
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full bg-blue-700 bg-opacity-50 rounded-full py-2 px-4 text-white placeholder-blue-200" />
            <input type="tel" placeholder="Ph. No" className="w-full bg-blue-700 bg-opacity-50 rounded-full py-2 px-4 text-white placeholder-blue-200" />
            <input type="email" placeholder="Mail ID" className="w-full bg-blue-700 bg-opacity-50 rounded-full py-2 px-4 text-white placeholder-blue-200" />
            <textarea placeholder="Leave A Comment Here" rows="4" className="w-full bg-blue-700 bg-opacity-50 rounded-3xl py-2 px-4 text-white placeholder-blue-200"></textarea>
            <button type="submit" className="w-full sm:w-auto bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700 transition duration-300">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;