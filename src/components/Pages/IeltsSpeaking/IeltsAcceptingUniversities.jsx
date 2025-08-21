import React from 'react';

// Reusable card component with shadow and rounded corners
const Card = ({ children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    {children}
  </div>
);

// Individual information link card component
const InfoLink = ({ text }) => (
  <div className="bg-white p-2 flex justify-between items-center rounded-lg hover:bg-gray-50 transition-colors">
    <span className="text-gray-800 text-sm md:text-base">{text}</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const IeltsAcceptingUniversities = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg font-sans max-w-6xl mx-auto my-8">
      
      {/* First Card Section */}
      <Card>
        <h2 className="text-xl font-bold text-gray-800 mb-4">IELTS সংক্রান্ত গুরুত্বপূর্ণ তথ্য</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <InfoLink text="IELTS পরীক্ষা" />
          <InfoLink text="IELTS পরীক্ষার নিয়ম" />
          <InfoLink text="IELTS পরীক্ষার ফি" />
          <InfoLink text="IELTS পরীক্ষার্থী" />
          <InfoLink text="IELTS এর জন্য গুরুত্বপূর্ণ বই" />
          <InfoLink text="IELTS এর গুরুত্বপূর্ণ টিপস" />
          <InfoLink text="IELTS পরীক্ষার ফল" />
          <InfoLink text="IELTS প্রস্তুতি" />
          <InfoLink text="IELTS স্টাডি গাইড" />
          <InfoLink text="IELTS অনুশীলন পরীক্ষা" />
        </div>
      </Card>

      {/* Second Card Section */}
      <Card>
        <h2 className="text-xl font-bold text-gray-800 mb-4">IELTS গ্রহণকারী দেশসমূহ</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <InfoLink text="যুক্তরাজ্যসহ দেশসমূহ" />
          <InfoLink text="কানাডাসহ দেশসমূহ" />
          <InfoLink text="যুক্তরাষ্ট্রসহ দেশসমূহ" />
          <InfoLink text="অস্ট্রেলিয়াসহ দেশসমূহ" />
          <InfoLink text="অন্যান্য দেশসমূহ" />
          <InfoLink text="ইউরোপীয় ইউনিয়ন" />
          <InfoLink text="সিঙ্গাপুরের ভিসার নিয়ম" />
          <InfoLink text="আয়ারল্যান্ড দেশসমূহ" />
          <InfoLink text="দক্ষিণ আফ্রিকা" />
        </div>
      </Card>
      
    </div>
  );
};

export default IeltsAcceptingUniversities;
