import React, { useState, useEffect } from 'react';
import TripCard from './TripCard';

const TripList = ({ trips, onBookmark, onDelete }) => {
  const [viewType, setViewType] = useState('icon'); // Default view type is icon

  useEffect(() => {
    // Set default view to icon whenever trips change
    setViewType('icon');
  }, [trips]);

  const handleViewChange = (type) => {
    setViewType(type);
  };

  // Function to check if a trip is the default Jaisalmer trip
  const isDefaultJaisalmerTrip = (trip) => {
    return (
      trip.title === 'Type Travel' &&
      trip.destination === 'Jaisalmer' &&
      trip.dates === '24th Dec 2024' &&
      trip.modeOfTravel === 'Plane' &&
      trip.notes === 'Love to travel'
    );
  };

  return (
    <div className="mb-4">
      {/* View Buttons */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => handleViewChange('icon')}
          className={`bg-[#31473A] text-white px-4 py-2 rounded ${viewType === 'icon' ? 'bg-[#31473A]' : ''}`}
        >
         DetailView
        </button>
        <button
          onClick={() => handleViewChange('list')}
          className={`bg-[#31473A] text-white px-4 py-2 rounded ${viewType === 'list' ? 'bg-[#31473A]' : ''}`}
        >
          Icon View
        </button>
        <button
          onClick={() => handleViewChange('detailed')}
          className={`bg-[#31473A] text-white px-4 py-2 rounded ${viewType === 'detailed' ? 'bg-[#31473A]' : ''}`}
        >
           List View
        </button>
      </div>

      {/* Trip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {trips.map((trip, index) => (
          <div key={index}>
            {viewType === 'icon' && (
              <TripCard trip={trip} onBookmark={() => onBookmark(index)} onDelete={() => onDelete(index)} />
            )}
            {viewType === 'list' && (
              <div className="bg-[#FAF6E7] p-4 rounded shadow-md mb-4">
                <p><strong>Destination:</strong> {trip.destination}</p>
                <p><strong>Dates:</strong> {trip.dates}</p>
                <div className="flex justify-end">
                  <button onClick={() => onBookmark(index)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 mt-2">
                    Bookmark
                  </button>
                  <button onClick={() => onDelete(index)} className="bg-red-500 text-white px-2 py-1 rounded mt-2">
                    Delete
                  </button>
                </div>
              </div>
            )}
            {viewType === 'detailed' && (
              <div className="bg-[#FAF6E7] p-4 rounded shadow-md mb-4">
                <p><strong>Destination:</strong> {trip.destination}</p>
                <p><strong>Dates:</strong> {trip.dates}</p>
                <p><strong>Mode of Travel:</strong> {trip.modeOfTravel}</p>
                <p><strong>Notes:</strong> {trip.notes}</p>
                <div className="flex justify-end">
                  <button onClick={() => onBookmark(index)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 mt-2">
                    Bookmark
                  </button>
                  <button onClick={() => onDelete(index)} className="bg-red-500 text-white px-2 py-1 rounded mt-2">
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripList;
