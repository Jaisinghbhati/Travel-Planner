import React, { useState } from 'react';

const FeedbackForm = ({ submitFeedback }) => {
  const [experience, setExperience] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [warning, setWarning] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (experience.trim() && suggestions.trim()) {
      submitFeedback({ experience, suggestions });
      setExperience('');
      setSuggestions('');
      setWarning('');
    } else {
      setWarning('Please fill out both fields.');
    }
  };

  return (
    <>
    <h1 className='text-[#E59462] text-3xl font-bold flex justify-center pt-16'>Submit Feedback</h1> <br/>
    <div className='flex justify-center'> 
       <form onSubmit={handleSubmit} className="bg-[#E59462] p-6 rounded shadow-lg mb-4 w-[80vh]">
      <h2 className="text-2xl mb-4 text-white">Submit Feedback</h2>
      <textarea
        placeholder="Travel Experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Suggestions"
        value={suggestions}
        onChange={(e) => setSuggestions(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      {warning && <p className="text-red-500 mb-4">{warning}</p>}
      <button
        type="submit"
        className="bg-[#31473A] text-white px-4 py-2 rounded w-full"
        disabled={!experience.trim() || !suggestions.trim()}
      >
        Submit Feedback
      </button>
    </form>
    </div>
    </>
 
  );
};

export default FeedbackForm;
