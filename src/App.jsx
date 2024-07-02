import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import SignInForm from './Components/SignInForm';
import SignUpForm from './Components/SignUpForm';
import TripForm from './Components/TripForm';
import TripList from './Components/Triplist';
import SearchBar from './Components/SearchBar';
import FeedbackForm from './Components/FeedbackForm';
import Footer from './Components/Footer';
import myimg from './Components/trip.svg'

const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [trips, setTrips] = useState([
    {
      title: 'Type Travel',
      destination: 'Jaisalmer',
      dates: '24th Dec 2024',
      modeOfTravel: 'Plane',
      notes: 'Love to travel',
    },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const addTrip = (trip) => {
    setTrips([...trips, trip]);
  };

  const deleteTrip = (index) => {
    const newTrips = [...trips];
    newTrips.splice(index, 1);
    setTrips(newTrips);
  };

  const bookmarkTrip = (index) => {
    alert('Added to bookmark');
  };

  const submitFeedback = (feedback) => {
    alert('Feedback submitted');
  };

  const filteredTrips = trips.filter(
    (trip) =>
      trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trip.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trip.dates.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F9EC7E]">
      <Navbar onSignInClick={() => setShowSignIn(true)} onSignUpClick={() => setShowSignUp(true)} />
      {showSignIn && <SignInForm onClose={() => setShowSignIn(false)} />}
      {showSignUp && <SignUpForm onClose={() => setShowSignUp(false)} />}
        
        <div className='h-[50vh] bg-[#E59462] flex flex flex-col md:flex-row '>
          <div>
            <img src={myimg} alt="" className='pt-5 sm:pt-[50px] w-full h-auto' />

          </div>
          <div>
            <h1 className='font-bold text-6xl text-white pt-[6vh] hidden md:block'>TO TRAVEL IS TO LIVE...</h1>
          </div>
          
        </div>
      <div className="container mx-auto p-4 flex-grow pt-[10vh]">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
       
        <TripList trips={filteredTrips} onBookmark={bookmarkTrip} onDelete={deleteTrip} />
        <TripForm addTrip={addTrip} />
        <FeedbackForm submitFeedback={submitFeedback} />
      </div>
      <Footer />
    </div>
  );
};

export default App;