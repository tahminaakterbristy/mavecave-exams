import React from 'react';

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 transform ${
            isOpen ? '-rotate-180' : 'rotate-0'
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
      {isOpen && (
        <div className="px-4 py-3 text-gray-600 bg-gray-50">{children}</div>
      )}
    </div>
  );
};

const IeltsExamDate = () => {
  return (
    <div className="max-w-xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-md font-sans">
      <div className="space-y-4">
        <CollapsibleSection title="ঢাকায় IELTS পরীক্ষা তারিখসমূহ">
          {/* Content for Dhaka exam dates */}
          <p>ঢাকার পরীক্ষা তারিখের বিস্তারিত এখানে থাকবে।</p>
        </CollapsibleSection>
        <CollapsibleSection title="চট্টগ্রাম IELTS পরীক্ষা তারিখসমূহ">
          {/* Content for Chittagong exam dates */}
          <p>চট্টগ্রামের পরীক্ষা তারিখের বিস্তারিত এখানে থাকবে।</p>
        </CollapsibleSection>
        <CollapsibleSection title="সিলেট IELTS পরীক্ষা তারিখসমূহ">
          {/* Content for Sylhet exam dates */}
          <p>সিলেটের পরীক্ষা তারিখের বিস্তারিত এখানে থাকবে।</p>
        </CollapsibleSection>
      </div>
      <div className="mt-6 text-center">
        <a
          href="#"
          className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          <span>তারিখ এবং রেজিস্ট্রেশন সম্পর্কিত আরও তথ্য</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default IeltsExamDate;