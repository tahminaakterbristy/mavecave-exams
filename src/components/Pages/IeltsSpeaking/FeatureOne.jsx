import React, { useState } from 'react';

// Card for a resource file
const ResourceCard = ({ title, number }) => (
  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      <span className="font-semibold text-gray-800">IELTS Speaking PDF {number}</span>
    </div>
    <a href="#" className="p-2 text-gray-500 hover:text-blue-500 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </a>
  </div>
);

// Card for a sample topic with expand/collapse functionality
const SampleTopicCard = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-semibold text-gray-800">{title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-blue-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      {isExpanded && (
        <div className="mt-4 text-gray-700">
          {/* Add your manual answer here if needed */}
          <p>এখানে নমুনা উত্তরটি যোগ করা যেতে পারে।</p>
        </div>
      )}
    </div>
  );
};

const FeatureOne = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      {/* First Card */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">১. IELTS স্পিকিং টেস্ট সম্পর্কে</h2>
        <p className="text-gray-700 mb-4">
          IELTS স্পিকিং টেস্টটি তিনটি ভাগে বিভক্ত। প্রতিটি ভাগের জন্য আলাদা সময়সীমা আছে। তাই আপনাকে অবশ্যই সময়সীমা এবং প্রশ্নগুলোর উত্তর সম্পর্কে সচেতন থাকতে হবে।
        </p>
        <p className="text-gray-700 mb-4">
          IELTS স্পিকিং টেস্টে আপনি ভালো স্কোর পাওয়ার জন্য কয়েকটি নিয়ম মেনে চলা উচিত।
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>
            <span className="font-bold">IELTS টেস্ট:</span> স্পিকিং মডিউলের প্রস্তুতি নেওয়ার সময়, আপনাকে নিয়মিত অনুশীলন করা উচিত।
          </li>
          <li>
            <span className="font-bold">IELTS টেস্ট:</span> IELTS স্পিকিং টেস্টটি তিনটি ভাগে বিভক্ত।
          </li>
          <li>
            <span className="font-bold">IELTS টেস্ট:</span> তৃতীয় ভাগটি সবচেয়ে গুরুত্বপূর্ণ, কারণ এতে আপনাকে আপনার মতামত জানাতে হয়।
          </li>
          <li>
            <span className="font-bold">IELTS টেস্ট:</span> আপনাকে অবশ্যই ভালো ভাবে প্রস্তুতি নিতে হবে এবং যত বেশি ইংরেজি শব্দ শিখতে পারেন, তা আপনার পরীক্ষার ফল ভালো করে দিতে সাহায্য করে।
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          IELTS স্পিকিং টেস্টের প্রস্তুতি নেওয়ার সময়, আপনি অনুশীলন পরীক্ষাগুলো করতে পারেন এবং আপনার দুর্বলতাগুলো চিহ্নিত করতে পারেন।
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResourceCard number="1" />
          <ResourceCard number="2" />
          <ResourceCard number="3" />
          <ResourceCard number="4" />
          <ResourceCard number="5" />
        </div>
      </div>

      {/* Second Card */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">২. IELTS স্পিকিং প্র্যাকটিস টেস্ট নমুনা উত্তরসহ: পার্ট ১ (ইন্টারভিউর ও পরিচিতি)</h2>
        <p className="text-gray-700 mb-4">
          IELTS স্পিকিং প্র্যাকটিস টেস্ট প্রশ্নগুলো অনুশীলন করে এবং আপনার স্পিকিং দক্ষতা বৃদ্ধি করে ভালো প্রস্তুতি নিতে পারবেন।
        </p>
        <div className="space-y-2">
          <SampleTopicCard title="IELTS Speaking Practice Test: Sample Topic 1: Hometown" />
          <SampleTopicCard title="IELTS Speaking Practice Test Sample Topic 2: Movies" />
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
