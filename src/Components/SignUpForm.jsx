import React from 'react';

const SignUpForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#31473A] bg-opacity-50 p-6">
      <div className="bg-[#31473A] p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4 text-white">Sign Up</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button className="bg-[#7C8363] text-white px-4 py-2 rounded w-full">
            Sign Up
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-white">Cancel</button>
      </div>
    </div>
  );
};

export default SignUpForm;
