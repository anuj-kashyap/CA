import React from 'react'
import ca from '../assets/ca_logo.png'
function Footer() {
    return (
        <div className="bg-gradient-to-l from-[rgba(0,170,255,0.39)] to-black text-white py-12 px-8">
            <div className="container mr-20 ml-8 flex flex-col md:flex-row justify-between">
                <div className="mb-8 md:mb-0 md:w-1/4">
                    <img src={ca} alt="Logo" className="mb-4" />
                    <p className="text-sm justify-center jusleading-relaxed">
                        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
                    </p>
                </div>
                <div className="md:w-1/6">
                    <h1 className="text-3xl font-bold mb-2">Who We Are</h1>
                    <ul>
                        <li className=""><a href="#" className="hover:text-gray-300">Home</a></li>
                        <li className=""><a href="#" className="hover:text-gray-300">About Us</a></li>
                        <li className=""><a href="#" className="hover:text-gray-300">Conatct</a></li>
                        <li className=""><a href="#" className="hover:text-gray-300">Blog Us</a></li>
                    </ul>
                </div>

                <div className="md:w-1/6">
                    <h2 className="text-3xl font-bold mb-2">Important Links</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Income Tax Dept.</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Central Board of Excise & Customs</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Ministry of Corporate Affairs</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Employees Provident Fund</a></li>
                    </ul>
                </div>
                <div className="md:w-1/6">
                    <h2 className="text-3xl font-bold mb-2">What We Do</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Income Tax</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">FEMA, Foreign Collaboration</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Customs & Excise Related</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-300">Services</a></li>
                    </ul>
                </div>

            </div>
            <div className=" bg-white mt-8 text-black  text-center text-sm">
                <p>Copyright © 2024 CA | Powered By Markletechandmedia.com</p>
            </div>
        </div>


    )
}

export default Footer