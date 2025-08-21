import React from 'react';

const IeltsPayment = () => {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            ৩. বাংলাদেশে ২০২৪-২০২৫ সালের IELTS পরীক্ষার ফি প্রদানের পদ্ধতি
          </h2>
          <p className="text-gray-600 mb-4">
            ফলাফলের পুনঃমূল্যায়ন বা EOR (Enquiry on Results) অনলাইন আবেদন করুন।
          </p>
          <div className="p-4 rounded-lg bg-gray-100 border border-gray-200 text-gray-700 text-sm mb-6">
            <p>
              IELTS-র ফলাফল পুনঃমূল্যায়নের জন্য Enquiry on Results (EOR)-এর জন্য ফি প্রদান করুন।
            </p>
          </div>
        </div>

        <div className="overflow-x-auto border-t border-b border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="w-1/2 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  পরীক্ষার ধরন
                </th>
                <th
                  scope="col"
                  className="w-1/2 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  EOR ফি
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  কম্পিউটার-ভিত্তিক IELTS
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  ৳ 5,500 টাকা
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  কলম-ভিত্তিক IELTS
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  ৳ 5,500 টাকা
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  UKVI IELTS
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  ৳ 14,000 - ৳20,000 টাকা
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  IELTS Life Skills
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  ৳ 4,500 টাকা
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 md:p-6 text-gray-600">
          <p className="mb-4">
            যারা তাদের IELTS ফলাফল পুনরায় যাচাই করতে চান তাদের উদ্দেশ্য সফলতার জন্য, তবে পুনঃমূল্যায়নের জন্য আবেদন করতে পারেন। এই প্রক্রিয়া শুরু করার জন্য, IELTS পরীক্ষার ফি জমা দিতে হয়। এই টাকাটা হয় Inquiry on Results Form (EOR ফর্ম) জমা দিতে হয়। পরীক্ষার্থীরা তাদের IELTS পরীক্ষার একটি বা একাধিক অংশ পুনঃমূল্যায়নের জন্য আবেদন করতে পারেন।
          </p>

          <div className="p-4 rounded-lg bg-gray-100 border border-gray-200 text-gray-700 text-sm my-6">
            <h4 className="font-semibold text-gray-800 mb-2">নোট:</h4>
            <ul className="list-decimal list-inside space-y-1">
              <li>
                পরীক্ষার্থীর স্কোর যদি পুনঃমূল্যায়নের পরে উন্নত হয়, তাহলে সম্পূর্ণ ফি ফেরত দেওয়া হবে।
              </li>
              <li>
                ফি প্রদানের পদ্ধতি IDP ওয়েবসাইটে এবং ব্রিটিশ কাউন্সিল থেকে সম্পর্কিত এবং প্রমাণ করে।
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 p-4 md:p-6 border-t border-gray-200">
          <div className="border border-gray-200 rounded-lg">
            <button
              type="button"
              className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => setIsOpen1(!isOpen1)}
            >
              <span>অনলাইন পেমেন্ট পদ্ধতি</span>
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
                অনলাইন পেমেন্টের বিস্তারিত এখানে থাকবে।
              </div>
            )}
          </div>
          <div className="border border-gray-200 rounded-lg">
            <button
              type="button"
              className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => setIsOpen2(!isOpen2)}
            >
              <span>অফলাইন পেমেন্ট পদ্ধতি</span>
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
                অফলাইন পেমেন্টের বিস্তারিত এখানে থাকবে।
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IeltsPayment;