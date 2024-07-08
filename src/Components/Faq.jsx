import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 w-full">
      <div 
        className={`bg-gradient-to-r from-blue-500 to-blue-900 text-white ${isOpen ? 'rounded-3xl' : 'rounded-full'} overflow-hidden`}
      >
        <div 
          className="flex items-center justify-between p-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="flex-1 mr-4">{question}</p>
          <button className="bg-white text-blue-500 rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                 className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-white p-6">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">FAQ?</h1>
      {faqItems.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;