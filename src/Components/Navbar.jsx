 
const Navbar = ({ onSignInClick, onSignUpClick }) => {
  return (

    <>   
    
    <nav className="bg-[#31473A] p-4 flex justify-between items-center">
      <div className="text-white text-2xl">Travel Planner</div>
      <div>
        <button
          onClick={onSignInClick}
          className="bg-[#7C8363] text-white px-4 py-2 rounded mr-2"
        >
          Sign In
        </button>
        <button
          onClick={onSignUpClick}
          className="bg-[#7C8363] text-white px-4 py-2 rounded"
        >
          Sign Up
        </button>
      </div>
    </nav>


    </>

  );
};

export default Navbar;
