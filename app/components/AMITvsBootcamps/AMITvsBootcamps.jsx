import { FaCheck, FaTimes } from 'react-icons/fa';


export default function AMITvsBootcamps(){
    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="relative text-3xl font-bold text-Prussian-Blue mb-8 inline-block z-10">
            <span className="absolute inset-0 flex -mt-2 -ml-3.5">
                <span className="-z-10 w-10 h-10 bg-Poppy rounded-full"></span>
            </span>
          Why AMIT versus other Boot Camps?
        </h2>
        <div className="overflow-x-auto rounded-md">
          <table className="min-w-full divide-y divide-gray-200 border-collapse">
            <thead>
              <tr className="bg-Light-Sea-Green text-white">
                <th className="p-4 text-left text-sm font-semibold">Compare</th>
                <th className="p-4 text-center text-sm font-semibold">AMIT Coders</th>
                <th className="p-4 text-center text-sm font-semibold">Code Academy</th>
                <th className="p-4 text-center text-sm font-semibold">Springboard</th>
                <th className="p-4 text-center text-sm font-semibold">Coding Dojo</th>
                <th className="p-4 text-center text-sm font-semibold">Full Stack Academy</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-center">
              <tr>
                <td className="p-4 text-left text-sm font-medium">
                  <span className="font-bold">Student Profiling</span><br />
                  <span className="font-light">Tailored Teaching Approaches Based on Student Profiles</span>
                </td>
                <td className="p-4 text-Prussian-Blue"><FaCheck className="mx-auto" /></td>
                <td className="p-4 text-Poppy"><FaTimes className="mx-auto" /></td>
                <td className="p-4 text-Poppy"><FaTimes className="mx-auto" /></td>
                <td className="p-4 text-Prussian-Blue"><FaCheck className="mx-auto" /></td>
                <td className="p-4 text-Prussian-Blue"><FaCheck className="mx-auto" /></td>
              </tr>
              <tr>
                <td className="p-4 text-left text-sm font-medium">
                  <span className="font-bold">Live Online Sessions</span><br />
                  <span className="font-light">Industry-Experienced Instructors</span>
                </td>
                <td className="p-4 text-Prussian-Blue"><FaCheck className="mx-auto" /></td>
                <td className="p-4 text-Poppy"><FaTimes className="mx-auto" /></td>
                <td className="p-4 text-Poppy"><FaTimes className="mx-auto" /></td>
                <td className="p-4 text-Prussian-Blue"><FaCheck className="mx-auto" /></td>
                <td className="p-4 text-Prussian-Blue"><FaCheck className="mx-auto" /></td>
              </tr>
              <tr>
                <td className="p-4 text-left text-sm font-medium">
                  <span className="font-bold">Lifelong Access to Program Content</span><br />
                  <span className="font-light">Continuous Access to Program Materials</span>
                </td>
                <td className="p-4 text-Prussian-Blue"><FaCheck className="mx-auto" /></td>
                <td className="p-4 text-Poppy"><FaTimes className="mx-auto" /></td>
                <td className="p-4 text-Poppy"><FaTimes className="mx-auto" /></td>
                <td className="p-4 text-Poppy"><FaTimes className="mx-auto" /></td>
                <td className="p-4 text-Poppy"><FaTimes className="mx-auto" /></td>
              </tr>
              <tr>
                <td className="p-4 text-left text-sm font-medium">
                  <span className="font-bold">Multiple Financing Options</span><br />
                  <span className="font-light">Multiple Flexible Financing Options</span>
                </td>
                <td className="p-4 text-Prussian-Blue"><FaCheck className="mx-auto" /></td>
                <td className="p-4 text-Prussian-Blue"><FaCheck className="mx-auto" /></td>
                <td className="p-4 text-Prussian-Blue"><FaCheck className="mx-auto" /></td>
                <td className="p-4 text-Poppy"><FaTimes className="mx-auto" /></td>
                <td className="p-4 text-Poppy"><FaTimes className="mx-auto" /></td>
              </tr>
              <tr>
                <td className="p-4 text-left text-sm font-medium">
                  <span className="font-bold">1:1 Mentorship</span><br />
                  <span className="font-light">Provided During Program and After Graduation</span>
                </td>
                <td className="p-4 text-Prussian-Blue"><FaCheck className="mx-auto" /></td>
                <td className="p-4 text-Poppy"><FaTimes className="mx-auto" /></td>
                <td className="p-4 text-Prussian-Blue"><FaCheck className="mx-auto" /></td>
                <td className="p-4 text-Prussian-Blue"><FaCheck className="mx-auto" /></td>
                <td className="p-4 text-Prussian-Blue"><FaCheck className="mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
      );
}