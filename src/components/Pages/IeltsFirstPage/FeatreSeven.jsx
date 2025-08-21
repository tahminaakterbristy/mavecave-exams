import React from 'react';

// Reusable list item component
const ListItem = ({ number, text }) => (
  <div className="flex mb-4">
    <div className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
      <span className="text-xs font-bold">{number}</span>
    </div>
    <p className="text-gray-700 text-sm md:text-base">{text}</p>
  </div>
);

const FeatureSeven = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">৭. IELTS পরীক্ষার তারিখ পুনঃনির্ধারণ ও বাতিল করার নিয়মাবলী</h2>
        
        <ListItem 
          number="১." 
          text="ব্রিটিশ কাউন্সিল অথবা আইডিপি (IDP)-এর অফিসিয়াল IELTS ওয়েবসাইট এবং আপনার টেস্ট পোর্টালের মাধ্যমেও ডেট পরিবর্তন ও বাতিল করার নীতি দেখুন।" 
        />
        <ListItem 
          number="২." 
          text="বাংলাদেশে, পরীক্ষার দিন সাধারণত পরিবর্তন করা হয় না অথবা বাতিল করা হয় না, তাই যথাসম্ভব এড়ান এগুলো।" 
        />
        <ListItem 
          number="৩." 
          text="যদি সম্ভব থাকে, তাহলে তারিখ পরিবর্তন ও বাতিলের জন্য দুই দিন সময় দিন, কারণ এটি তিন দিন লাগে।" 
        />
        <ListItem 
          number="৪." 
          text="আপনাদের সুবিধা থাকলে, IELTS-এর অনলাইন যোগাযোগ মাধ্যমেও বুকিং করা যায় এবং তাদের তথ্যও পাওয়া যায়।" 
        />
        <ListItem 
          number="৫." 
          text="যেখানে কোনো গুরুতর কারণ থাকে, সেখানে তারিখ পরিবর্তন ও বাতিল করার জন্য আপনার টেস্ট সেন্টারে যোগাযোগ করা এবং রিফান্ড পেতে পারেন।" 
        />
        <ListItem 
          number="৬." 
          text="নির্ধারিত দিন: তারিখ পরিবর্তন ও বাতিল করার পর নির্ধারিত ওয়েবসাইট ও যোগাযোগ মাধ্যম থেকে তথ্য পাবেন।" 
        />
        <ListItem 
          number="৭." 
          text="ভবিষ্যত সচেতন থাকার জন্য, পরিবর্তন ব্যবস্থা হচ্ছে, তাই ৫ দিন সময় লাগে পরিবর্তন করতে।" 
        />
        <ListItem 
          number="৮." 
          text="যেখানে পরিবর্তন হচ্ছে না, যদি আপনি মূল পরীক্ষার দিন উপস্থিত না থাকেন, তাহলে তারিখ পরিবর্তনের জন্য কোনো আবেদন করার প্রয়োজন নেই এবং ৫ দিন সময় লাগতে পারে।" 
        />
        <ListItem 
          number="৯." 
          text="আপনার পরীক্ষার তারিখ আপনার প্রশ্নগুলির প্রতি প্রভাবিত করার জন্য, তাই আপনার মূল্যবান পরিবর্তনগুলো দেখতে মনোযোগ করুন।" 
        />
        <ListItem 
          number="১০." 
          text="নতুন তারিখ পুনরায় বুক করা হলে, তারিখ পরিবর্তনের জন্য নতুন তারিখের নোটিশ, সময় ও অবস্থান পরিবর্তন পাবেন।" 
        />
      </div>
    </div>
  );
};

export default FeatureSeven;
