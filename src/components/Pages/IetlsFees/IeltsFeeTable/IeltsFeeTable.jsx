import React from 'react';

const IeltsFeeTable = () => {
  return (
    <div className="font-sans max-w-4xl mx-auto p-4 md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          ২. বাংলাদেশে IELTS পরীক্ষার ফি ২০২৪-২০২৫
        </h2>
        <p className="text-gray-600">
          বাংলাদেশে IELTS পরীক্ষার দায়িত্বে আছেন IDP Education। যদিও IELTS পরীক্ষার ফি বিষয়গুলো প্রায় একই, বিভিন্ন দেশে ফি কিছুটা অর্থহীন থাকতে পারে। তাই, আপনার নির্ধারিত টেস্ট সেন্টার আপনাকে কত টাকা প্রদান করতে হয় তা আগে থেকে যাচাই করে নেওয়া ভালো।
        </p>
      </div>
      
      <div className="overflow-x-auto border rounded-lg shadow-sm">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="w-1/3 px-2 md:px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
              >
                IELTS একাডেমিক ফি
              </th>
              <th
                scope="col"
                className="w-1/3 px-2 md:px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
              >
                IELTS জেনারেল ট্রেইনিং ফি
              </th>
              <th
                scope="col"
                className="w-1/3 px-2 md:px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                IELTS লাইফ স্কিলস এণ্ড B1
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td
                colSpan="3"
                className="px-2 md:px-6 py-4 whitespace-nowrap"
              >
                <div className="flex flex-col md:flex-row">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="px-2 md:px-6 py-3 text-left text-sm font-medium text-gray-800">
                          পরীক্ষার ধরন
                        </th>
                        <th className="px-2 md:px-6 py-3 text-left text-sm font-medium text-gray-800">
                          মূল্য
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                          কম্পিউটার ভিত্তিক IELTS পরীক্ষা
                        </td>
                        <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                          BDT ১৯,৫০০
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                          কলম ভিত্তিক IELTS পরীক্ষা
                        </td>
                        <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                          BDT ১৯,৫০০
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                          ইউকে ভিসা একাডেমিক IELTS
                        </td>
                        <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                          BDT ২৩,৫০০
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IeltsFeeTable;