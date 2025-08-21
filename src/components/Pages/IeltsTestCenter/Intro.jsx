// src/components/IELTSCenterIntro.jsx
import React from 'react';

const Intro = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8 font-sans">
      <div className="text-sm text-gray-500 mb-2">
        <span className="font-bold">সফলতা টুটোরিয়াল</span> / পরীক্ষা-সমূহ / IELTS / সেন্টার
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">বাংলাদেশে IELTS টেস্ট সেন্টার</h1>
      <div className="flex items-center text-gray-500 text-sm mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>আপডেট করা হয়েছে ২১ এপ্রিল, ২০২৩</span>
      </div>
      <p className="text-gray-700 mb-4">
        IELTS টেস্ট সেন্টারগুলোতে প্রথাগত (Paper-based) এবং কম্পিউটারভিত্তিক (Computer-based) উভয় ধরনের
        IELTS পরীক্ষা অনুষ্ঠিত হয়। IELTS IDP বাংলাদেশে এই ৬টি শহরে IELTS টেস্ট সেন্টার রয়েছে।
      </p>
      <p className="text-gray-700">
        আপনি আইডিপি বাংলাদেশ ওয়েবসাইট ব্যবহার করে অনলাইনে IELTS পরীক্ষা বুক করতে পারেন। অনলাইন আবেদন করার
        ফাইল আপনাকে নিকটস্থ IDP শাখায় যেতে হয়।
      </p>
    </div>
  );
};

export default Intro;