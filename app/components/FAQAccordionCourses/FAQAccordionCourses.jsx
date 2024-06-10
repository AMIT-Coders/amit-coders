import React from 'react';
import { FaPlus, FaMinus, FaCircle } from 'react-icons/fa';

// Simulate fetching FAQ data on the server side
async function fetchFAQs() {
  return [
    {
      question: "What is an online coding bootcamp?",
      answer: "While they vary with each course and each school, online coding bootcamps are short-term and often rigorous training programs to help students learn the programming languages and development skills they need to become professional software engineers.",
    },
    {
      question: "Are coding bootcamps worth it?",
      answer: "Coding bootcamps can be worth it for those looking to quickly transition into tech careers. They offer intensive learning experiences and job placement support.",
    },
    {
      question: "Do coding bootcamps work?",
      answer: "Yes, many coding bootcamps have successfully helped individuals transition to careers in tech. Their curriculum is designed to provide practical and job-ready skills.",
    },
    {
      question: "What’s the application process like?",
      answer: "The application process typically involves submitting an online form, completing an interview or coding challenge, and possibly attending an introductory course.",
    },
    {
      question: "What financing options are available?",
      answer: "Financing options may include upfront payment, installment plans, loans, and Income Share Agreements (ISAs) depending on the bootcamp.",
    },
  ];
}

// Server component for FAQs
const FAQAccordionCourses = async () => {
  // Fetch the FAQ data
  const faqs = await fetchFAQs();

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-Prussian-Blue mb-4">All you need to know</h3>
        <h2 className="text-3xl font-bold text-Prussian-Blue mb-8 relative inline-block z-10">
        <span className="absolute inset-0 flex -mt-2 -ml-3.5">
                <span className="-z-10 w-10 h-10 bg-Poppy rounded-full"></span>
            </span>
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white rounded-lg group">
              <summary className="flex items-center justify-between px-4 py-3 text-lg font-semibold cursor-pointer list-none rounded-lg group-open:rounded-t-lg group-open:bg-dark-blue-900 group-open:text-white transition-colors duration-200">
                <span className="flex items-center">
                  <FaCircle className={`mr-2 ${index === 0 ? 'text-Poppy' : 'text-Light-Sea-Green'} group-open:text-white`} />
                  <span className="group-open:text-white">{faq.question}</span>
                </span>
                <span className="flex items-center">
                  <FaPlus className="text-Prussian-Blue group-open:hidden" />
                  <FaMinus className="text-Prussian-Blue hidden group-open:inline" />
                </span>
              </summary>
              <div className="px-4 py-5 text-md text-Prussian-Blue border-t border-gray-200 group-open:bg-gray-100 transition-colors duration-200">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordionCourses;
