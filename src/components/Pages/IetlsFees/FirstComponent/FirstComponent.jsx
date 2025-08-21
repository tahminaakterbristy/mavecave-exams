import React from 'react';

const FirstComponent = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans bg-gray-50">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span>সিয়াম এডুকেশন</span>
        <span className="mx-1">/</span>
        <span>পরীক্ষাসমূহ</span>
        <span className="mx-1">/</span>
        <span>IELTS</span>
        <span className="mx-1">/</span>
        <span>ফি</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">IELTS পরীক্ষার ফি ২০২৩</h1>

      <div className="flex items-center text-sm text-gray-500 mb-6">
        <svg
          className="w-4 h-4 mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
        <span>আপডেট করা হয়েছে: ১৪ এপ্রিল ২০২৩, ০৫:৩৭</span>
      </div>

      <div className="p-4 md:p-6 mb-6 rounded-lg border border-blue-200 bg-blue-50">
        <h3 className="font-semibold text-blue-800 mb-2">IELTS-র সর্বশেষ আপডেট</h3>
        <p className="text-blue-700">২০২৩ সালে Academic এবং General Training উভয় পরীক্ষার ফি আপডেট করে BDT 19,500 করা হয়েছে।</p>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p>
          IELTS একটি জনপ্রিয় পরীক্ষা, যা প্রতি বছর প্রায় ৪ মিলিয়ন শিক্ষার্থী গ্রহণ করে। এই সংখ্যাটি প্রতিনিয়ত আরও বাড়ার আশা করা হচ্ছে।
        </p>
        <p>
          আপনার IELTS পরীক্ষার জন্য পরীক্ষার তারিখ এবং কেন্দ্র গুরুত্বপূর্ণ ম্যাচের একটি অংশ হয়, IELTS পরীক্ষার জন্য কত টাকা দিতে হয়"-এরও সম্পর্কে সচেতন হওয়া আপনাকে বাজেট পরিকল্পনা করতে সাহায্য করবে এবং অতিরিক্ত ব্যয় এড়াতে সাহায্য করবে।
        </p>
        <p>
          মনে রাখা জরুরী যে, IELTS পরীক্ষার ফি আপনার অবস্থান এবং আপনি কোন ধরনের পরীক্ষা নিবেন (Academic নাকি General Training) তার উপর নির্ভর করে ভিন্ন হতে পারে। এছাড়াও, পরীক্ষার তারিখ পরিবর্তন বা বাতিল করার জন্য অতিরিক্ত খরচ থাকতে পারে।
        </p>
        <p>
          এই পৃষ্ঠায়, আমরা IELTS পরীক্ষার সঙ্গে সম্পর্কিত সমস্ত খরচ বিস্তারিতভাবে বিশ্লেষণ করব, যাতে আপনি আর্থিক পরিকল্পনা আরও ভালোভাবে করতে পারেন।
        </p>
      </div>
    </div>
  );
};

export default FirstComponent;