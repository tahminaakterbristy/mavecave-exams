import React from 'react';

const IeltsInfoCard = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* IELTS Accepting Countries Section */}
        <div className="p-4 md:p-6 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            IELTS গ্রহণকারী দেশসমূহ
          </h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>যুক্তরাষ্ট্রের বিশ্ববিদ্যালয়</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>কানাডার বিশ্ববিদ্যালয়</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>যুক্তরাজ্যের বিশ্ববিদ্যালয়</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                </tr>
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>আইরিশ বিশ্ববিদ্যালয়</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>অস্ট্রেলিয়ার বিশ্ববিদ্যালয়</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>জার্মানিতে বিশ্ববিদ্যালয়</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                </tr>
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>নিউজিল্যান্ডে বিশ্ববিদ্যালয়</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>ইতালিতে বিশ্ববিদ্যালয়</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>ফ্রান্সের বিশ্ববিদ্যালয়</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IELTS Accepting Universities Section */}
        <div className="p-4 md:p-6 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            IELTS গ্রহণকারী বিশ্ববিদ্যালয়সমূহ
          </h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>ম্যাসাচুসেটস ইনস্টিটিউট অব টেকনোলজি</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>দা ইউনিভার্সিটি অফ ব্রিটিশ কলম্বিয়া</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>হার্ভার্ড বিশ্ববিদ্যালয়</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                </tr>
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>ইউনিভার্সিটি অফ টরন্টো</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>কলাম্বিয়া কলেজ</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>ইউনিভার্সিটি অফ নিউ সাউথ ওয়েলস</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                </tr>
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>স্ট্যানফোর্ড বিশ্ববিদ্যালয়</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>ইউনিভার্সিটি অফ অক্সফোর্ড</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>কেমব্রিজ বিশ্ববিদ্যালয়</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                </tr>
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>নিউ ইয়র্ক বিশ্ববিদ্যালয়</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IELTS Bangladesh Centers Section */}
        <div className="p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            বাংলাদেশে IELTS পরীক্ষার কেন্দ্র ও তারিখ
          </h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>ঢাকা IELTS পরীক্ষার কেন্দ্র ও তারিখ</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>চট্টগ্রাম IELTS পরীক্ষার কেন্দ্র ও তারিখ</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>রাজশাহী IELTS পরীক্ষার কেন্দ্র ও তারিখ</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                </tr>
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>সিলেট IELTS পরীক্ষার কেন্দ্র ও তারিখ</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>খুলনা IELTS পরীক্ষার কেন্দ্র ও তারিখ</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>কুমিল্লা IELTS পরীক্ষার কেন্দ্র ও তারিখ</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                </tr>
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>ময়মনসিংহ IELTS পরীক্ষার কেন্দ্র ও তারিখ</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>বরিশাল IELTS পরীক্ষার কেন্দ্র ও তারিখ</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>শরীয়তপুর IELTS পরীক্ষার কেন্দ্র ও তারিখ</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                </tr>
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>কক্সবাজার IELTS পরীক্ষার কেন্দ্র ও তারিখ</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IeltsInfoCard;