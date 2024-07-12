import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 sm:mb-6 w-full transition-all duration-300 ease-in-out">
      <div
        className={`bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg ${
          isOpen ? 'rounded-t-2xl' : 'rounded-2xl'
        } overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-102`}
      >
        <div
          className="flex items-center justify-between p-4 sm:p-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="flex-1 mr-2 sm:mr-4 text-base sm:text-lg md:text-xl font-semibold">{question}</p>
          <button className="bg-white text-blue-700 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center transition-all duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="bg-blue-50 text-blue-900 p-4 sm:p-6 ">
            <p className="text-sm sm:text-base leading-relaxed">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of financial services including tax advisory, accounting, auditing, business consulting, and financial planning. Our team of experts is equipped to handle both personal and business financial needs."
    },
    {
      question: "How can I schedule a consultation?",
      answer: "Scheduling a consultation is easy. You can either call our office directly, use the contact form on our website, or email us. We'll get back to you within 24 hours to set up a time that works best for you."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to large corporations. Our services are tailored to meet the specific needs of each client, ensuring that small businesses receive the attention and expertise they need to thrive."
    },
    {
      question: "What makes your firm different from others?",
      answer: "Our firm stands out due to our personalized approach, cutting-edge technology, and a team of highly experienced professionals. We prioritize building long-term relationships with our clients and are committed to providing innovative solutions that drive financial success."
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto py-12 sm:py-16 md:py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-8 sm:mb-10 md:mb-14 text-center">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6 sm:space-y-8">
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;