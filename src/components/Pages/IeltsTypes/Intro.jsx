import React from 'react';

const Intro = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
          <span>
            <span>ডিসকভার ইউনিফর্মস</span>
            <span className="mx-1">/</span>
            <span>পরীক্ষাসমূহ</span>
            <span className="mx-1">/</span>
            <span>IELTS</span>
            <span className="mx-1">/</span>
            <span>ধরনেরসমূহ</span>
          </span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">IELTS পরীক্ষার ধরনসমূহ</h1>
        <div className="flex items-center text-xs text-gray-500 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-gray-500">আপডেট করা হয়েছে: ২৫ সেপ্টেম্বর, ২০২২, ১১:৫৬</span>
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-6 mt-4">
        বিদেশ ভ্রমণের পরিকল্পনা করার ইংরেজি পরীক্ষা নেওয়া অত্যন্ত গুরুত্বপূর্ণ। IELTS-এ ভালো স্কোর করার মাধ্যমে আপনি আপনার ইংরেজি ভাষার দক্ষতা উন্নত করতে পারেন, শিক্ষা ও বুকিং পাবার এই সম্ভাবনা একটি ইংলিশভাষী দেশের পড়াশোনার জন্য দিতে খুবই জরুরি।
      </p>

      <h3 className="text-xl font-bold text-gray-800 mb-4">IELTS পরীক্ষার তিনটি প্রধান ধরন আছে:</h3>
      
      <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
        <li>IELTS একাডেমিক</li>
        <li>IELTS জেনারেল ট্রেনিং</li>
        <li>IELTS লাইফ স্কিলস</li>
      </ul>
      
    </div>
  );
};

export default Intro;
