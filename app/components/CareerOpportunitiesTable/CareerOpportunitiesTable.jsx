import React from 'react';

export default function CareerOpportunitiesTable(){
  // Define the data
  const data = [
    { jobRole: 'Information Security Analyst', salary: '$123k' },
    { jobRole: 'Information Security Specialist', salary: '$162k' },
    { jobRole: 'Digital Forensic Examiner', salary: '$149k' },
    { jobRole: 'IT Auditor', salary: '$104k' },
    { jobRole: 'Security Systems Administrator', salary: '$114k' },
    { jobRole: 'Penetration Tester', salary: '$134k' },
    { jobRole: 'Security Engineer', salary: '$165k' },
    { jobRole: 'Security Architect', salary: '$220k' },
    { jobRole: 'Cryptography Engineer', salary: '$144k' },
    { jobRole: 'Cybersecurity Manager', salary: '$207k' },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="relative text-3xl font-bold text-Prussian-Blue mb-8 inline-block z-10">
            <span className="absolute inset-0 flex -mt-2 -ml-3.5">
                <span className="-z-10 w-10 h-10 bg-Poppy rounded-full"></span>
            </span>
          Career Opportunities for Cybersecurity Engineer
        </h2>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-md">
          <table className="min-w-full divide-y divide-gray-200 border-collapse">
            <thead>
              <tr className="bg-Light-Sea-Green text-white">
                <th className="px-6 py-2 text-left text-sm font-semibold">Job Role</th>
                <th className="px-6 py-2 text-left text-sm font-semibold">Average Salary (per year)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-Prussian-Blue">{row.jobRole}</td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">{row.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Source Information */}
        <div className="mt-4 text-center text-sm text-gray-500">
          Source: Glassdoor “Local Pay Reports,” accessed on [01/01/24]. Available at <a href="https://www.glassdoor.com/research" className="text-Prussian-Blue underline">Glassdoor.com/research</a>
        </div>
      </div>
    </div>
  );
};
