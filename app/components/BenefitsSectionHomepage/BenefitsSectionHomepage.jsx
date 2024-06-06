import React from 'react';

const BenefitsSection = () => {
  return (
    <div className="bg-gray-100 text-dark-blue-900 py-16 px-6 ">
      <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-start justify-between">
        {/* Benefits List */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-10 bg-Poppy rounded-full"></span>
            Your Benefits
          </h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-teal-500 rounded-full text-white mr-4">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Training</h3>
                <p className="text-gray-600">
                  Hands on Training. Full Time & Part Time Options available.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-teal-500 rounded-full text-white mr-4">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Software projects</h3>
                <p className="text-gray-600">
                  Project Base Learning which simulates Real-World Scenarios.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-teal-500 rounded-full text-white mr-4">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Employment services</h3>
                <p className="text-gray-600">
                  Dedicated Career Coach. Portfolio Building. Mock-Interviews.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule a Meeting */}
        <div className="lg:w-1/3 mt-6 lg:mt-0 lg:ml-6 bg-Prussian-Blue p-12 rounded-lg text-white">
          <div className="-mt-20 flex items-center justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-500 rounded-full text-white text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-6 8h6m-6 4h4m1 5a9 9 0 110-18 9 9 0 010 18zm-3-5a4.978 4.978 0 01-1-3H4a8 8 0 10.25 1.75 5.978 5.978 0 013.75-3.75 5.978 5.978 0 013.75 3.75A5.978 5.978 0 0112 19v3m0-4a4.978 4.978 0 01-3 3.75m1-7a8 8 0 10-.25-1.75H8a4.978 4.978 0 013-3.75 4.978 4.978 0 011 3h3a4.978 4.978 0 01-3 3.75z" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold mt-10 mb-10 text-center">Schedule a Meeting</h3>
          <p className="text-gray-300 mb-8 mt-8 text-center">
            Need more information about AMIT Coders?
          </p>
          <button className="bg-teal-500 py-2 px-4 rounded-lg font-bold text-white hover:bg-teal-600 mb-4 w-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-6 8h6m-6 4h4m1 5a9 9 0 110-18 9 9 0 010 18zm-3-5a4.978 4.978 0 01-1-3H4a8 8 0 10.25 1.75 5.978 5.978 0 013.75-3.75 5.978 5.978 0 013.75 3.75A5.978 5.978 0 0112 19v3m0-4a4.978 4.978 0 01-3 3.75m1-7a8 8 0 10-.25-1.75H8a4.978 4.978 0 013-3.75 4.978 4.978 0 011 3h3a4.978 4.978 0 01-3 3.75z" />
            </svg>
            Schedule
          </button>
          <div className="flex items-center justify-center text-gray-300 mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 8.75A6.75 6.75 0 008.75 2h6.5A6.75 6.75 0 0022 8.75v6.5A6.75 6.75 0 0015.25 22h-6.5A6.75 6.75 0 002 15.25v-6.5zm2 0a4.75 4.75 0 014.75-4.75h6.5a4.75 4.75 0 014.75 4.75v6.5a4.75 4.75 0 01-4.75 4.75h-6.5A4.75 4.75 0 014 15.25v-6.5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15.5l3.5-3.5-3.5-3.5M12 15.5H6.5m5.5-6v12" />
            </svg>
            You can Get a Call
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
