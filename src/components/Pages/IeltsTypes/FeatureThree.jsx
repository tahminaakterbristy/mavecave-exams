import React from 'react';

const FeatureThree = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">৬. আই.এল.টি.এস-এর ধরন: IELTS Life Skills ও UKVI</h2>
        
        {/* Carousel-like cards section, hardcoded content for now */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col justify-between w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-2">IELTS Life Skills</h3>
            <p className="text-sm">KEY TAKEAWAYS IN 3 SLIDES</p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full mt-4 transition-colors text-sm">
              <span className="flex items-center justify-center">
                Read More
              </span>
            </button>
          </div>
          <div className="bg-blue-500 text-white rounded-lg p-6 flex items-start justify-center flex-col w-full md:w-1/3">
            <span className="text-sm opacity-75 mb-2">০1</span>
            <p className="font-semibold">IELTS Life Skills is used to acquire a visa to live with a spouse or relative in the UK.</p>
          </div>
          <div className="bg-blue-400 text-white rounded-lg p-6 flex items-start justify-center flex-col w-full md:w-1/3">
            <span className="text-sm opacity-75 mb-2">০2</span>
            <p className="font-semibold">It is used to settle permanently or get citizenship in the UK.</p>
          </div>
        </div>

        {/* Main content section from the image */}
        <p className="text-gray-700 leading-relaxed mb-4 mt-4">
          IELTS Life Skills এবং UKVI পরীক্ষা যেসব মানুষ যুক্তরাজ্যে থেকে বা যুক্তরাজ্যে বসবাস করতে চায় তাদের জন্য।
        </p>

        <h3 className="text-lg font-bold text-gray-800 mb-2">IELTS UKVI-এর দুই ধরনের পরীক্ষা আছে:</h3>
        
        {/* UKVI Table */}
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="py-3 px-4">IELTS-এর ধরন</th>
                <th className="py-3 px-4">উদ্দেশ্য</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-800 font-medium text-sm">IELTS for UKVI (Academic)</td>
                <td className="py-3 px-4 text-gray-700 text-sm">উচ্চ শিক্ষা, স্নাতক ও স্নাতকোত্তর এবং পড়াশোনার জন্য উচ্চশিক্ষা প্রতিষ্ঠানে প্রবেশের জন্য</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-800 font-medium text-sm">IELTS for UKVI (General Training)</td>
                <td className="py-3 px-4 text-gray-700 text-sm">উচ্চ শিক্ষা এবং প্রশিক্ষণ গ্রহণের জন্য অথবা যারা পেশাগত প্রশিক্ষণ বা চাকরির জন্য আবেদন করতে চান।</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          IELTS একাডেমিক-এর মতোই, IELTS UKVI Academic-এর বিষয়, পদ্ধতি, প্রশ্নাবলী এবং স্কোরিং একই। শুধুমাত্র এর ফরম্যাট IELTS UKVI একাডেমিক অনুযায়ী SELT-অনুমোদিত পরীক্ষাকেন্দ্রের নিয়ম মেনে চলে।
        </p>

        {/* Second half from the second image */}
        <p className="text-gray-700 leading-relaxed mb-4">
          IELTS Life Skills পরীক্ষা শুধুমাত্র শোনার এবং কথা বলার দক্ষতা যাচাই করে। এটি একটি ৩২ মিনিটের পরীক্ষা।
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          IELTS Life Skills পরীক্ষা দুটি মডিউলের মাধ্যমে করা হয়, তা হলো IELTS Life Skills A1 এবং B1।
        </p>
        <h3 className="text-lg font-bold text-gray-800 mb-2">এখনো প্রতিটি পরীক্ষার স্তর সম্পর্কে একটু বর্ণনা দেওয়া হলো</h3>
        
        {/* Detailed Skills Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="py-3 px-4">শ্রেণী বিভাগ</th>
                <th className="py-3 px-4">প্রয়োজনীয় দক্ষতা</th>
                <th className="py-3 px-4">কিছু উদাহরণ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-800 font-medium text-sm">IELTS Life Skills A1</td>
                <td className="py-3 px-4 text-gray-700 text-sm">
                  <ul className="list-disc list-inside space-y-1">
                    <li>- নিজের বিভিন্ন কর্মপরিচয় বর্ণনা করা</li>
                    <li>- মনোভাব ও পছন্দ প্রকাশ করা</li>
                    <li>- কিছু জিজ্ঞাসা করা</li>
                    <li>- নিজের পরিচিতি সম্পর্কে কথা বলা, ক্ষমতা বা অক্ষমতা সহ।</li>
                  </ul>
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">কিছুজনের সঙ্গে কথোপকথন চালিয়ে নেওয়া</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-800 font-medium text-sm">IELTS Life Skills A2</td>
                <td className="py-3 px-4 text-gray-700 text-sm">
                  <ul className="list-disc list-inside space-y-1">
                    <li>- তুলনা করা</li>
                    <li>- প্রয়োজনীয়তা প্রকাশ করা</li>
                    <li>- পরিকল্পনা করা</li>
                    <li>- পরামর্শ দেওয়া</li>
                  </ul>
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">পরিবারের বর্ণনা, রুচি, রুচি বা আগ্রহের</td>
              </tr>
              <tr className="border-b border-gray-200 last:border-b-0">
                <td className="py-3 px-4 text-gray-800 font-medium text-sm">IELTS Life Skills B1</td>
                <td className="py-3 px-4 text-gray-700 text-sm">
                  <ul className="list-disc list-inside space-y-1">
                    <li>- ভবিষ্যতের পরিকল্পনা আলোচনা করা</li>
                    <li>- অতীত ও বর্তমানের ঘটনা সম্পর্কে কথা বলা</li>
                    <li>- বিস্তারিত, কারণ ও যুক্তি দেওয়া</li>
                    <li>- Ask ChatGPT</li>
                  </ul>
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">সৃজনশীল বা নির্দিষ্ট স্থায়ী ভ্রমণের অনুমতি</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
};

export default FeatureThree;
