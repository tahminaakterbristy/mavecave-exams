import React from 'react';

// Instruction Card Component
const InstructionCard = ({ title, instructions, content }) => (
  <div className="bg-blue-50 p-4 rounded-lg mb-4">
    <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
    <p className="text-sm text-gray-700">{instructions}</p>
    {content && (
      <ul className="list-disc pl-6 text-sm text-gray-700 mt-2 space-y-1">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

// Answer Section Component
const AnswerSection = ({ title, content }) => (
  <div className="mb-6">
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-2">
      {content.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const FeatureThree = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8 font-sans">
      <h2 className="text-xl font-bold text-gray-800 mb-4">৩. IELTS স্পিকিং প্র্যাকটিস টেস্ট নমুনা উত্তরসহ: পার্ট ২ (লং টার্ন / কিউ কার্ড)</h2>
      <p className="text-gray-700 mb-4">
        IELTS স্পিকিং প্র্যাকটিস টেস্টে আপনি যত বেশি অনুশীলন করবেন, আপনার দক্ষতা তত বৃদ্ধি পাবে। আপনি এই পরীক্ষাগুলোতে ভালো ফল করতে পারেন।
      </p>

      {/* Examiner Card */}
      <InstructionCard
        title="Examiner:"
        instructions="You will now move on to Part 2. I'm going to give you a cue card and you'll have one minute to prepare and to take some notes. Then, you will need to speak for 1-2 minutes. Here is your cue card."
      />

      {/* Cue Card Topic */}
      <div className="bg-white p-4 rounded-lg border-2 border-gray-300 mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">Cue Card Topic: Describe a Memorable Event in Your Life</h4>
        <p className="text-sm text-gray-700 mb-2">You should say:</p>
        <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
          <li>when did the event take place?</li>
          <li>who did you share the event with?</li>
          <li>what did you experience?</li>
          <li>and explain why the event was so memorable to you.</li>
        </ul>
        <p className="text-sm text-gray-700 mt-2">You should say, "Okay" if you are ready to move on.</p>
      </div>

      {/* Prepare Card */}
      <InstructionCard
        title=""
        instructions="You can take one minute to prepare notes."
      />

      {/* Sample Answer Section */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">Sample Answer</h3>

      {/* Introduction */}
      <AnswerSection
        title="Introduction (Covers: when did the event take place? When did the event take place?)"
        content={[
          "A truly memorable event in my life was my sister's wedding, which took place last year in Delhi. This grand celebration was filled with love and joy.",
          "This was not just a wedding, it was a family reunion, bringing together relatives from all over India, making it a significant occasion for us all.",
          "The wedding festivities lasted several days, creating an atmosphere of excitement and anticipation that all of us got to share and enjoy.",
        ]}
      />

      {/* Experience */}
      <AnswerSection
        title="Describing Your Experience/Opinion/Interest (Covers: what exactly happened?)"
        content={[
          "The wedding preparations were extensive, and I played an active role in helping with the decorations and arrangements, which was both fun and challenging.",
          "The ceremony itself was beautiful, with vibrant decorations, traditional rituals, and music that created an enchanting atmosphere for everyone present.",
          "Throughout the celebration, we enjoyed delicious food, danced to lively music, and shared countless laughs and experiences, especially with our family members.",
        ]}
      />

      {/* Key Highlights */}
      <AnswerSection
        title="Key Highlights (Covers: Explain why this event was so memorable to you?)"
        content={[
          "This event was memorable because it marked a new chapter in my sister's life, and being a part of that was a truly heartwarming experience.",
          "The moments we spent with family, sharing stories and laughter during the wedding, strengthened our bonds and created lasting memories.",
          "The joy on my sister's face during the ceremony and the celebration reminded me of the importance of love and family in our lives.",
        ]}
      />

      {/* Conclusion */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Conclusion</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>My sister's wedding stands out as a beautiful example of the power of family and togetherness during a significant life event.</li>
          <li>It highlights the value of tradition and the happiness that comes from celebrating important moments with loved ones.</li>
          <li>I will always cherish this event as a symbol of love, joy, and the stronger bond of family we now have.</li>
        </ul>
      </div>

      {/* Next Card */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Examiner:</h4>
        <p className="text-sm text-gray-700">Thank you. Now let's move on to Part 3.</p>
      </div>
    </div>
  );
};

export default FeatureThree;
