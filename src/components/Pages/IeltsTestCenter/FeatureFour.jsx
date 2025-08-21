import React from 'react';

const FeatureFour = () => {
   return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8 font-sans">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">৪. IELTS টেস্ট তারিখ বুকিং: ধাপে ধাপে গাইড</h2>
      <p className="text-gray-700 mb-6">
        আপনি আপনার IELTS পরীক্ষা জমা করার জন্য অনলাইনে বা অফলাইনে আবেদন করতে পারেন।
      </p>

      {/* Main List */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        অনলাইন আবেদন প্রক্রিয়া সম্পন্ন করতে আপনাকে নিম্নলিখিত পদক্ষেপগুলি অনুসরণ করা প্রয়োজন:
      </h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        <li>IELTS IDP Bangladesh ওয়েবসাইট ভিজিট করুন।</li>
        <li>"Register for IELTS" অপশনটি নির্বাচন করুন।</li>
        <li>আপনার পছন্দের পরীক্ষার ধরন নির্বাচন করুন (কম্পিউটার-ভিত্তিক/পেপার-ভিত্তিক)।</li>
        <li>পরীক্ষার মডিউল নির্বাচন করুন (Academic/General)।</li>
        <li>উপলব্ধ তারিখ থেকে পছন্দের পরীক্ষা বেছে নিন।</li>
        <li>নিজের ব্যক্তিগত তথ্য দিয়ে একটি প্রোফাইল তৈরি করুন।</li>
        <li>"Register" বোতামে ক্লিক করে রেজিস্ট্রেশন এবং ফি প্রদান করুন।</li>
        <li>রেজিস্ট্রেশন ফি প্রায় BDT 18,000 হতে পারে, যা আপনার ব্যবহারের ভিত্তিতে পরিবর্তিত হয়।</li>
        <li>আপনার প্রবেশপত্র, পরীক্ষার তারিখ, সময়, এবং অবস্থান একটি কনফার্মেশন মেইলে পাবেন।</li>
      </ul>

      {/* Important Notice */}
      <p className="font-bold text-gray-800 mb-2">
        মনে রাখবেন, আপনার কম্পিউটারভিত্তিক পরীক্ষার সিট প্রতি দুই দিন পর পরিবর্তন করা হয়ে থাকে।
      </p>
      <p className="text-gray-700 mb-6">
        দ্রষ্টব্য: প্রতিটি ধাপ খুব সাবধানে মানা, বিশেষ করে তথ্য সম্পর্কিত হয়, তাই এটি খুব জরুরি করে তোলা হয়।
      </p>

      {/* Offline Registration Section */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">অনলাইন রেজিস্ট্রেশন করা:</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        <li>আপনার নিকটতম IDP IELTS শাখা বা অনুমোদনপ্রাপ্ত এজেন্সিতে যান।</li>
        <li>নিচের নিম্নলিখিত পদক্ষেপগুলি অনুসরণ করুন:
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
            <li>যথাযথ আইডি কার্ড ও ঠিকানা</li>
            <li>ফিটনেসের ও শারীরিক প্রমাণপত্র</li>
          </ul>
        </li>
      </ul>

      <p className="text-gray-700">
        আমাদের সাথে যোগ দিয়ে আপনি আপনার ব্যক্তিগত পরীক্ষাগুলি সম্পূর্ণ করতে পারেন।
      </p>
    </div>
  );
};

export default FeatureFour;