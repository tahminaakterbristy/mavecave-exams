import React from 'react';

// Reusable card component with a hover effect
const CenterCard = ({ location }) => (
  <div className="bg-white p-4 flex justify-between items-center rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
    <span className="text-sm font-semibold text-gray-800">{location}</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const IeltsCenters = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">বাংলাদেশে IELTS পরীক্ষার কেন্দ্র ও তারিখ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CenterCard location="ঢাকা শহরের পরীক্ষার কেন্দ্র ও তারিখ" />
          <CenterCard location="চট্টগ্রাম শহরের পরীক্ষার কেন্দ্র ও তারিখ" />
          <CenterCard location="রাজশাহী শহরের পরীক্ষার কেন্দ্র ও তারিখ" />
          <CenterCard location="সিলেট শহরের পরীক্ষার কেন্দ্র ও তারিখ" />
          <CenterCard location="কুমিল্লা শহরের পরীক্ষার কেন্দ্র ও তারিখ" />
          <CenterCard location="রংপুর শহরের পরীক্ষার কেন্দ্র ও তারিখ" />
          <CenterCard location="খুলনা শহরের পরীক্ষার কেন্দ্র ও তারিখ" />
          <CenterCard location="ময়মনসিংহ শহরের পরীক্ষার কেন্দ্র ও তারিখ" />
          <CenterCard location="বরিশাল শহরের পরীক্ষার কেন্দ্র ও তারিখ" />
          <CenterCard location="দিনাজপুর শহরের পরীক্ষার কেন্দ্র ও তারিখ" />
        </div>
      </div>
    </div>
  );
};

export default IeltsCenters;
