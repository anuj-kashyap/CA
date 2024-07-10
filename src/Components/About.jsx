import React from 'react'
import man from '../assets/man.png'

function About() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden shadow-lg">
          <div className="lg:w-1/2">
            <img
              src={man}
              alt="Smiling man"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 bg-white">
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#00AAFF] to-black bg-clip-text text-transparent mb-4 sm:mb-6'>
              About Us
            </h2>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About