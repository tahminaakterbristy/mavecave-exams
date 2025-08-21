// src/components/IELTSPage.jsx
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      q: 'IELTS এর দুটি প্রধান মডিউল কী কী?',
      a: 'IELTS-এর দুটি প্রধান মডিউল হলো Academic এবং General Training।',
    },
    {
      q: 'IELTS পরীক্ষাটি মোট কতটি অংশ নিয়ে গঠিত?',
      a: 'IELTS পরীক্ষাটি মোট চারটি অংশ নিয়ে গঠিত: Reading, Writing, Listening, এবং Speaking।',
    },
    {
      q: 'আমি কি স্পিকিং টেস্টের তারিখ ও সময় নিজে বেছে নিতে পারি?',
      a: 'IELTS স্পিকিং টেস্ট সাধারণত লিখিত পরীক্ষার ৭ দিন আগে বা পরে অনুষ্ঠিত হয়। অনেক সময় আপনি আপনার সুবিধা মতো তারিখ ও সময় বেছে নিতে পারেন, তবে এটি কেন্দ্রের উপর নির্ভর করে।',
    },
    {
      q: 'রিডিং টেস্টের সময়সীমা কত?',
      a: 'IELTS রিডিং টেস্টের সময়সীমা ৬০ মিনিট।',
    },
    {
      q: 'উভয় মডিউলে রাইটিং টেস্টের জন্য কত সময় দেওয়া হয়?',
      a: 'IELTS রাইটিং টেস্টের জন্য উভয় মডিউলে (Academic এবং General Training) ৬০ মিনিট সময় দেওয়া হয়।',
    },
  ];

  const cueCards = [
    { text: 'Describe An Energetic Person That You Know' },
    { text: 'Describe A Job That Is Useful To Society' },
    { text: 'Describe A Place You Have Been To Would Like To Recommended Others To Live There' },
    { text: 'Describe A Countryside Area That You Have Been To' },
    { text: 'Describe Something That Surprised You And Made You Happy' },
    { text: 'Describe A Time When You Organized A Happy Event Successfully' },
    { text: 'Describe A Skill That You Learned From Older People' },
    { text: 'Describe Someone You Really Like To Spend Time With' },
    { text: 'Describe A Place In Your Hometown/City That Is Different From Other Places And That You Enjoy Visiting With Your Parents' },
    { text: 'Describe A Time You Visited A New Place' },
    { text: 'Describe A Movie You Watched Recently' },
    { text: 'Describe A Thing You Did To Learn Another Language' },
    { text: 'Describe Your Favorite Food At A Traditional Festival Or A Special Event In Your Country' },
    { text: 'Describe A Place Where You Have Taken Photos More Than Once' },
    { text: 'Describe Something You Received For Free' },
  ];

  const testCenters = [
    { text: 'ঢাকা IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'চট্টগ্রাম IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'রাজশাহী IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'সিলেট IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'খুলনা IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'কুমিল্লা IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'ময়মনসিংহ IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'বরিশাল IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'লক্ষ্মীপুর IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'বরিশাল IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
  ];

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

  const nextSteps = [
    { text: 'IELTS রিডিং অনুশীলন পরীক্ষা', link: '#' },
    { text: 'IELTS স্পিকিং অনুশীলন পরীক্ষা', link: '#' },
    { text: 'IELTS রাইটিং অনুশীলন পরীক্ষা', link: '#' },
  ];

  const importantInfo = [
    { text: 'IELTS পরীক্ষা', link: '#' },
    { text: 'IELTS পরীক্ষার তারিখ', link: '#' },
    { text: 'IELTS পরীক্ষার ফি', link: '#' },
    { text: 'IELTS মডিউল', link: '#' },
    { text: 'IELTS লেখার অনুশীলন পরীক্ষা', link: '#' },
    { text: 'IELTS কথা বলার অনুশীলন পরীক্ষা', link: '#' },
    { text: 'IELTS শোনার অনুশীলন পরীক্ষা', link: '#' },
    { text: 'IELTS লেখার অনুশীলন পরীক্ষা', link: '#' },
    { text: 'IELTS স্পিকিং (কথা)', link: '#' },
    { text: 'IELTS ফলাফল', link: '#' },
    { text: 'IELTS-এর ধরন', link: '#' },
    { text: 'IELTS প্যাটার্ন', link: '#' },
    { text: 'IELTS পরীক্ষার যোগ্যতা', link: '#' },
    { text: 'IELTS টুটি লুকিং', link: '#' },
    { text: 'IELTS কার্ড চেক করা', link: '#' },
  ];

  const renderGridLinks = (items) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {items.map((item, index) => (
        <a key={index} href={item.link || '#'} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors">
          <span>{item.text}</span>
          <span className="text-xl font-bold">→</span>
        </a>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-100 p-4">
      {/* Container for the entire page content */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
        {/* IELTS Intro Section */}
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

      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
        {/* IELTS Reading Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">১. IELTS প্র্যাকটিস টেস্ট: রিডিং</h2>
        <p className="text-gray-700 mb-4">
          IELTS Reading টেস্ট, Academic অথবা General Training মডিউল যাই হোক না কেন, আপনার কাছে ৬০ মিনিট সময়
          থাকবে ৪০টি প্রশ্নের উত্তর দেওয়ার জন্য।
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold">Academic মডিউল:</span> আপনাকে বিভিন্ন বর্ণনামূলক, তথ্যভিত্তিক এবং বিশ্লেষণাত্মক বিষয় নিয়ে প্রশ্ন করা হবে। কখনও
          কখনও ডায়াগ্রাম বা গ্রাফিক্স সহ এই প্রশ্নগুলো হয়, কারণ এগুলো জার্নাল, আর্টিকেল এবং সংবাদপত্র থেকে নেওয়া হয়।
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-bold">General Training মডিউল:</span> আপনি ছোট বিবরণ বিষয়ক লেখা, কাজের সাথে সম্পর্কিত লেখা, এবং একটি ছোট সাধারণ
          আগ্রহের বিষয় নিয়ে লেখা অংশের মুখোমুখি হবেন, যা হ্যান্ডবুক বা বিজ্ঞাপন হতে পারে।
        </p>
        <p className="text-gray-700 mb-4">
          আপনার দক্ষতা বাড়াতে এবং ব্যান্ড স্কোর উন্নত করতে আমাদের IELTS Reading Tests দিয়ে প্র্যাকটিস করুন।
        </p>
        <p className="text-gray-700 mb-6">
          IELTS Reading টেস্টের অভ্যাস করার জন্য একটি sample paper একটি চেষ্টা করে দেখতে চান?
        </p>
        <a href="#" className="w-full text-center bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors block">
          IELTS রিডিং প্র্যাকটিস টেস্টের জন্য এখানে ক্লিক করুন →
        </a>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
        {/* Speaking Test Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">৪. IELTS প্র্যাকটিস টেস্ট: স্পিকিং</h2>
        <p className="text-gray-700 mb-4">
          IELTS স্পিকিং একটি স্ব-নিয়ন্ত্রিত কথোপকথন, যা Academic এবং General Training উভয় মডিউলের জন্য ১১ থেকে ১৪ মিনিটের
          মধ্যে হয় এবং এটি তিনটি ভাগে বিভক্ত।
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold">পার্ট ১ (৪-৫ মিনিট):</span> টেস্ট চেক সহ পরিচিতি নিয়ে হয়। এখানে নির্দিষ্ট বিষয় যেমন আপনার পরিবার, পড়াশোনা, কাজ এবং
          ব্যক্তিগত আগ্রহ সম্পর্কে কিছু প্রশ্ন করা হয়।
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold">পার্ট ২ (৩-৪ মিনিট):</span> আপনাকে একটি কার্ড দেওয়া হবে এবং একটি বিষয় নিয়ে ১ মিনিট প্রস্তুতি সময় পাবেন, তারপর
          এক থেকে দুই মিনিটের জন্য সে সম্পর্কে আপনার ব্যক্তিগত বিষয় নিয়ে বলতে হবে।
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-bold">পার্ট ৩ (৪-৫ মিনিট):</span> এটি পার্ট ২ থেকে আপনার বক্তব্যকে আরও বিস্তারিত ব্যাখ্যা এবং ১-এর সাধারণ বিষয় সম্পর্কিত
          প্রশ্ন করা হয়, যা আপনার পরীক্ষা নিয়ে প্রকাশ এবং আপনার ধারণার আলোচনার সুযোগ দেয়।
        </p>
        <p className="text-gray-700 mb-4">
          কথা বলা দক্ষতা, শব্দভাণ্ডার, ব্যাকরণ এবং উচ্চারণ উন্নত করা হয়। এর পাশাপাশি আপনার প্রস্তুতিকে আরও কার্যকর
          করে তোলে এবং আপনার কাঙ্খিত IELTS স্কোর অর্জন করতে সাহায্য করে।
        </p>
        <p className="text-gray-700 mb-4">
          IELTS প্র্যাকটিস খুবই গুরুত্বপূর্ণ কারণ এটি আপনাকে IELTS পরীক্ষার ফরম্যাটের মধ্যে দ্রুত অনুশীলন করতে সাহায্য করে,
          যা পরীক্ষার দিন আপনার সময় ব্যবস্থাপনা এবং আত্মবিশ্বাস বৃদ্ধি করে।
        </p>
        <a href="#" className="w-full text-center bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors block mb-8">
          IELTS স্পিকিং প্র্যাকটিস টেস্টের জন্য এখানে ক্লিক করুন →
        </a>

        {/* Next Steps Section */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 mt-8">পরবর্তী ধাপ</h3>
        {renderGridLinks(nextSteps)}

        {/* Important Info Section */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 mt-8">IELTS সংক্রান্ত গুরুত্বপূর্ণ তথ্য</h3>
        {renderGridLinks(importantInfo)}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
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

      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
       

        {/* Cue Card Section */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">সেরা কিউ কার্ডগুলো উত্তরসহ</h3>
        {renderGridLinks(cueCards)}

        {/* Test Centers Section */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">বাংলাদেশে IELTS পরীক্ষার কেন্দ্র ও তারিখ</h3>
        {renderGridLinks(testCenters)}

         
       {/* FAQ Section */}
       <div className="bg-white p-6 rounded-lg shadow-md mb-8">
         <h2 className="text-2xl font-bold text-gray-800 mb-4">বেশি জিজ্ঞাসিত প্রশ্ন</h2>
         <div className="space-y-4">
           {questions.map((item, index) => (
             <div key={index} className="border-b border-gray-200 py-2 cursor-pointer" onClick={() => toggleFAQ(index)}>
               <div className="flex justify-between items-center text-gray-800 font-medium">
                 <span>{item.q}</span>
                 <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                 </svg>
               </div>
               {openIndex === index && (
                 <p className="mt-2 text-gray-600 transition-opacity duration-300 opacity-100">
                   {item.a}
                 </p>
               )}
             </div>
           ))}
         </div>
       </div>
        </div>
      </div>
    
  );
};

export default FAQ;