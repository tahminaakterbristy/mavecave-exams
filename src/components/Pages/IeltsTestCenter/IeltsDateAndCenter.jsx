// src/components/IELTSDateAndCenter.jsx
import React from 'react';

const IeltsDateAndCenter = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8 font-sans">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">৬. ২০২৩ সালে বাংলাদেশে IELTS পরীক্ষা তারিখ এবং কেন্দ্রসমূহ</h2>
      <p className="text-gray-700 mb-4">
        IELTS পরীক্ষার জন্য কম্পিউটারভিত্তিক এবং কম্পিউটারভিত্তিক উভয় টেস্ট সেন্টার রয়েছে। IELTS IDP Bangladesh এই ৬টি শহরে পরীক্ষার সেন্টার আছে।
      </p>
      <p className="text-gray-700 mb-4">
        সফলতাতে অবস্থিত IELTS সেন্টারগুলোর একটি তালিকা দেখে এবং আপনার নিকটতম সেন্টারটি খুঁজে বের করুন।
      </p>

      {/* Dropdown Card */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
        <h3 className="text-xl font-bold text-blue-800 mb-4">IELTS টেস্ট সেন্টার খোঁজা</h3>
        <label htmlFor="city-select" className="block text-blue-700 font-medium mb-2">
          আপনার শহর নির্বাচন করুন
        </label>
        <div className="relative">
          <select id="city-select" className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="">আপনার শহর নির্বাচন করুন</option>
            <option value="dhaka">ঢাকা</option>
            <option value="chittagong">চট্টগ্রাম</option>
            <option value="rajshahi">রাজশাহী</option>
            <option value="sylhet">সিলেট</option>
            <option value="khulna">খুলনা</option>
            <option value="comilla">কুমিল্লা</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-gray-700 mt-4">
        নিচের আপনার নিকটতম টেস্ট সেন্টার এবং পরীক্ষার তারিখ দেখতে আরও জানুন।
      </p>
    </div>
  );
};

export default IeltsDateAndCenter;