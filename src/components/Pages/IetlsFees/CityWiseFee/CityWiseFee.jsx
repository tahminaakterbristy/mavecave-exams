import React from 'react';

const CityWiseFee = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            ২. বাংলাদেশে শহর অনুযায়ী IELTS পরীক্ষার ফি ২০২৪-২০২৫ এর তালিকা
          </h2>
          <p className="text-gray-600 mb-6">
            বাংলাদেশের প্রধান প্রধান শহরগুলোতে পরীক্ষার্থীদের সুবিধার জন্য অনেকগুলি IDP IELTS সেন্টার বা Bsh British Council রয়েছে, যেগুলোতে সহজে IELTS পরীক্ষা ফি-এর সেবা।
          </p>
          <p className="text-gray-600 mb-6">
            নীচে, আমরা বাংলাদেশের কয়েকটি প্রধান শহরের মনোনীত IELTS সেন্টার এবং IELTS পরীক্ষার ফি নিয়ে একটি তালিকা তৈরি করেছি।
          </p>
        </div>

        <div className="overflow-x-auto border-t border-b border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="w-2/3 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  IELTS একাডেমিক ফি
                </th>
                <th
                  scope="col"
                  className="w-1/3 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  মূল্য
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  ঢাকা শহরে IELTS পরীক্ষার ফি
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  BDT ১৯,৫০০
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  চট্টগ্রাম শহরে IELTS পরীক্ষার ফি
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  BDT ১৯,৫০০
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  সিলেট শহরে IELTS পরীক্ষার ফি
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  BDT ১৯,৫০০
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="p-4 md:p-6">
          <p className="text-gray-600">
            এই শহরগুলোতে IELTS পরীক্ষার সুবিধা সহজলভ্য হয়েছে, যার ফলে দেশের বিভিন্ন অঞ্চল থেকে আগত প্রার্থীরা সহজেই পরীক্ষা দিতে পারেন এবং ফি সম্পর্কেও সহায়তা পাওয়া যায়।
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityWiseFee;