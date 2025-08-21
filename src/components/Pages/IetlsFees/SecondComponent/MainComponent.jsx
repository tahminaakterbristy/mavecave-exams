// MainComponent.js
import React from 'react';
import Card from './SecondCmponent';

const MainComponent = () => {
  const cardsData = [
    {
      title: '১. বাংলাদেশে IELTS পরীক্ষার ফি ২০২৪-২০২৫',
      description: 'বাংলাদেশে IELTS পরীক্ষা দিতে খরচ কত হয়।',
      imageSrc: 'url-to-image-1.jpg',
      pageInfo: '১/৩',
    },
    {
      title: '২. বাংলাদেশে শহর অনুযায়ী IELTS পরীক্ষার ফি ২০২৪-২০২৫ এর তালিকা',
      description: 'বাংলাদেশের প্রধান প্রধান শহরে IELTS পরীক্ষা দিতে খরচ কত হয়।',
      imageSrc: 'url-to-image-2.jpg',
      pageInfo: '২/৩',
    },
    {
      title: '৩. বাংলাদেশে ১০টি IELTS পরীক্ষার কেন্দ্র',
      description: 'বাংলাদেশে IELTS পরীক্ষা দিতে পারার জন্য ১০টি পরীক্ষার কেন্দ্র আছে।',
      imageSrc: 'url-to-image-3.jpg',
      pageInfo: '৩/৩',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">এই পৃষ্ঠায় →</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            pageInfo={card.pageInfo}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-full p-2 mr-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-full p-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainComponent;