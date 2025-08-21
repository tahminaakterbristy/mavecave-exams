import React, { useState } from 'react';

// Reusable card component for FAQ style sections
const ExpandableCard = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4 overflow-hidden">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-semibold text-gray-800 text-sm md:text-base">{title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-blue-500 transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      {isExpanded && (
        <div className="mt-4 text-gray-700 text-sm">
          {children}
        </div>
      )}
    </div>
  );
};

const FeatureSix = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">৬. ২০২৩ সালের Life Skills IELTS পরীক্ষা: শহরভিত্তিক তালিকা</h2>
        <p className="text-gray-700 mb-4">
          বাংলাদেশে IELTS Life Skills টেস্ট ব্রিটিশ কাউন্সিল এবং আইডিপি উভয়ই গ্রহণ করে। ব্রিটিশ কাউন্সিল এবং আইডিপি উভয়ই তাদের অনলাইন পোর্টাল এবং সরাসরি যোগাযোগের মাধ্যমে এই পরীক্ষাটি পরিচালনা করে। এই পরীক্ষাটি যুক্তরাজ্যের ভিসা এবং অভিবাসন বিভাগ (UKVI) দ্বারা পরিচালিত হয়।
        </p>
        <p className="text-gray-700 mb-4">
          যদি আপনি যুক্তরাজ্যে আপনার প্রয়োজন অনুযায়ী কোন IELTS টেস্ট উপযুক্ত না হয়, তাহলে IELTS Life Skills টেস্টের বিস্তারিত জানার জন্য ব্রিটিশ কাউন্সিল এবং আইডিপি উভয় ওয়েবসাইট ভিজিট করতে পারেন।
        </p>

        <h3 className="text-lg font-bold text-gray-800 mb-4">Life Skills IELTS পরীক্ষার তারিখসমূহ: শহর অনুযায়ী তালিকা</h3>
        
        {/* Expandable Cards */}
        <ExpandableCard title="ঢাকায় IELTS পরীক্ষার তারিখসমূহ">
          <p>এখানে ঢাকার পরীক্ষার তারিখগুলো থাকবে।</p>
        </ExpandableCard>
        
        <ExpandableCard title="চট্টগ্রাম IELTS পরীক্ষার তারিখসমূহ">
          <p>এখানে চট্টগ্রামের পরীক্ষার তারিখগুলো থাকবে।</p>
        </ExpandableCard>

        <ExpandableCard title="সিলেট IELTS পরীক্ষার তারিখসমূহ">
          <p>এখানে সিলেটের পরীক্ষার তারিখগুলো থাকবে।</p>
        </ExpandableCard>
        
      </div>
    </div>
  );
};

export default FeatureSix;
