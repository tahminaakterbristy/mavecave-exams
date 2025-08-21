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

const FeatureFive = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">৫. ২০২৩ সালের General Training IELTS UKVI পরীক্ষা তারিখসমূহ</h2>
        <p className="text-gray-700 mb-4">
          IELTS UKVI জেনারেল ট্রেনিং পরীক্ষার প্রধান উদ্দেশ্য হল আপনাকে যুক্তরাজ্যের ভিসা এবং অভিবাসন বিভাগের জন্য তাদের শিক্ষা, কাজ বা ভিসার উদ্দেশ্যে বিশ্ববিদ্যালয়ে উপস্থিত হওয়ার জন্য প্রস্তুত করা। এটি আপনার সাধারণ জীবন ও কাজ সম্পর্কে আপনার জ্ঞান পরীক্ষা করে।
        </p>
        <p className="text-gray-700 mb-4">
          IELTS UKVI General Training এবং IELTS General Training একই হয়, শুধু IELTS for UKVI শুধুমাত্র UK এবং তাদের সংশ্লিষ্ট ভিসা বিভাগের প্রয়োজন অনুযায়ী ব্রিটিশ কাউন্সিল দ্বারা অনুমোদিত টেস্ট সেন্টারগুলোতে নেওয়া হয়।
        </p>

        <h3 className="text-lg font-bold text-gray-800 mb-4">IELTS UKVI General Training পরীক্ষার তারিখ: শহরভিত্তিক তালিকা</h3>
        
        <p className="text-gray-700 mb-4 text-sm">
          IELTS UKVI General Training পরীক্ষা যেকোনো দেশের যেকোনো শহরে নিয়মিতভাবে হয়। নিচে শহর নির্বাচন করে নির্দিষ্ট পরীক্ষার তারিখ, সময় এবং স্থান সম্পর্কে বিস্তারিত তথ্য পেতে পারেন।
        </p>
        
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

export default FeatureFive;
