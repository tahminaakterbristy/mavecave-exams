// src/components/IELTSIntro.jsx
import React from 'react';

const Intro = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto my-8">
      <div className="text-sm text-gray-500 mb-2">
        <span className="font-bold">সফলতা টুটোরিয়াল</span> / পরীক্ষা-সমূহ / IELTS / প্র্যাকটিস টেস্ট
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">IELTS প্র্যাকটিস টেস্ট</h1>
      <div className="flex items-center text-gray-500 text-sm mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>আপডেট করা হয়েছে ২০ এপ্রিল, ২০২৩</span>
      </div>
      <p className="text-gray-700 mb-4">
        IELTS পরীক্ষার জন্য প্রস্তুতি নিচ্ছেন? আমাদের ব্যাপক IELTS প্র্যাকটিস টেস্টগুলো আপনাকে আপনার টার্গেট ব্যান্ড স্কোর অর্জন
        করার জন্য ডিজাইন করা হয়েছে।
      </p>
      <p className="text-gray-700 mb-4">
        প্র্যাকটিস টেস্টগুলো খুবই গুরুত্বপূর্ণ কারণ এগুলো আপনাকে IELTS পরীক্ষার ফরম্যাটের সাথে পরিচিত করে, সময়
        ব্যবস্থাপনায় দক্ষ করে তোলে, এবং প্রশ্নের উত্তরগুলোতে দ্রুত এবং সঠিকভাবে উত্তর দেওয়া সাহায্য করে।
      </p>
      <p className="text-gray-700">
        বাস্তব পরীক্ষার পরিবেশ অনুকরণ করার মাধ্যমে আপনি আত্মবিশ্বাস অর্জন করবেন এবং আপনার শোনার, পড়ার,
        লেখার ও বলার দক্ষতা উন্নত করবেন, যাতে পরীক্ষার দিন আপনি সম্পূর্ণ প্রস্তুত থাকেন।
      </p>
      <p className="text-gray-700 mt-4">
        আজই আমাদের প্র্যাকটিস টেস্ট দিয়ে আপনার প্রস্তুতি শুরু করুন এবং সফলতার প্রথম পদক্ষেপ নিন।
      </p>
    </div>
  );
};

export default Intro;