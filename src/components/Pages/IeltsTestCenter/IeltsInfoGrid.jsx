const IeltsInfoGrid = () => {
  const nextSteps = [
    { text: 'IELTS সিট বুকিং' },
    { text: 'IELTS ফি' },
    { text: 'IELTS যোগ্যতা' },
  ];

  const importantInfo = [
    { text: 'IELTS পরীক্ষা' },
    { text: 'IELTS পরীক্ষার তারিখ' },
    { text: 'IELTS পরীক্ষার ফি' },
    { text: 'IELTS মডিউল' },
    { text: 'IELTS শোনার অনুশীলন পরীক্ষা' },
    { text: 'IELTS কথা বলার অনুশীলন পরীক্ষা' },
    { text: 'IELTS পড়ার অনুশীলন পরীক্ষা' },
    { text: 'IELTS লেখার অনুশীলন পরীক্ষা' },
    { text: 'IELTS পরীক্ষার কেন্দ্র' },
    { text: 'IELTS ফলাফল' },
    { text: 'IELTS-এর ধরন' },
    { text: 'IELTS প্যাটার্ন' },
    { text: 'IELTS পরীক্ষার যোগ্যতা' },
    { text: 'IELTS টুটি লুকিং' },
    { text: 'IELTS কার্ড চেক করা' },
    { text: 'IELTS রেজিস্ট্রেশন' },
    { text: 'IELTS বই' },
    { text: 'IELTS প্রস্তুতি' },
    { text: 'IELTS অনুশীলন পরীক্ষা' },
  ];

  const acceptingCountries = [
    { text: 'যুক্তরাষ্ট্র অনুশীলন পরীক্ষা' },
    { text: 'কানাডা অনুশীলন পরীক্ষা' },
    { text: 'যুক্তরাজ্য অনুশীলন পরীক্ষা' },
    { text: 'অস্ট্রেলিয়া অনুশীলন পরীক্ষা' },
    { text: 'আয়ারল্যান্ড অনুশীলন পরীক্ষা' },
    { text: 'জার্মান অনুশীলন পরীক্ষা' },
    { text: 'নিউজিল্যান্ড অনুশীলন পরীক্ষা' },
    { text: 'ইউরোপিয়ান ইউনিয়ন অনুশীলন পরীক্ষা' },
    { text: 'সিঙ্গাপুর অনুশীলন পরীক্ষা' },
  ];

  const acceptingUniversities = [
    { text: 'কলোম্বিয়া ইউনিভার্সিটি অফ টেকনোলজি' },
    { text: 'অ্যারিজোনা ইউনিভার্সিটি অফ টেক্সাস' },
    { text: 'হার্ভার্ড বিশ্ববিদ্যালয়' },
    { text: 'কলোম্বিয়া কলেজ' },
    { text: 'ইউনিভার্সিটি অফ কলোরাডো' },
    { text: 'জনস হপকিন্স বিশ্ববিদ্যালয়' },
    { text: 'ইউনিভার্সিটি অফ আলবার্টা' },
    { text: 'কলোম্বিয়া বিশ্ববিদ্যালয়' },
    { text: 'নিউ ইয়র্ক বিশ্ববিদ্যালয়' },
  ];

  const bangladeshTestCenters = [
    { text: 'ঢাকা IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'চট্টগ্রাম IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'রাজশাহী IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'সিলেট IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'খুলনা IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'কুমিল্লা IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'ময়মনসিংহ IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'বরিশাল IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'নারায়ণগঞ্জ IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
    { text: 'লক্ষ্মীপুর IELTS পরীক্ষার কেন্দ্র ও তারিখ' },
  ];

  const renderGridLinks = (title, items, columns = 3) => (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-4`}>
        {items.map((item, index) => (
          <a key={index} href="#" className="flex items-center justify-between p-4 bg-gray-100 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors shadow-sm">
            <span>{item.text}</span>
            <span className="text-xl font-bold">→</span>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8 font-sans">
      {renderGridLinks('পরবর্তী ধাপ', nextSteps, 3)}
      {renderGridLinks('IELTS সংক্রান্ত গুরুত্বপূর্ণ তথ্য', importantInfo, 3)}
      {renderGridLinks('IELTS গ্রহণকারী দেশসমূহ', acceptingCountries, 3)}
      {renderGridLinks('IELTS গ্রহণকারী বিশ্ববিদ্যালয়সমূহ', acceptingUniversities, 3)}
      {renderGridLinks('বাংলাদেশে IELTS পরীক্ষার কেন্দ্র ও তারিখ', bangladeshTestCenters, 3)}
    </div>
  );
};

export default IeltsInfoGrid;