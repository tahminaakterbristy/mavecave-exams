

const FeatureFive = () => {
  const onlineSteps = [
    'IELTS IDP Bangladesh-এর ওয়েবসাইটে অনলাইনে একটি নতুন তারিখ নির্বাচন করুন।',
    'আপনার ইমেল আইডিতে একটি নতুন তারিখের জন্য লিংক পাবেন, সেটি ব্যবহার করে নতুন তারিখ নির্বাচন করুন।',
    'আপনার ইন্টারনেট ব্রাউজার থেকে আপনার পছন্দের তারিখ নির্বাচন করুন।',
    'যেকোনো নতুন তারিখ আপনার কাছে গ্রহণযোগ্য হতে পারে।',
    'আপনার পছন্দের নতুন তারিখ নির্বাচন করুন।',
    'IELTS-এর অফিশিয়াল ওয়েবসাইট থেকে আপনার প্রবেশপত্র ডাউনলোড করুন (যদি আপনার প্রয়োজন হয়)।',
    'IELTS IDP Bangladesh-এর অফিশিয়াল ওয়েবসাইট থেকে আপনার প্রবেশপত্র ডাউনলোড করুন।',
    'IELTS IDP Bangladesh-এর অফিশিয়াল ওয়েবসাইট থেকে আপনার প্রবেশপত্র ডাউনলোড করুন।',
    'IELTS IDP Bangladesh-এর অফিশিয়াল ওয়েবসাইট থেকে আপনার প্রবেশপত্র ডাউনলোড করুন।',
  ];

  const offlineSteps = [
    'IELTS IDP Bangladesh-এর অফিসিয়াল ওয়েবসাইটে চেক করে আপনার তারিখ পরিবর্তন ও কনফার্মেশন গ্রহণ করুন।',
    'IELTS IDP Bangladesh-এর অফিসিয়াল ওয়েবসাইট থেকে আপনার তারিখ পরিবর্তন ও কনফার্মেশন গ্রহণ করুন।',
    'অতিরিক্ত কোনো কাজ করবেন না বা অন্য কোনো জায়গার পরীক্ষার প্রশ্নটি দেখবেন না।',
    'আপনার ব্যক্তিগত জিনিসপত্র, যেমন-টোকেন, ইলেকট্রনিক্স ডিভাইস, রুটিন টিপস ও মোবাইল ফোন ব্যবহার সীমিত এই বিষয়গুলো হলো একজন ব্যক্তিগত IELTS পরীক্ষার জন্য প্রয়োজন।',
  ];

  const offlineRegistrationSteps = [
    'IELTS অফিস বা অনুমোদিত এজেন্সিতে সরাসরি গিয়ে আপনি এই ফর্মটি জমা দিতে পারেন।',
    'যদি আপনি অফলাইনে আবেদন করতে চান, তাহলে আপনাকে আপনার নিকটস্থ সেন্টারে গিয়ে একটি ফর্ম জমা দিতে হবে।',
    'IELTS পরীক্ষার জন্য আপনার রেজিস্ট্রেশন এবং ফি জমা দিতে হবে।',
  ];

  const extraordinaryCircumstances = [
    'গুরুতর অসুস্থতা: হঠাৎ করে গুরুতর অসুস্থ হয়ে পড়া বা গুরুতর শারীরিক অসুস্থতা যা আপনাকে পরীক্ষার দিন পরীক্ষা দিতে বাধা দেয়।',
    'পারিবারিক দুঃখ: একজন নিকট আত্মীয়ের মৃত্যু।',
    'গুরুত্বপূর্ণ ইভেন্ট: একটি সামরিক কর্মসূচিতে গুরুত্বপূর্ণ ভূমিকা পালন করা।',
    'ভ্রমণ নিষেধাজ্ঞা: একটি ভ্রমণের নিষেধাজ্ঞা যা আপনাকে আপনার পরীক্ষা কেন্দ্রে পৌঁছাতে বাধা দেয়।',
    'আইনি সমস্যা: একটি আইনি সমস্যা যা আপনাকে আপনার পরীক্ষা কেন্দ্রে পৌঁছাতে বাধা দেয়।',
    'IELTS পরীক্ষা সংক্রান্ত তথ্য: আপনার পরীক্ষার স্থান পরিবর্তন অথবা পরীক্ষার স্থান পরিবর্তন করুন।',
  ];

  const refundPolicy = [
    {
      condition: 'আপনি যদি পরীক্ষার তারিখ থেকে ৫ সপ্তাহের বেশি আগে পরীক্ষা বাতিল করেন, তাহলে পুরো ফি ফেরত পাবেন।',
      note: '',
    },
    {
      condition: 'আপনি যদি পরীক্ষার তারিখ থেকে ৫ সপ্তাহের মধ্যে পরীক্ষা বাতিল করেন, তাহলে আপনার ফি-এর ২৫% কাটা হবে।',
      note: '',
    },
    {
      condition: 'যদি আপনি পরীক্ষার তারিখ থেকে ৫ দিনের মধ্যে পরীক্ষা বাতিল করতে চান, তাহলে কোন ফি ফেরত পাবেন না।',
      note: 'আপনার যদি কোনো মেডিকেল সার্টিফিকেট থাকে তাহলে আপনি অন্য তারিখে পরীক্ষা দিতে পারেন।',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8 font-sans">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">৫. কিভাবে আপনার IELTS টেস্ট তারিখ পরিবর্তন করবেন?</h2>
      <p className="text-gray-700 mb-4">
        IELTS পরীক্ষার সময় আপনি আপনার পরীক্ষার তারিখ এবং স্থান পরিবর্তন করতে পারেন। আপনি IDP অথবা কম্পিউটারভিত্তিক পরীক্ষার মাধ্যমে এটি করতে পারেন।
      </p>
      <p className="text-gray-700 mb-4">
        আপনি আপনার পরীক্ষার তারিখ পরিবর্তন করতে চাইলে আপনাকে অনলাইনে আবেদন করতে হবে।
      </p>
      <p className="text-gray-700 mb-4">
        আপনার পরীক্ষার তারিখ পরিবর্তনের সময় আপনাকে একটি নতুন তারিখ নির্বাচন করতে হবে।
      </p>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">IELTS প্লট পরিবর্তন: অনলাইন গাইড</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {onlineSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">IELTS প্লট পরিবর্তন: অফলাইন গাইড</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {offlineSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <h4 className="font-bold text-gray-800 mt-4 mb-2">আপনি কি অতিরিক্ত তথ্য এবং ডকুমেন্টেশন পেতে চান?</h4>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {offlineRegistrationSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">অসাধারণ পরিস্থিতিতে অনুরোধ</h3>
        <p className="text-gray-700 mb-2">
          আপনার পরীক্ষার তারিখ থেকে ১০ দিনের মধ্যে একটি ইমেল দিয়ে আবেদন করে আপনার পরীক্ষার তারিখ পরিবর্তন করতে পারেন, অথবা এমন কিছু থাকলে যা আপনাকে পরীক্ষার দিন পরীক্ষা দিতে বাধা দেয়, তখন অসাধারণ পরিস্থিতিতে অনুরোধ (Extraordinary Circumstances) করতে পারেন।
        </p>
        <h4 className="font-bold text-gray-800 mt-4 mb-2">অসাধারণ পরিস্থিতিতে:</h4>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {extraordinaryCircumstances.map((circumstance, index) => (
            <li key={index}>{circumstance}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">IELTS ফেরত নীতি</h2>
        <h3 className="text-xl font-bold text-gray-800 mb-2">আপনার IELTS পরীক্ষার রেজিস্ট্রেশন থেকে ফি ফেরত পাওয়ার নীতি নির্ধারণ:</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-4">
          {refundPolicy.map((item, index) => (
            <li key={index}>
              <span className="font-bold">{item.condition}</span>
              {item.note && <p className="mt-1 text-sm text-gray-500">{item.note}</p>}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 mt-6">
          উপরে দেওয়া তথ্য ও সুবিধা সম্পর্কে জানতে আপনার নিকটস্থ টেস্ট সেন্টারে যোগাযোগ করুন।
        </p>
      </div>

    </div>
  );
};;

export default FeatureFive;