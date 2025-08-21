import React from 'react';

const FeatureOne = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">১. IELTS এর ধরন: IELTS একাডেমিক</h2>
        
        {/* Carousel-like cards section, hardcoded content for now */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col justify-between w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-2">IELTS Academic</h3>
            <p className="text-sm">KEY TAKEAWAYS IN 3 SLIDES</p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full mt-4 transition-colors text-sm">
              <span className="flex items-center justify-center">
                Read More
              </span>
            </button>
          </div>
          <div className="bg-blue-500 text-white rounded-lg p-6 flex items-start justify-center flex-col w-full md:w-1/3">
            <span className="text-sm opacity-75 mb-2">০1</span>
            <p className="font-semibold">The IELTS Academic test is for higher education abroad.</p>
          </div>
          <div className="bg-blue-400 text-white rounded-lg p-6 flex items-start justify-center flex-col w-full md:w-1/3">
            <span className="text-sm opacity-75 mb-2">০2</span>
            <p className="font-semibold">There are 4 modules:
              <ul className="list-disc list-inside mt-2">
                <li>Reading</li>
                <li>Writing</li>
                <li>Listening</li>
                <li>Speaking</li>
              </ul>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <p className="text-gray-700 leading-relaxed mb-4">
          IELTS একাডেমিক মূলত তৈরি করা হয়েছে উচ্চ শিক্ষার জন্য বিদেশে যাওয়ার পরিকল্পনা করছেন এমন একাডেমিক পরীক্ষার্থী এটি প্রতিষ্ঠান দিয়ে পরীক্ষা করা হয়।
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          পরীক্ষার চারটি অংশ রয়েছে:
          <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
            <li>রিডিং</li>
            <li>রাইটিং</li>
            <li>লিসেনিং</li>
            <li>স্পিকিং</li>
          </ul>
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          প্রতিটি মডিউল একজন পরীক্ষকের দক্ষতা নির্ভর করে পরীক্ষা করা, যেমন আপনার উচ্চারণ, সংবেদনশীলতা, ভয়েস আচরণ এবং বাক্যের ধরন, যা ব্যবহৃত হয় এবং সেটির উপর আপনার মতামত গ্রহণ করে ফলগুলো।
        </p>
        <p className="text-gray-700 leading-relaxed">
          IELTS একাডেমিক পরীক্ষার্থী বিশ্ববিদ্যালয়ের ভর্তি জন্য প্রয়োজন হয়, যা আমাদের একাডেমিক অনুমতি এবং অন্যান্য IELTS পরীক্ষার তুলনায় কিছুটা বেশি কঠিন। আপনার উচ্চতর শিক্ষার বাস্তবতায়, IELTS Academic দিয়ে বিশ্ববিদ্যালয় থেকে পূর্ণাঙ্গ সুবিধা ও কোর্স নির্বাচন করতে সক্ষম হবেন।
        </p>
      </div>
    </div>
  );
};

export default FeatureOne;
