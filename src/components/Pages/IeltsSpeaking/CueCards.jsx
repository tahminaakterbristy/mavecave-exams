import React from 'react';

// Reusable card component for Cue Card topics
const CueCard = ({ title, answer }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
    <p className="font-semibold text-gray-800 mb-2 text-sm">{title}</p>
    <p className="text-gray-600 text-xs">
      {answer}
    </p>
  </div>
);

const CueCards = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">সেরা কিউ কার্ডগুলো উত্তরসহ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CueCard 
            title="Describe an energetic person that you know" 
            answer="Here are some sample answers..." 
          />
          <CueCard 
            title="Describe a task that is useful to society" 
            answer="Here are some sample answers..." 
          />
          <CueCard 
            title="Describe a place you would like to go to with a lot of friends." 
            answer="Here are some sample answers..." 
          />
          <CueCard 
            title="Describe a Countryside Area That you Have Seen Or Visited" 
            answer="Here are some sample answers..." 
          />
          <CueCard 
            title="Describe Something That Surprised You And Made You Happy" 
            answer="Here are some sample answers..." 
          />
          <CueCard 
            title="Describe A Time when You Organized A Happy Event Successfully" 
            answer="Here are some sample answers..." 
          />
          <CueCard 
            title="Describe A Skill That You Learnt From Other People" 
            answer="Here are some sample answers..." 
          />
          <CueCard 
            title="Describe Someone You Really Like To Spend Time With" 
            answer="Here are some sample answers..." 
          />
          <CueCard 
            title="Describe a Place In Your Hometown/City That Is Different From Other Places And That You Enjoy Visiting With Your Family" 
            answer="Here are some sample answers..." 
          />
          <CueCard 
            title="Describe A Time You Visited A New Place" 
            answer="Here are some sample answers..." 
          />
          <CueCard 
            title="Describe A Movie You Watched Recently" 
            answer="Here are some sample answers..." 
          />
          <CueCard 
            title="Describe a thing you'd to learn another language" 
            answer="Here are some sample answers..." 
          />
          <CueCard 
            title="Describe Your Favorite Food At A Traditional Festival Or A Special Event In Your Country" 
            answer="Here are some sample answers..." 
          />
          <CueCard 
            title="Describe a restaurant that you have been to before" 
            answer="Here are some sample answers..." 
          />
          <CueCard 
            title="Describe Something You Received For Free" 
            answer="Here are some sample answers..." 
          />
        </div>
      </div>
    </div>
  );
};

export default CueCards;
