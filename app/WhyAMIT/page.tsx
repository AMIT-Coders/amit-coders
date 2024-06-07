import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Why AMIT?",
  description: "Why AMIT?",
};

export default function WhyAMIT() {
  return (
    <div className="bg-gray-50 text-dark-blue-900 py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section 1 */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold relative inline-block">
            <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full"></span>
            <span className="pl-6">What is Cybersecurity?</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Cyber security is the practice of protecting computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. These calculated cyberattacks are usually aimed at trying to access, change, or destroy sensitive/confidential information. Criminals who execute these attacks usually have the goal of extorting money from users or interrupting normal business processes. Other terms for Cybersecurity include Information Technology Security or Electronic Information Security.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex items-center p-6 bg-white shadow rounded-lg">
            <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              ?
            </div>
            <div>
              <h3 className="text-xl font-semibold">Industries Cybersecurity Engineers Work in?</h3>
            </div>
          </div>
          <div className="flex items-center p-6 bg-white shadow rounded-lg">
            <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              ?
            </div>
            <div>
              <h3 className="text-xl font-semibold">What does a Cybersecurity Engineer Do?</h3>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="lg:flex lg:space-x-8 items-center">
          <div className="lg:w-2/3 space-y-4">
            <h2 className="text-3xl font-bold relative inline-block">
              <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full"></span>
              <span className="pl-6">What AMIT's Cybersecurity Bootcamp Offers</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              AMIT's curriculum aims to provide participants with a comprehensive understanding of cybersecurity principles, hands-on skills, and exposure to emerging trends. Regular assessments, labs, and a capstone project will reinforce learning, and certification preparation will help participants demonstrate their proficiency in the field.
            </p>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0 flex items-center justify-center">
            <img src="path-to-image" alt="Cybersecurity" className="w-80 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
