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

const IeltsCountries = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg font-sans max-w-6xl mx-auto my-8">
      
      {/* First Card Section */}
      <Card>
        <h2 className="text-xl font-bold text-gray-800 mb-4">IELTS গ্রহণকারী বিশ্ববিদ্যালয়সমূহ</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <InfoLink text="যুক্তরাজ্যের বিশ্ববিদ্যালয় এবং কলেজসমূহ" />
          <InfoLink text="কানাডার বিশ্ববিদ্যালয় এবং কলেজসমূহ" />
          <InfoLink text="অন্যান্য বিশ্ববিদ্যালয়সমূহ" />
          <InfoLink text="অস্ট্রেলিয়ার বিশ্ববিদ্যালয়" />
          <InfoLink text="ইউরোপের বিশ্ববিদ্যালয়" />
          <InfoLink text="ইউএসএ এর বিশ্ববিদ্যালয় এবং কলেজসমূহ" />
          <InfoLink text="স্ক্যান্ডিনেভিয়ান বিশ্ববিদ্যালয়সমূহ" />
          <InfoLink text="নিউজিল্যান্ড বিশ্ববিদ্যালয়" />
          <InfoLink text="অন্যান্য ইউরোপীয় বিশ্ববিদ্যালয়" />
        </div>
      </Card>

      {/* Second Card Section */}
      <Card>
        <h2 className="text-xl font-bold text-gray-800 mb-4">IELTS অনুশীলন পরীক্ষার সম্পর্কে আরও পড়ুন</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <InfoLink text="IELTS অনুশীলন পরীক্ষার কেন গুরুত্বপূর্ণ" />
          <InfoLink text="IELTS লেখ্য অনুশীলন পরীক্ষা" />
          <InfoLink text="IELTS শ্রবণ অনুশীলন পরীক্ষা" />
          <InfoLink text="IELTS পড়ার অনুশীলন পরীক্ষা" />
          <InfoLink text="IELTS কথা বলার কিউ কার্ড" />
          <InfoLink text="IELTS কথা বলার উত্তর" />
          <InfoLink text="IELTS কথা বলার টিপস" />
          <InfoLink text="IELTS লিখার টিপস" />
          <InfoLink text="IELTS পড়ার টিপস" />
          <InfoLink text="IELTS শোনার টিপস" />
          <InfoLink text="IELTS উচ্চারণ" />
          <InfoLink text="IELTS ফল" />
        </div>
      </Card>
      
    </div>
  );
};

export default IeltsCountries;
