import React from 'react';

import train from '../assets/training.png'
import tax from '../assets/tax.png'
import out from '../assets/outsourcing.png'
import transfer from '../assets/transfer.png'
import gst from '../assets/save.png'
import regular from '../assets/regular.png'

const ServiceCard = ({ image, title, description }) => (
  <div className="bg-gray-300 rounded-2xl p-4 sm:p-6 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-br from-[#00AAFF] to-black hover:shadow-lg">
    <div className="flex items-center mb-4">
      <div className="bg-black rounded-full p-2 mr-3 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
        <img src={image} alt={title} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
      </div>
      <h3 className="text-base sm:text-lg font-bold">{title}</h3>
    </div>
    <p className="text-xs sm:text-sm">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      image: train,
      title: 'COMPANY FORMATION',
      description: 'We Give Advice On Company Registration In India And Provide The Complete Solution For Company Formation In India, Private Limited Company Formation And Company Incorporation In India.',
    },
    {
      image: tax,
      title: 'BUSINESS TAXATION',
      description: 'Direct Tax Consultancy Together With Innovative Tax Efficient Strategies, Provided By Us Form An Integral Part Of Viable Business Decisions. These Help Our Clients Attain The Desired Goals.',
    },
    {
      image: out,
      title: 'ACCOUNTS OUTSOURCING',
      description: 'A Refinance Allows You To Take Out New Personal Loans That Pay Off Your Current Mortgage. Although You Are Then Obligated To Make Payments On The New Top Up Card Loan.',
    },
    {
      image: transfer,
      title: 'TRANSFER PRICING',
      description: 'With The Liberalization Of Trade And Foreign Exchange Policy India Has Started Integrating Its Economy With Global Economy. This Has Led To Increased Cross Border Flow Of Goods, Services, Funds And Even Intangibles.',
    },
    {
      image: gst,
      title: 'GST COMPLIANCES',
      description: 'Businesses That Are Registered Under GST Have To File The GST Returns Monthly, Quarterly, And Annually Based On The Business. Here It Is Necessary To Provide The Details Of The Sales Or Purchases Of The Goods And Services.',
    },
    {
      image: regular,
      title: 'COMPLIANCE REGULATION',
      description: 'Our Teams Draw On Open-Source Resources And Global Human Intelligence To Perform Enhanced Due Diligence, Producing Reports And Action Items Tailored To Each Clients Needs. Our Client List Includes Domestic And International Entities Of Various Sizes.',
    }
  ];

  return (
    <div className="bg-white py-8 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-2">Our Services</h2>
        <p className="text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          We are experts in this industry with a meaningful experience. What that means is you are going to get right solution, please find our services. We have built enviable reputation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;