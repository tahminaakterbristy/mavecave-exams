import React from 'react';

const IeltsCancellationFees = () => {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [isOpen4, setIsOpen4] = React.useState(false);
  const [isOpen5, setIsOpen5] = React.useState(false);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            ৪. আইএলটিএস বাতিল ফি ২০২৩
          </h2>
          <p className="text-gray-600 mb-4">
            আপনি আপনার আইএলটিএস পরীক্ষা (একাডেমিক বা জেনারেল ট্রেইনিং) নির্ধারিত তারিখের আগেই বাতিল করতে পারেন। আইডিপি আইএলটিএস ওয়েবসাইটে আপনার আইএলটিএস ইমেইল আইডি ব্যবহার করে লগইন করে সেখানে থেকে আপনি আপনার বাতিল করার জন্য আবেদন জমা দিতে পারেন এবং প্রয়োজনীয় শর্ত অনুযায়ী সম্পূর্ণ টাকা পাবেন।
          </p>
          <div className="p-4 rounded-lg bg-gray-100 border border-gray-200 text-gray-700 text-sm mb-6">
            <p className="font-semibold text-gray-800 mb-2">এই কয়েকটি আইএলটিএস পরীক্ষা বাতিলকরণ সহজ করে তোলে:</p>
            <p>
              ফি আইএলটিএস পরীক্ষা বাতিল করার সময় আপনার যা জানা জরুরি সেই বাতিল নীতিমালাগুলো হলো:
            </p>
          </div>
        </div>
        
        <div className="space-y-4 p-4 md:p-6 border-t border-gray-200">
          <div className="border border-gray-200 rounded-lg">
            <button
              type="button"
              className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => setIsOpen1(!isOpen1)}
            >
              <span>অনলাইন থেকে আপনার পরীক্ষা বাতিল করুন</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 transform ${
                  isOpen1 ? '-rotate-180' : 'rotate-0'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen1 && (
              <div className="px-4 py-3 text-gray-600 bg-gray-50">
                আপনি IELTS অ্যাকাউন্টে লগইন করে সেখানে আপনার কম্পিউটার-ভিত্তিক IELTS পরীক্ষা বাতিল করতে পারবেন।
              </div>
            )}
          </div>
          <div className="border border-gray-200 rounded-lg">
            <button
              type="button"
              className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => setIsOpen2(!isOpen2)}
            >
              <span>পরীক্ষার তারিখের কমপক্ষে ৫ সপ্তাহ আগেই পরীক্ষা বাতিল করা</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 transform ${
                  isOpen2 ? '-rotate-180' : 'rotate-0'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen2 && (
              <div className="px-4 py-3 text-gray-600 bg-gray-50">
                আপনি পূর্ণ মূল্য ফেরত পাবেন, তবে আপনার পরীক্ষার ফি থেকে ২৫% প্রশাসনিক খরচ কাটা হবে।
              </div>
            )}
          </div>
          <div className="border border-gray-200 rounded-lg">
            <button
              type="button"
              className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => setIsOpen3(!isOpen3)}
            >
              <span>পরীক্ষার তারিখের ৫ সপ্তাহের কম সময়ে হলে পরীক্ষা বাতিল করলে</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 transform ${
                  isOpen3 ? '-rotate-180' : 'rotate-0'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen3 && (
              <div className="px-4 py-3 text-gray-600 bg-gray-50">
                যদি আপনি পূর্বনির্ধারিত তারিখের ৫ সপ্তাহের কম সময়ে পরীক্ষা বাতিল করেন, তাহলে আপনার সম্পূর্ণ ফি ফেরত দেওয়া হবে না।
              </div>
            )}
          </div>
          <div className="border border-gray-200 rounded-lg">
            <button
              type="button"
              className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => setIsOpen4(!isOpen4)}
            >
              <span>পরীক্ষার জন্য অ্যাবসেনট/মিস করার কারণে পরীক্ষা বাতিল করা</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 transform ${
                  isOpen4 ? '-rotate-180' : 'rotate-0'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen4 && (
              <div className="px-4 py-3 text-gray-600 bg-gray-50">
                যদি আপনি পূর্বনির্ধারিত তারিখে অনুপস্থিত থাকেন, তাহলে আপনার ফি ফেরত দেওয়া হবে না।
              </div>
            )}
          </div>
          <div className="border border-gray-200 rounded-lg">
            <button
              type="button"
              className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => setIsOpen5(!isOpen5)}
            >
              <span>মেডিকেল জরুরি অবস্থার কারণে পরীক্ষা বাতিল করলে</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 transform ${
                  isOpen5 ? '-rotate-180' : 'rotate-0'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen5 && (
              <div className="px-4 py-3 text-gray-600 bg-gray-50">
                অনিবার্য চিকিৎসার অবস্থার কারণে, যদি আপনি পরীক্ষার ৫ দিনের মধ্যে বৈধ মেডিকেল সার্টিফিকেট প্রদান করেন, তাহলে আপনার সম্পূর্ণ প্রশাসনিক খরচ কেটে নেওয়া হবে এবং সম্পূর্ণ টাকা ফেরত দেওয়া হবে।
              </div>
            )}
          </div>
        </div>

        <div className="p-4 md:p-6 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            বিভিন্ন ধরনের IELTS পরীক্ষার সঠিক বাতিলকরণ ফি চার্জ জানতে, নিচে তথ্যগুলো দেখুন:
          </h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg">
              <button
                type="button"
                className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 focus:outline-none"
                onClick={() => {}}
              >
                <span>IELTS কাগজ-ভিত্তিক পরীক্ষা</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg">
              <button
                type="button"
                className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 focus:outline-none"
                onClick={() => {}}
              >
                <span>IELTS কম্পিউটার-ভিত্তিক পরীক্ষা</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg">
              <button
                type="button"
                className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 focus:outline-none"
                onClick={() => {}}
              >
                <span>IELTS লাইফ স্কিলস</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg">
              <button
                type="button"
                className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 focus:outline-none"
                onClick={() => {}}
              >
                <span>IELTS for UKVI</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg">
              <button
                type="button"
                className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 focus:outline-none"
                onClick={() => {}}
              >
                <span>IELTS One Skill Retake</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IeltsCancellationFees;