import React from 'react';
import vis from '../assets/vision.png'
import targ from '../assets/target.png'
import train from '../assets/training.png'
import tax from '../assets/tax.png'
import out from '../assets/outsourcing.png'
import transfer from '../assets/transfer.png'
import gst from '../assets/save.png'
import regular from '../assets/regular.png'

const ServiceCard = ({ image, title, description }) => (
  <div className="bg-gray-300 rounded-2xl p-4 md:p-6 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[linear-gradient(102.13deg,#00AAFF_-24.21%,#000000_150.42%)] hover:shadow-lg group">
    <div className="flex items-center mb-4">
      <div className="bg-white rounded-full p-2 mr-3 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
        <img src={image} alt={title} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
      </div>
      <h3 className="text-base md:text-lg font-bold group-hover:text-white">{title}</h3>
    </div>
    <p className="text-sm group-hover:text-white">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      image: vis,
      title: 'COMPANY FORMATION',
      description: 'We Give Advice On Company Registration In India And Provide The Complete Solution For Company Formation In India, Private Limited Company Formation And Company Incorporation In India.',
    },
    {
      image: targ,
      title: 'BUSINESS TAXATION',
      description: 'Direct Tax Consultancy Together With Innovative Tax Efficient Strategies, Provided By Us Form An Integral Part Of Viable Business Decisions. These Help Our Clients Attain The Desired Goals.',
    },
    // Add more services as needed
  ];

  return (
    <div className="bg-white py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-2">Who We Are</h2>
        <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum doloribus, et tempore optio at reiciendis suscipit cumque fugit voluptatem mollitia aliquid a illum, esse quam debitis natus laudantium nulla praesentium omnis cum cupiditate iste saepe harum! Provident libero perferendis sed voluptas dicta saepe. Fugit maiores reiciendis iure cumque voluptates! Cumque aperiam culpa facere numquam, voluptatem qui aspernatur maiores laborum voluptatum asperiores doloribus explicabo atque, veritatis dolore dolorum accusamus, reprehenderit unde quam autem a. Odit nobis officiis, sunt, nisi numquam, fuga autem obcaecati voluptatem labore ad velit. Optio sed dicta id eos praesentium, magni numquam obcaecati nam alias commodi temporibus.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;