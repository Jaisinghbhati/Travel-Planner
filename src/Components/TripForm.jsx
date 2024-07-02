import React, { useState } from 'react';

const TripForm = ({ addTrip }) => {
  const [title, setTitle] = useState('');
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [modeOfTravel, setModeOfTravel] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTrip({ title, destination, dates, modeOfTravel, notes });
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDestination('');
    setDates('');
    setModeOfTravel('');
    setNotes('');
  };

  return (
    <>
     <h1 className='text-[#E59462] text-3xl font-bold flex justify-center pt-16'>Add Trip</h1> <br/>
    <div className='flex justify-center items-center'> 
      <form onSubmit={handleSubmit} className="bg-[#E59462] p-6 rounded shadow-lg mb-4 w-[60vh] ">
      <h2 className="text-2xl mb-4 text-white">Add Trip</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Dates"
        value={dates}
        onChange={(e) => setDates(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Mode of Travel"
        value={modeOfTravel}
        onChange={(e) => setModeOfTravel(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="flex justify-end space-x-4">
     
        <button
          type="submit"
          className="bg-[#31473A] text-white px-4 py-2 rounded"
        >
          Add Trip
        </button>

        <button
          type="button"
          onClick={resetForm}
          className="bg-[#31473A] text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
    </div>
    </>

  );
};

export default TripForm;
