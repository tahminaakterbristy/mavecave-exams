import React from 'react';

const FeatureTwo = () => {
  const tableData = [
    { label: 'পরীক্ষার ধরন', value: 'IELTS Academic' },
    { label: 'পরীক্ষার সময়কাল', value: '২ ঘণ্টা ৪০ মিনিট' },
    { label: 'পরীক্ষার ধরন', value: 'একাডেমিক ও জেনারেল ট্রেনিং' },
    { label: 'সময়কাল', value: '২ ঘন্টা ৩০ মিনিট' },
    { label: 'ব্যান্ড স্কোর', value: '১-৯' },
    { label: 'পরীক্ষা ফি', value: 'অনলাইন বুকিং ফি: BDT ২০,৫০০' },
    { label: 'পরীক্ষার উদ্দেশ্য', value: 'অফিশিয়াল একাডেমিক এবং নন-অফিশিয়াল একাডেমিক ফি' },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">IELTS একাডেমিক পরীক্ষার তথ্য</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          IELTS একাডেমিক ফি এবং পরীক্ষার সময়কাল সম্পর্কে বিস্তারিত তথ্য এখানে দেখুন। IELTS-এর প্রতিটি ফি আলাদা হয়ে থাকে যা আপনাকে পরীক্ষার সময়সীমা এবং তার ধরন সম্পর্কে তথ্য প্রদান করে।
        </p>
        
        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="py-3 px-4">বিষয়</th>
                <th className="py-3 px-4">তথ্য</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border-b border-gray-200 last:border-b-0">
                  <td className="py-3 px-4 text-gray-800 font-medium text-sm">{row.label}</td>
                  <td className="py-3 px-4 text-gray-700 text-sm">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeatureTwo;
