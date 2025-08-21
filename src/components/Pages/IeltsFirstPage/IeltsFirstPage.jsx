import React from 'react';
import IeltsExamDate from './IeltsExamDate';

const IeltsFirstPage = () => {
   
              return (
    <div className="font-sans p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold mb-2">
          ২০২৩ সালের IELTS পরীক্ষা তারিখসমূহ:
        </h1>
        <p className="text-2xl font-medium text-gray-800">
          মার্চ থেকে ডিসেম্বর (Academic ও General Training)
        </p>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span className="mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        আপডেট করা হয়েছে: ৩ মার্চ ২০২৩, ৩:৩৭
      </div>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        আপনি কি IELTS দেয়ার পরবর্তী ধাপ নেওয়ার জন্য প্রস্তুত? মার্চ মাসের জন্য
        নির্ধারিত পরীক্ষার তারিখগুলি নিচে দেওয়া হলো, যা আপনি মিস করতে চান না।
      </p>
      <div className="text-gray-700 space-y-4">
        <p className="text-lg">
          <span className="font-semibold">কম্পিউটার-ভিত্তিক:</span> ১ থেকে ৩০
          মার্চ প্রতিদিন উপলব্ধ
        </p>
        <p className="text-lg">
          <span className="font-semibold">কাগজ-ভিত্তিক:</span> ক্যালেন্ডারে চিহ্নিত
          করুন ৫, ১০, এবং ১২ তারিখ।
        </p>
      </div>

       <div className="font-sans p-6 max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        ১.২. ধাপ: ডাউনলোড IELTS ব্রোশিওর এবং ই-বুক
      </h2>
      <p className="text-gray-600 leading-relaxed">
        আমাদের নতুন ই-বুক IELTS এর জন্য সেরা প্রস্তুতি এবং পরীক্ষার তারিখ সম্পর্কে আপনাকে গাইড করবে।
      </p>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Download Brochure Card */}
        <div className="flex-1">
          <button className="w-full flex items-center justify-center p-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span className="text-lg font-medium">ডাউনলোড IELTS ব্রোশিওর</span>
          </button>
        </div>

        {/* Read E-book Card */}
        <div className="flex-1">
          <button className="w-full flex items-center justify-center p-4 bg-white text-gray-700 rounded-lg shadow-md border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-lg font-medium">পড়ুন ই-বুক</span>
          </button>
        </div>
      </div>
    </div>
    <IeltsExamDate></IeltsExamDate>
    </div>
  );
};
       
export default IeltsFirstPage;