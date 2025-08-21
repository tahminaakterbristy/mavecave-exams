import React from 'react';

// Question and Answer Card Component
const QACard = ({ question, answer1, answer2, answer3 }) => (
  <div className="mb-8">
    <div className="bg-blue-50 p-4 rounded-lg shadow-sm mb-4">
      <h4 className="font-semibold text-gray-800 mb-2">Examiner:</h4>
      <p className="text-sm text-gray-700">{question}</p>
    </div>
    {answer1 && (
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <p className="font-semibold text-gray-800">Answer 1: </p>
        <p className="text-sm text-gray-700">{answer1}</p>
      </div>
    )}
    {answer2 && (
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <p className="font-semibold text-gray-800">Answer 2: </p>
        <p className="text-sm text-gray-700">{answer2}</p>
      </div>
    )}
    {answer3 && (
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <p className="font-semibold text-gray-800">Answer 3: </p>
        <p className="text-sm text-gray-700">{answer3}</p>
      </div>
    )}
  </div>
);

const FeatureFour = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">৪. IELTS কথাসম্পাদন ফি ২০২৩</h2>
        <p className="text-gray-700 mb-4">
          IELTS পরীক্ষার প্রস্তুতি নেওয়ার সময়, আপনি অনুশীলন পরীক্ষাগুলো করতে পারেন এবং আপনার দুর্বলতাগুলো চিহ্নিত করতে পারেন।
        </p>
        <p className="text-gray-700 mb-6">
          IELTS পরীক্ষা যে কোনো ধরনের হোক, আপনাকে অবশ্যই একজন ভালো ইংরেজী ভাষাভাষীর মতো কথা বলা, বোঝা, এবং বাক্য গঠনে দক্ষ হতে হবে। IELTS স্পিকিং পরীক্ষায় আপনি কত নম্বর পাবেন, তা আপনার দক্ষতা এবং উচ্চারণের উপর নির্ভরশীল।
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="font-semibold text-gray-800">বি.দ্র.:</p>
          <p className="text-sm text-gray-700">IELTS স্পিকিং পরীক্ষার প্রধান প্রধান ধাপগুলো হলো: ইন্ট্রোডাকশন, কিউ কার্ড এবং ডিসকাশন।</p>
        </div>
      </div>
      
      {/* Follow-up Questions Section */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">ফলো-আপ প্রশ্ন ১</h2>
      <QACard
        question="In this part, we'll discuss more abstract and complex issues related to the topic. So, let's continue talking about education. What events usually become memorable in our life?"
        answer1="I'd say “memorable events” often include significant milestones like weddings, graduations, and family reunions. These occasions are significant landmarks in our lives, bringing together loved ones and creating lasting memories. They are not just personal achievements; they often symbolize important transitions and a sense of shared community. I remember my sister’s wedding last year, it was so beautiful and heartwarming. These events teach us about our culture, our values, and the importance of our relationships. They are also great opportunities to connect with friends and family, and to create new memories that will last a lifetime."
        answer2="These events are also memorable because they remind us of the people in our lives who have supported us along the way. Whether it’s family, friends, or mentors, these people are an important part of our journey and our success. I believe that being able to celebrate with them is one of the greatest joys in life."
      />

      <h2 className="text-xl font-bold text-gray-800 mb-4">ফলো-আপ প্রশ্ন ২</h2>
      <QACard
        question="Discussing about education, what are the importance of family relationships for one of us?"
        answer1="Family celebrations play a vital role in strengthening relationships and creating a sense of belonging. They provide opportunities to connect with relatives we may not see often, fostering deeper bonds in new ways. I always look forward to family gatherings like Brazil because they remind me of our shared traditions and values, and allow us to create new memories. These events are also great opportunities to learn about our family history and to connect with our roots."
        answer2="Family relationships are important because they provide a support system that we can rely on. Family members can offer guidance, emotional support, and a sense of belonging that is essential for our well-being. They can also help us to navigate life’s challenges and to celebrate our successes. I believe that having a strong family is one of the greatest blessings in life."
      />

      <h2 className="text-xl font-bold text-gray-800 mb-4">ফলো-আপ প্রশ্ন ৩</h2>
      <QACard
        question="What do you think is important to remember all the things?"
        answer1="I think it’s not realistic to remember everything, but it is important to remember the most important things. It is also important to have a good memory. A good memory can help you to learn new things, to remember old things, and to make new connections. It is also important to remember to be grateful for the people in your life who have supported you along the way."
        answer2="It is also important to remember to be kind to yourself. You are not perfect, and you will make mistakes. It is important to learn from your mistakes and to move on. You should not let your mistakes define you. It is also important to remember to be kind to others. You never know what someone else is going through. A little bit of kindness can go a long way."
      />

      <h2 className="text-xl font-bold text-gray-800 mb-4">ফলো-আপ প্রশ্ন ৪</h2>
      <QACard
        question="How can a good memory help people to do their work?"
        answer1="A good memory can help you to do your work by helping you to remember important information, such as names, dates, and facts. It can also help you to remember instructions, which can be helpful if you are working on a complex project. It can also help you to remember what you have learned in the past, which can be helpful if you are trying to learn something new. It can also help you to remember to be organized, which can be helpful if you are working on a project that has a lot of steps."
        answer2="A good memory can also help you to be more creative. When you have a good memory, you can easily access information and ideas that you have learned in the past. This can help you to come up with new and creative ideas. It can also help you to be more productive. When you have a good memory, you can easily recall the information you need to do your work. This can help you to get your work done more quickly and efficiently."
      />
      
      {/* Conclusion Card */}
      <div className="bg-blue-50 p-4 rounded-lg shadow-sm mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">Examiner:</h4>
        <p className="text-sm text-gray-700">Thank you for sharing your thoughts. That concludes our speaking test. You'll receive your results in the mail in about two weeks. Goodbye!</p>
      </div>
      
      <p className="text-gray-700 text-center mt-6">
        You should say, “Thank you. Goodbye!"
      </p>
    </div>
  );
};

export default FeatureFour;
