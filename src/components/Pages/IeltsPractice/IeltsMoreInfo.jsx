// src/components/IELTSMoreInfo.jsx
import React from 'react';

const IeltsMoreInfo = () => {
  const acceptingCountries = [
    { text: 'যুক্তরাষ্ট্র অনুশীলন পরীক্ষা', link: '#' },
    { text: 'কানাডা অনুশীলন পরীক্ষা', link: '#' },
    { text: 'যুক্তরাজ্য অনুশীলন পরীক্ষা', link: '#' },
    { text: 'অস্ট্রেলিয়া অনুশীলন পরীক্ষা', link: '#' },
    { text: 'আয়ারল্যান্ড অনুশীলন পরীক্ষা', link: '#' },
    { text: ' নিউজিল্যান্ড অনুশীলন পরীক্ষা', link: '#' },
    { text: 'সিঙ্গাপুর অনুশীলন পরীক্ষা', link: '#' },
    { text: 'ইউরোপিয়ান ইউনিয়ন অনুশীলন পরীক্ষা', link: '#' },
    { text: 'জার্মান অনুশীলন পরীক্ষা', link: '#' },
  ];

  const acceptingUniversities = [
    { text: 'কলোম্বিয়া ইউনিভার্সিটি অফ টেকনোলজি', link: '#' },
    { text: 'অ্যারিজোনা ইউনিভার্সিটি অফ টেক্সাস', link: '#' },
    { text: 'হার্ভার্ড বিশ্ববিদ্যালয়', link: '#' },
    { text: 'কলোম্বিয়া ইউনিভার্সিটি অফ টেকনোলজি', link: '#' },
    { text: 'কলোম্বিয়া কলেজ', link: '#' },
    { text: 'কলোম্বিয়া ইউনিভার্সিটি অফ কলোরাডো', link: '#' },
    { text: 'জনস হপকিন্স বিশ্ববিদ্যালয়', link: '#' },
    { text: 'ইউনিভার্সিটি অফ আলবার্টা', link: '#' },
    { text: 'কলোম্বিয়া বিশ্ববিদ্যালয়', link: '#' },
    { text: 'নিউ ইয়র্ক বিশ্ববিদ্যালয়', link: '#' },
  ];

  const morePracticeTests = [
    { text: 'IELTS অনুশীলন পরীক্ষার সম্পর্কে আরও পড়ুন', link: '#' },
    { text: 'IELTS লেখার অনুশীলন পরীক্ষা', link: '#' },
    { text: 'IELTS পড়ার অনুশীলন পরীক্ষা', link: '#' },
    { text: 'IELTS শোনার অনুশীলন পরীক্ষা', link: '#' },
    { text: 'IELTS স্পিকিং কিউ কার্ড', link: '#' },
    { text: 'IELTS স্পিকিং পার্ট ১', link: '#' },
    { text: 'IELTS রাইটিং টাস্ক ১', link: '#' },
    { text: 'IELTS রাইটিং টাস্ক ২', link: '#' },
    { text: 'টাস্ক ১ পার্ট ১', link: '#' },
    { text: 'টাস্ক ১ পার্ট ২', link: '#' },
    { text: 'টাস্ক ২ পার্ট ১', link: '#' },
    { text: 'টাস্ক ২ পার্ট ২', link: '#' },
  ];

  const renderGridLinks = (links) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {links.map((item, index) => (
        <a key={index} href={item.link} className="flex items-center justify-between p-4  bg-gray-100 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors">
          <span>{item.text}</span>
          <span className="text-xl font-bold">→</span>
        </a>
      ))}
    </div>
  );

  return (
    <div className=" bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
      {/* Accepting Countries Section */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">IELTS গ্রহণকারী দেশসমূহ</h3>
      {renderGridLinks(acceptingCountries)}

      {/* Accepting Universities Section */}
      <h3 className="text-xl font-bold text-gray-800 mb-4 mt-8">IELTS গ্রহণকারী বিশ্ববিদ্যালয়সমূহ</h3>
      {renderGridLinks(acceptingUniversities)}

      {/* More Practice Tests Section */}
      <h3 className="text-xl font-bold text-gray-800 mb-4 mt-8">IELTS অনুশীলন পরীক্ষার সম্পর্কে আরও পড়ুন</h3>
      {renderGridLinks(morePracticeTests)}
    </div>
  );
};

export default IeltsMoreInfo;