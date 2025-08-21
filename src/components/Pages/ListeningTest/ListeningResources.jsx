
import React from 'react';

// Card component for holding content
const Card = ({ children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8 font-sans">
    {children}
  </div>
);

// Individual content cards with title, description, and action button
const ContentCard = ({ number, title, subtitle, description }) => (
  <div className="bg-gray-50 rounded-lg p-4 flex flex-col justify-between shadow-sm">
    <div>
      <div className="text-xl font-bold text-gray-800 mb-2">{number}</div>
      <h4 className="text-lg font-bold text-gray-800 mb-1">{title}</h4>
      <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
    <a href="#" className="mt-4 inline-block bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
      View Sample Answers <span className="ml-2">→</span>
    </a>
  </div>
);

// Resource download item
const ResourceItem = ({ title, size }) => (
  <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:bg-gray-100 transition-colors cursor-pointer mb-2">
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 mr-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path fillRule="evenodd" d="M14 2v6h6l-6-6z" clipRule="evenodd" />
      </svg>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{size}</p>
      </div>
    </div>
    <a href="#" className="p-2 text-gray-500 hover:text-blue-500 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </a>
  </div>
);

const ListeningResources = () => {
  return (
    <div>
      {/* First Card */}
      <Card>
        <h2 className="text-xl font-bold text-gray-800 mb-4">৯. IELTS লিসনিং ফ্রি স্যাম্পল টেস্ট ২০২৩</h2>
        <p className="text-gray-700 mb-4">
          IELTS পরীক্ষার প্রস্তুতি নেওয়ার সময়, আপনি অনুশীলন পরীক্ষাগুলো করতে পারেন এবং আপনার দুর্বলতাগুলো চিহ্নিত করতে পারেন। এর ফলে আপনি আপনার প্রস্তুতিকে আরও কার্যকরভাবে পরিচালনা করতে পারবেন।
        </p>
        <p className="text-gray-700 mb-6">
          IELTS-এর সকল মডিউলের জন্য অনুশীলন পরীক্ষা পাবেন, এর ফলে আপনার IELTS পরীক্ষার স্কোর অনেক বেশি হবে।
        </p>
        
        <h3 className="text-lg font-bold text-gray-800 mb-4">Full up these</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContentCard
            number="1"
            title="Holiday Rentals Listening Answers"
            subtitle="IELTS Listening Answer"
            description="IELTS পরীক্ষার সময় আপনি আপনার পরীক্ষার তারিখ এবং স্থান পরিবর্তন করতে পারেন।"
          />
          <ContentCard
            number="2"
            title="Job Enquiry Listening Answer"
            subtitle="IELTS Listening Answer"
            description="IELTS পরীক্ষার সময় আপনি আপনার পরীক্ষার তারিখ এবং স্থান পরিবর্তন করতে পারেন।"
          />
        </div>
      </Card>

      {/* Second Card */}
      <Card>
        <h2 className="text-xl font-bold text-gray-800 mb-4">৯. IELTS লিসনিং অনুশীলন পরীক্ষা: উপকরণ ও পরামর্শ</h2>
        <p className="text-gray-700 mb-4">
          IELTS পরীক্ষার প্রস্তুতি নেওয়ার সময়, আপনি অনুশীলন পরীক্ষাগুলো করতে পারেন এবং আপনার দুর্বলতাগুলো চিহ্নিত করতে পারেন। এর ফলে আপনি আপনার প্রস্তুতিকে আরও কার্যকরভাবে পরিচালনা করতে পারবেন।
        </p>
        <p className="text-gray-700 mb-4">
          আমাদের থেকে পাওয়া গাইডলাইন অনুযায়ী, আপনি নিজের পরীক্ষাটি আরো ভালোভাবে সম্পন্ন করতে পারেন।
        </p>
        <p className="text-gray-700 mb-6">
          নিচের তথ্যগুলো ভালোভাবে পড়ে নিন:
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Practice with Listening Test</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>যদি আপনি প্রথমবার অনুশীলন পরীক্ষা দেন, তাহলে আপনার মনোযোগ বাড়ান।</li>
            <li>যদি আপনি দ্বিতীয়বার অনুশীলন পরীক্ষা দেন, তাহলে আপনার সময় নির্ধারণ করুন।</li>
            <li>আপনার উত্তরটি চিহ্নিত করুন।</li>
            <li>IELTS-এর অফিশিয়াল ওয়েবসাইট থেকে আপনার প্রবেশপত্র ডাউনলোড করুন।</li>
          </ul>
        </div>
        
        <p className="text-gray-700 mb-4">
          IELTS পরীক্ষার প্রস্তুতি নেওয়ার সময়, আপনি অনুশীলন পরীক্ষাগুলো করতে পারেন।
        </p>
        
        <div className="space-y-4">
          <ResourceItem title="IELTS LISTENING SAMPLE 1" size="5MB" />
          <ResourceItem title="IELTS LISTENING SAMPLE 2" size="5MB" />
          <ResourceItem title="IELTS LISTENING SAMPLE 3" size="5MB" />
          <ResourceItem title="IELTS LISTENING SAMPLE 4" size="5MB" />
          <ResourceItem title="IELTS LISTENING SAMPLE 5" size="5MB" />
        </div>
      </Card>
    </div>
  );
};

export default ListeningResources;
