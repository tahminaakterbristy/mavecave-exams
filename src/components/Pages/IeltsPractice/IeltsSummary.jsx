import React from 'react';

const IeltsSummary = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto my-8">
      {/* Listening Component */}
      <div className="w-full mb-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">১. IELTS প্র্যাকটিস টেস্ট: লিসেনিং</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p>
            IELTS Listening টেস্ট ৩০ মিনিটে হয়, যা Academic এবং General Training উভয় মডিউলের জন্য একই। এই টেস্ট আপনাকে চারটি রেকর্ডিং শুনতে হয়, যেখানে দেশীয় ইংরেজি বক্তব্য কথা বলছেন, এবং মোট ৪০টি প্রশ্নের উত্তর দিতে হয়, প্রতি রেকর্ডিংয়ে ১০টি প্রশ্ন থাকে।
          </p>
          <p>
            <span className="font-semibold text-gray-900">প্রতিটি রেকর্ডিং:</span> আপনি শুধু একবারই শুনতে পাবেন, যা আপনার সক্ষমতা পরীক্ষা করবে।
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>মূল ধারণা এবং গুরুত্বপূর্ণ তথ্য শোনা</li>
            <li>সম্ভাব্য, মতামত, এবং বক্তব্য উদ্দেশ্য বোঝা</li>
            <li>প্রাসঙ্গিক ভাবন ও কার্যকারণ অনুসরণ করা</li>
          </ul>
          <p>
            আপনি নিচের রেকর্ডিংগুলো থেকে শুনতে পারেন:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>রেকর্ডিং ১: সামাজিক প্রেক্ষাপটে দুইজন মানুষের মধ্যে কথোপকথন</li>
            <li>রেকর্ডিং ২: সামাজিক পরিবেশে একটি মনোলগ (যেমন, স্থানীয় সুবিধা গুলোর বর্ণনা)</li>
            <li>রেকর্ডিং ৩: একাডেমিক বিষয় নিয়ে মনোলগ (যেমন, বিশ্ববিদ্যালয়ের লেকচার)</li>
            <li>রেকর্ডিং ৪: শিক্ষামূলক পরিবেশে সামাজিক ব্যবহারের মধ্যে কথোপকথন</li>
          </ul>
        </div>
      </div>

      {/* Writing Component */}
      <div className="w-full p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">২. IELTS প্র্যাকটিস টেস্ট: রাইটিং</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p>
            IELTS Writing সেকশন সম্পন্ন করার জন্য আপনার কাছে ৬০ মিনিট সময় রয়েছে, যা Academic এবং General Training দুই মডিউলের জন্যই প্রযোজ্য।
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">Academic মডিউল:</h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Task 1-এ আপনাকে একটি টেবিল, গ্রাফ, বার, বা ডায়াগ্রাম কমপক্ষে ১৫০ শব্দে বর্ণনা করতে হবে।</li>
            <li>Task 2-এ একটি রচনা (essay) লিখতে হবে, যার দৈর্ঘ্য ন্যূনতম ২৫০ শব্দ। উভয় উত্তরই নির্দিষ্ট মডিউল একাডেমিক বা নিবন্ধকে হতে হবে।</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">General Training মডিউল:</h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Task 1-এ কমপক্ষে ১৫০ শব্দের একটি চিঠি লিখতে হবে।</li>
            <li>Task 2-এ একটি রচনা লিখতে হবে, যার দৈর্ঘ্য ন্যূনতম ২৫০ শব্দ। এখানে লেখার ধরণ আধা-আনুষ্ঠানিক (semi-formal) বা আনুষ্ঠানিক (formal) হতে পারে, উভয় অনুযায়ী।</li>
          </ul>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">নিবন্ধের নমুনা প্রশ্নসমূহ:</h3>
          <p className="text-lg text-gray-700">
            ১. মানুষের একটি প্রধান বিচার্য কাজ যে অন্যদেরকে আদালতের ভুল হনো কিনা জানাতে হয় তবে পরিকল্পিত পরিস্থিতি মানুষের অবস্থায় প্রকাশিত করা উভয় মাধ্যমে আপনার আচরণকে চিন্তা প্রকাশ করুন এবং আপনার মতামত দিন।
          </p>
          <p className="text-lg text-gray-700 mt-4">
            ২. নিম্ন বর্ণিত ডায়াগ্রাম গ্রাফিক ও কাচের পাত্র পুনর্ব্যবহারের জন্য দেওয়া আছে। ভুল প্রতিবেদন করে এর প্রাসঙ্গিক সুপ্ত উপস্থাপন করুন।
          </p>
          <div className="mt-4 w-full flex justify-center">
            {/* Replace this with an actual image of the glass and plastic recycling lifecycle */}
            <img src="https://i.imgur.com/your-image-here.png" alt="Lifecycle of Glass and Plastic Recycling" className="max-w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Common Button */}
      <div className="w-full mt-8">
        <button className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          IELTS প্র্যাকটিস টেস্টের জন্য এখানে ক্লিক করুন →
        </button>
      </div>
    </div>
  );
};

export default IeltsSummary;