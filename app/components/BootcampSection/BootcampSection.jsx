import React from 'react';

export default function BootcampSection(){
  return (
    <div className="bg-Prussian-Blue text-white py-16 px-6">
      <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold">Apply to the next <br />Bootcamp</h2>
          <div className="mt-4 lg:mt-0 lg:ml-auto">
            <a href="#" className="bg-Light-Sea-Green text-white py-3 px-6 rounded-lg font-bold hover:bg-teal-600">Apply Now</a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-8 space-y-8 lg:space-y-0 lg:space-x-16">
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4"><span className="text-Light-Sea-Green">Software Engineering</span> Bootcamp</h3>
            <div className="flex space-x-8 text-gray-400">
              <div className="border-l-4 border-red-500 pl-2">
                <span className="block">Next full-time cohort starts</span>
                <span className="block text-white font-bold">May 6, 2024</span>
              </div>
              <div className="border-l-4 border-red-500 pl-2">
                <span className="block">Next part-time cohort starts</span>
                <span className="block text-white font-bold">May 6, 2024</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4"><span className="text-Light-Sea-Green">Data Science</span> Bootcamp</h3>
            <div className="flex space-x-8 text-gray-400">
              <div className="border-l-4 border-red-500 pl-2">
                <span className="block">Next full-time cohort starts</span>
                <span className="block text-white font-bold">May 6, 2024</span>
              </div>
              <div className="border-l-4 border-red-500 pl-2">
                <span className="block">Next part-time cohort starts</span>
                <span className="block text-white font-bold">May 6, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};