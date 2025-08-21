

const IeltsListeningExercise = () => {
 return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8 font-sans">
      
      {/* First Card */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">৫. IELTS লিসনিং অনুশীলন পরীক্ষা</h2>
        </div>
        <p className="text-gray-700 mb-4">
          IELTS পরীক্ষার প্রস্তুতি নেওয়ার সময়, আপনি অনুশীলন পরীক্ষাগুলো করতে পারেন এবং আপনার দুর্বলতাগুলো চিহ্নিত করতে পারেন। এর ফলে আপনি আপনার প্রস্তুতিকে আরও কার্যকরভাবে পরিচালনা করতে পারবেন।
        </p>

        {/* Audio Player */}
        <div className="flex items-center space-x-4 mb-6">
          <button className="bg-blue-500 text-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.26a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.899a9 9 0 010 12.728M12 21V3" />
          </svg>
          <span className="text-sm text-gray-500">১x</span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-4">Questions 1-4</h3>
        
        {/* Instruction Card */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Instructions:</h4>
          <p className="text-sm text-gray-700">
            Read the instructions and the questions for each task carefully. Note that you may be able to answer some of the questions before you listen to the audio.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Item in the luggage
                </th>
                <th className="px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Size
                </th>
                <th className="px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Weight
                </th>
                <th className="px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 whitespace-nowrap text-gray-900 border-b">
                  Tent
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-900 border-b">
                  <input type="text" className="w-full border-b border-gray-400 focus:outline-none" placeholder="মানুয়াল উত্তর" />
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-900 border-b">
                  <input type="text" className="w-full border-b border-gray-400 focus:outline-none" placeholder="মানুয়াল উত্তর" />
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-900 border-b">
                  <input type="text" className="w-full border-b border-gray-400 focus:outline-none" placeholder="মানুয়াল উত্তর" />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 whitespace-nowrap text-gray-900 border-b">
                  Sleeping Bag
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-900 border-b">
                  <input type="text" className="w-full border-b border-gray-400 focus:outline-none" placeholder="মানুয়াল উত্তর" />
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-900 border-b">
                  <input type="text" className="w-full border-b border-gray-400 focus:outline-none" placeholder="মানুয়াল উত্তর" />
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-900 border-b">
                  <input type="text" className="w-full border-b border-gray-400 focus:outline-none" placeholder="মানুয়াল উত্তর" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">Question Type: Complete the Table</h3>
        <p className="text-gray-700 mb-4">
          In order to have a great performance on the IELTS Writing and Speaking tests, you should practice with real IELTS test papers, with the recording of the exam on CD, in a quiet room, and with a stop watch in hand, keeping a reasonable timeline for yourself.
        </p>
        <h4 className="font-bold text-gray-800 mb-2">How to Submit Answers:</h4>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Remember to fill in all the answers for the table. Don't leave any blank spaces.</li>
          <li>For each correct answer, you will be rewarded with one point. If your answer is incorrect, there will be no marks deducted.</li>
          <li>If you have a lot of incorrect answers, you should not be discouraged by the score. Try to find out why you got the answer wrong.</li>
          <li>Practice your Listening section in a quiet environment and try to keep distractions at bay.</li>
          <li>Do not change your answer once you have submitted it.</li>
          <li>Please read all the instructions carefully before you begin your exam.</li>
        </ul>
      </div>

      {/* Second Card */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Answers with Explanation for Questions 1-4</h2>

        {/* Answer 1 */}
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">1. 3M</h4>
          <p className="text-sm text-gray-700">Explanation:</p>
          <p className="text-sm text-gray-700">
            For this question, you must give the full number and the unit. In the audio, the speaker says "3M" which refers to the tent’s weight.
          </p>
        </div>

        {/* Answer 2 */}
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">2. Light-weight</h4>
          <p className="text-sm text-gray-700">Explanation:</p>
          <p className="text-sm text-gray-700">
            In the audio, the speaker mentions the description of the item. It is very important to pay attention to details and to take notes.
          </p>
        </div>
        
        {/* Answer 3 */}
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">3. 6.5KG</h4>
          <p className="text-sm text-gray-700">Explanation:</p>
          <p className="text-sm text-gray-700">
            You must give the full number and the unit in this case. The speaker mentions that the item is 6.5 kilograms. Make sure to spell the word kilograms correctly.
          </p>
        </div>
        
        {/* Answer 4 */}
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">4. Waterproof</h4>
          <p className="text-sm text-gray-700">Explanation:</p>
          <p className="text-sm text-gray-700">
            In the audio, the speaker mentions the description of the item. It is very important to pay attention to details and to take notes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IeltsListeningExercise;