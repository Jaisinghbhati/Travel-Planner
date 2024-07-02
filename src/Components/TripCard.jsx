import React from 'react';

const TripCard = ({ trip, onBookmark, onDelete }) => {
  return (
    <div className="bg-[#FAF6E7] p-6 rounded shadow-lg mb-4 w-full sm:w-80 md:w-96 lg:w-80">
      <h3 className="text-xl mb-2"><strong>Title:</strong> {trip.title}</h3>
      <p><strong>Destination:</strong> {trip.destination}</p>
      <p><strong>Dates:</strong> {trip.dates}</p>
      <p><strong>Mode of Travel:</strong> {trip.modeOfTravel}</p>
      <p><strong>Notes:</strong> {trip.notes}</p>
      <button onClick={onBookmark} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 mt-2">
        Bookmark
      </button>
      <button onClick={onDelete} className="bg-red-500 text-white px-2 py-1 rounded mt-2">
        Delete
      </button>
    </div>
  );
};

export default TripCard;
