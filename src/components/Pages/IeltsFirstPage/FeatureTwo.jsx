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

const FeatureTwo = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">২. ২০২৩ সালে বাংলাদেশে Academic IELTS পরীক্ষার তারিখসমূহ</h2>
        <p className="text-gray-700 mb-4">
          IELTS Academic Test আপনার উচ্চশিক্ষা লাভ ও সফল কর্মজীবন শুরু করার জন্য আপনার বিভিন্ন বিভাগ বা ফ্যাকালটিগুলো মূল্যায়ন করার সহযোগিতা করে।
        </p>
        <p className="text-gray-700 mb-4">
          পরীক্ষার জন্য নিবন্ধন করার আগে কয়েকটি গুরুত্বপূর্ণ তথ্য জেনে রাখুন:
        </p>

        {/* Info Box */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
            <li>IELTS একাডেমিক পরীক্ষা শুধুমাত্র মাসের তিন দিনই হয় (প্রচলিত চতুর্থ দিন বাদ)। একটি নির্দিষ্ট পরীক্ষার দিনে তিনটি ভাগ করা হয়, যার সময় আপনি আপনার সুবিধামত বেছে নিতে পারেন।</li>
            <li>IELTS Academic পরীক্ষার সময়সীমা সাধারণত:
              <ul className="list-disc pl-6 text-xs mt-1">
                <li>শ্রবণ: ১০টা থেকে দুপুর ১২:০০টা পর্যন্ত</li>
                <li>পড়ন্ত: ১০:০০টা থেকে দুপুর ১২:০০টা পর্যন্ত</li>
                <li>লিখন: ১০:০০টা থেকে দুপুর ১২:০০টা পর্যন্ত</li>
                <li>কথা বলার: ১০:০০টা থেকে দুপুর ১২:০০টা পর্যন্ত</li>
              </ul>
            </li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4">
          নিয়মিত IELTS একাডেমিক পরীক্ষার অনুশীলন পরীক্ষাগুলো করলে আপনি শুধুমাত্র আপনার স্পিকিং দক্ষতা বৃদ্ধি করতে পারবেন না, সাথে আপনি আপনার দুর্বলতা খুঁজে বের করে সেগুলোর ওপর প্রয়োজনীয় প্রশিক্ষণও করতে পারবেন।
        </p>

        <h3 className="text-lg font-bold text-gray-800 mb-4">বিভিন্ন ধরনের IELTS পরীক্ষার বাঞ্চিং ফি কার্ডের সঠিক তথ্যের জন্য নিচের তারিখ দেখুন।</h3>
        
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

        {/* Bottom Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-colors">
          <span>ভর্তি এবং পরীক্ষার সম্পূর্ণ তারিখসমূহ দেখুন</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FeatureTwo;
