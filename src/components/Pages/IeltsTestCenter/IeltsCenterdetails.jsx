// src/components/IELTSCenterDetails.jsx
import React from 'react';

const IeltsCenterDetails = () => {
  const dhakaCenters = [
    {
      address: 'House # 5, Road # 2, Gulshan 1, Dhaka - 1212, Bangladesh',
      contacts: ['+৮৮০৯৬৬৬৭৭৮৬৬৬', '+৮৮০৯৬৬৬৭৭৮৬৬৭'],
    },
    {
      address: 'Level-2, Team Computer Centre, 68/D Pragati Sarani, 100 Feet Road, Dhaka 1212, Bangladesh',
      contacts: ['+৮৮০১৯৫৪০১৩৭৭৬', '+৮৮০১৭৮২৩০৬১৫২'],
    },
    {
      address: 'বাড়ি নং-৪৮, ফ্ল্যাট নং-২বি/১, রোড নং-১৬, উত্তরা, ঢাকা।',
      contacts: ['+৮৮০১৮১৬৫০১২৬৬'],
    },
  ];

  const renderContactNumbers = (contacts) => (
    <div className="flex flex-col">
      {contacts.map((contact, index) => (
        <span key={index}>{contact}</span>
      ))}
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8 font-sans">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">২. প্রধান শহরগুলিতে IELTS টেস্ট সেন্টারসমূহ</h2>
      <p className="text-gray-700 mb-4">
        IELTS পরীক্ষার সব টেস্ট সেন্টার দেশের প্রধান শহরগুলোতে অবস্থিত। যদি আপনার কোনো জিজ্ঞাসা থাকে, তাহলে আপনি
        আপনার নিকটতম সেন্টার দেখাযোগাযোগ করতে পারেন।
      </p>
      <p className="text-gray-700 mb-4">
        IELTS পরীক্ষার সেন্টারগুলো রবিবার থেকে বৃহস্পতিবার সকাল ১০:০০ থেকে বিকাল ৪:০০ পর্যন্ত খোলা থাকে।
        আপনার কোনো জিজ্ঞাসা থাকলে, আপনি ইমেইলও পাঠাতে পারেন: <a href="mailto:info@idp.com" className="text-blue-600 hover:underline">info@idp.com</a>
      </p>
      <p className="text-gray-700 mb-4">
        বাংলাদেশে প্রধান প্রধান IELTS পরীক্ষার সেন্টারগুলোর বিস্তারিত ঠিকানা ও যোগাযোগের বিস্তারিত নিচে দেওয়া হলো,
        আপনার সুবিধার জন্য।
      </p>

      {/* Dhaka Center Card */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">IDP IELTS ঢাকা সেন্টার</h3>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">ঠিকানা</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">যোগাযোগের নম্বর</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dhakaCenters.map((center, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm text-gray-700">{center.address}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{renderContactNumbers(center.contacts)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IeltsCenterDetails;