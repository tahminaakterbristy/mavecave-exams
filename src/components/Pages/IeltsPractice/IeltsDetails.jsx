// src/components/IELTSDetails.jsx
import React from 'react';

const IeltsDetails = () => {
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

  const renderGridLinks = (links) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {links.map((item, index) => (
        <a key={index} href={item.link} className="flex items-center justify-between p-4 bg-white rounded-lg text-gray-800 hover:bg-gray-200 transition-colors">
          <span>{item.text}</span>
          <span className="text-xl font-bold">→</span>
        </a>
      ))}
    </div>
  );

  return (
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
  );
};

export default IeltsDetails;