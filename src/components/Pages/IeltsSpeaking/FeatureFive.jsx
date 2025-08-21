import React, { useState } from 'react';

// Expandable Card Component
const ExpandableCard = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-4 border border-gray-200">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-semibold text-gray-800">{title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-blue-500 transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      {isExpanded && (
        <div className="mt-4 text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};

// Small Resource Card Component
const SmallResourceCard = ({ title, linkText }) => (
  <div className="bg-white rounded-lg p-4 shadow-sm text-center">
    <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
    <a href="#" className="flex items-center justify-center text-blue-500 hover:text-blue-600 transition-colors">
      {linkText}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  </div>
);

const FeatureFive = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">৫. IELTS স্পিকিং টিপস ও স্ট্র্যাটেজি</h2>
        <p className="text-gray-700 mb-4">
          IELTS স্পিকিং টেস্টের প্রস্তুতি এবং ব্যবহারযোগ্য টিপস ও স্ট্র্যাটেজিগুলো ব্যবহার করে আপনি আপনার স্পিকিং দক্ষতা বৃদ্ধি করতে পারেন।
        </p>
        <p className="text-gray-700 mb-6">
          IELTS স্পিকিং টেস্টের একটি গুরুত্বপূর্ণ অংশ হলো, আপনার নিজের দক্ষতাগুলো সঠিকভাবে ব্যবহার করা।
        </p>
        
        <ExpandableCard title="IELTS স্পিকিং প্রস্তুতির টিপস">
          <p>
            IELTS স্পিকিং প্রস্তুতির জন্য আপনাকে নিয়মিত অনুশীলন করতে হবে। ইংরেজি মুভি দেখা, ইংরেজি গান শোনা, এবং ইংরেজিতে কথা বলার অভ্যাস করতে হবে।
          </p>
        </ExpandableCard>

        <ExpandableCard title="IELTS স্পিকিং পরীক্ষার দিন টিপস">
          <p>
            পরীক্ষার দিন আপনাকে শান্ত থাকতে হবে এবং স্পষ্টভাবে কথা বলতে হবে। প্রশ্নের উত্তর দেওয়ার সময়, আপনার মতামতগুলো বিস্তারিতভাবে জানাতে হবে।
          </p>
        </ExpandableCard>
      </div>

      {/* Next Step Section */}
     
        <h2 className="text-xl font-bold text-gray-800 mb-4">পরবর্তী ধাপ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SmallResourceCard title="IELTS স্পিকিং" linkText="একটি নতুন টেস্ট দিন" />
          <SmallResourceCard title="IELTS রিডিং" linkText="একটি নতুন টেস্ট দিন" />
          <SmallResourceCard title="IELTS রাইটিং" linkText="নমুনা উত্তরসমূহ" />
        </div>
      </div>
    
  );
};

export default FeatureFive;
