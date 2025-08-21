import React from 'react';

const IeltsRevaluationFee = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            ৬. IELTS পুনঃমূল্যায়ন ফি ২০২৩
          </h2>
          <div className="p-4 rounded-lg bg-gray-100 border border-gray-200 text-gray-700 text-sm mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              অনলাইন পুনঃমূল্যায়ন বা ফলাফলের উপর অনুসন্ধান (EOR) আবেদন করুন:
            </h3>
            <p>
              IELTS অ্যাকাউন্টে লগইন করুন এবং আপনার ফলাফলের পুনঃমূল্যায়নের জন্য EOR ফর্ম জমা দিন এবং প্রয়োজনীয় ফি পরিশোধ করুন।
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
                  পরীক্ষার নাম
                </th>
                <th
                  scope="col"
                  className="w-1/2 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  পুনঃমূল্যায়ন ফি
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  কম্পিউটার-ভিত্তিক IELTS
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  BDT 5,500
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  কাগজ-ভিত্তিক IELTS
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  BDT 5,500
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  UKVI IELTS
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  BDT 5,500
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  IELTS Life Skills
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">
                  BDT 54,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 md:p-6">
          <p className="text-gray-600 mb-4">
            যারা তাদের IELTS ফলাফল পুনরায় মূল্যায়ন করতে চান তাদের উদ্দেশ্য সফলতার জন্য, তবে তারা পুনরায় মূল্যায়নের জন্য আবেদন করতে পারেন। এই প্রক্রিয়া শুরু করতে হলে আপনাকে IELTS পুনর্মূল্যায়নের ফি প্রদান করতে হবে এবং একটি ‘Enquiry on Results Form (EOR ফর্ম)’ জমা দিতে হবে। পুনঃমূল্যায়নের জন্য আবেদন শুধুমাত্র আপনার TRF-তে উল্লেখিত IELTS পরীক্ষার তারিখ থেকে ৫ সপ্তাহের মধ্যে করা যাবে।
          </p>
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-sm">
            <h4 className="font-semibold text-blue-800 mb-2">নোট:</h4>
            <ul className="list-decimal list-inside space-y-1">
              <li>
                যদি পরীক্ষার্থীর স্কোর পুনঃমূল্যায়নের পর উন্নত হয়, তাহলে সম্পূর্ণ টাকা ফেরত দেওয়া হবে।
              </li>
              <li>
                উক্ত পুনঃমূল্যায়ন ফি IDP IELTS ওয়েবসাইট থেকে সংগৃহীত এবং সকল প্রযোজ্য কর অন্তর্ভুক্ত রয়েছে।
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IeltsRevaluationFee;