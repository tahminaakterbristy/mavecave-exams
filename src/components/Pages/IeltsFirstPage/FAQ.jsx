import React, { useState } from 'react';

// Reusable card component for FAQ style sections
const FAQCard = ({ question, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4 overflow-hidden">
      <div 
        className="flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-semibold text-gray-800 text-sm md:text-base">{question}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isExpanded && (
        <div className="p-4 border-t border-gray-200 text-gray-700 text-sm">
          {children}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">বেশি জিজ্ঞাসিত প্রশ্ন</h2>
        
        <FAQCard question="IELTS জেনারেল ট্রেনিং পরীক্ষা কত ঘনভাবে অনুষ্ঠিত হয়?">
          <p>IELTS জেনারেল ট্রেনিং পরীক্ষা সাধারণত মাসে ৪ বার অনুষ্ঠিত হয়।</p>
        </FAQCard>

        <FAQCard question="IELTS জেনারেল ট্রেনিং কি কঠিন?">
          <p>কঠিনতা নির্ভর করে আপনার ইংরেজি দক্ষতার উপর। IELTS জেনারেল ট্রেনিং পরীক্ষা মূলত সাধারণ জীবনের বিষয়গুলোর উপর ভিত্তি করে করা হয়, তাই এটি একাডেমিকে থেকে একটু সহজ।</p>
        </FAQCard>

        <FAQCard question="IELTS UKVI পরীক্ষা কত ঘনভাবে নেওয়া হয়?">
          <p>IELTS UKVI পরীক্ষা প্রতি মাসে একবার বা দুইবার অনুষ্ঠিত হয়, যা স্থান এবং সেন্টারের উপর নির্ভর করে পরিবর্তিত হয়।</p>
        </FAQCard>
        
        <FAQCard question="কোন ভিসা আবেদনের জন্য IELTS UKVI লাগে?">
          <p>যুক্তরাজ্যে কাজের ভিসা, স্টুডেন্ট ভিসা এবং অভিবাসন ভিসার জন্য IELTS UKVI প্রয়োজন হয়।</p>
        </FAQCard>
        
        <FAQCard question="IELTS লাইফ স্কিলস পরীক্ষা কীভাবে বুক করবেন?">
          <p>IELTS লাইফ স্কিলস পরীক্ষা ব্রিটিশ কাউন্সিল বা আইডিপি-এর অফিসিয়াল ওয়েবসাইট থেকে বুক করা যায়।</p>
        </FAQCard>
      </div>
    </div>
  );
};

export default FAQ;
