import React from 'react';

const IeltsAtrFee = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            ৭. ২০২৩ সালের জন্য ATRF-এর IELTS পরীক্ষা ফি
          </h2>
          <p className="text-gray-600 mb-4">
            ATRF-এর পূর্ণরূপ হলো Additional Test Report Form। ATRF হলো আপনার IELTS স্কোর বিশ্ববিদ্যালয়, অফিসিয়াল, কর্পোরেট, অথবা সরকারী প্রতিষ্ঠানে অফিসিয়ালভাবে পাঠাতে সহায়ক একটি মাধ্যম। আপনি বিনামূল্যে পাঁচটি অতিরিক্ত পরীক্ষার প্রতিবেদন পেতে পারেন এবং পরবর্তীতে ফি দিয়ে আরও অতিরিক্ত প্রতিবেদনও পেতে পারেন।
          </p>
          <p className="text-gray-600 mb-4">
            প্রথম পাঁচ একাডেমিক ATRF বিনামূল্যে সরবরাহ করা হয় এবং প্রতিটি অতিরিক্ত একাডেমিক ATRF-এর জন্য প্রতি বিশ্ববিদ্যালয় বা প্রতিষ্ঠানের জন্য BDT ১৯০ চার্জ করা হয়।
          </p>
        </div>

        <div className="p-4 md:p-6 border-t border-gray-200">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="w-1/2 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ATRF ফি প্রযোজ্যতা
                  </th>
                  <th
                    scope="col"
                    className="w-1/2 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ফি
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                    প্রথম ৫টি ATRF
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                    কোনো খরচ নেই
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                    এর পরের ATRF
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                    প্রতি বিশ্ববিদ্যালয়ে BDT ১৯০ ফি
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 md:p-6 border-t border-gray-200">
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-sm">
            <h4 className="font-semibold text-blue-800 mb-2">নোট:</h4>
            <p>
              আপনি যদি একসাথে দুটি বিশ্ববিদ্যালয় যোগ করেন, তবে আপনার স্কোরটি আপনার পছন্দ অনুযায়ী কোনো একটি বিশ্ববিদ্যালয় আপনার স্কোর নাও পেতে পারে। আরও বিশ্ববিদ্যালয় যুক্ত করতে হলে আপনাকে অতিরিক্ত ফি দিতে হবে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IeltsAtrFee;