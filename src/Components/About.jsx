import React from 'react'
import man from '../assets/man.png'
function About() {
  return (
    <div>
       <div className="max-w-6xl pt-96 mx-auto p-10">
      <div className="flex flex-row space gap-x-3 rounded-lg overflow-hidden">
        <div className="w-16 flex items-center justify-center">
          {/* <div className="transform  origin-center whitespace-nowrap">
            <h2 className="text-6xl font-bold text-black">Who We Are</h2>
          </div> */}
        </div>
        <div className="flex-1 flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={man}
              alt="Smiling woman"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6">
          <h2 className='text-6xl font-bold bg-[linear-gradient(102.13deg,#00AAFF_-94.21%,#000000_105.42%)] bg-clip-text text-transparent '>About Us</h2>
            <p className="text-gray-700 mt-4 text-sm">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div> 
    </div>
  )
}

export default About