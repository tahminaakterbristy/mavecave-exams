import React from 'react';

const IeltsResources = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Top Section: Next Steps */}
        <div className="p-4 md:p-6 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            পরবর্তী ধাপ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="#"
              className="p-4 border border-gray-200 rounded-lg flex flex-col justify-between items-start hover:bg-gray-50 transition-colors"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">IELTS ফলাফল</h3>
                <p className="text-blue-600 font-medium">
                  এখনই পড়ুন{' '}
                  <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </a>
            <a
              href="#"
              className="p-4 border border-gray-200 rounded-lg flex flex-col justify-between items-start hover:bg-gray-50 transition-colors"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">IELTS রেজিস্ট্রেশন</h3>
                <p className="text-blue-600 font-medium">
                  এখনই পড়ুন{' '}
                  <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </a>
            <a
              href="#"
              className="p-4 border border-gray-200 rounded-lg flex flex-col justify-between items-start hover:bg-gray-50 transition-colors"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">IELTS স্লট বুকিং</h3>
                <p className="text-blue-600 font-medium">
                  এখনই পড়ুন{' '}
                  <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Section: Important Information Table */}
        <div className="p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            IELTS সংক্রান্ত গুরুত্বপূর্ণ তথ্য
          </h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS পরীক্ষা</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS পরীক্ষার তারিখ</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS পরীক্ষার ফি</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                </tr>
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS প্রস্তুতি</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS লেখার অনুশীলন পরীক্ষা</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS কথা বলার অনুশীলন পরীক্ষা</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                </tr>
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS পড়ার অনুশীলন পরীক্ষা</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS শ্রবণের অনুশীলন পরীক্ষা</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS পরীক্ষার কেন্দ্র</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                </tr>
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS ফলাফল</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS-এর স্কোর</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS প্যাটার্ন</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                </tr>
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS পরীক্ষার ব্যাপারে</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS বুকিং</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS ব্যান্ড স্কোর</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                </tr>
                <tr className="flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-gray-200">
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS রেজিস্ট্রেশন</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS ফি</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </td>
                  <td className="w-full sm:w-1/3 p-4">
                    <a href="#" className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors">
                      <span>IELTS প্রস্তুতি</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
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

export default IeltsResources;