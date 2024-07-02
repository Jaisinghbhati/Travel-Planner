import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (

    <>
  <div className='flex justify-center'>     
    <input
      type="text"
      placeholder="Search trips"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-[40vh] p-2 mb-4 border border-gray-300 rounded p-[9px]"
    />
    </div>

    </>
  );
};


export default SearchBar;
