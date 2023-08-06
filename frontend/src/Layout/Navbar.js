// components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/image1.png';
import { AuthContext } from '../Context/AuthContext';

function Navbar() {
  const { current_user, signout } = useContext(AuthContext);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <img src={image1} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Online-Voting</span>
        </div>
        <div className="space-x-4 flex">
         
          {!current_user?.email && (
            <>
            <Link
              to="/login"
              className="block py-2 pl-3 pr-4 text-white bg-gradient-to-br from-purple-900 to-purple-900 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 text-center mr-2 mb-2"
              >
              Login
            </Link>

             <Link
                to="/signup"
                className="block py-2 pl-3 pr-4 text-white bg-gradient-to-br from-purple-900 to-purple-900 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 text-center mr-2 mb-2"
              >
                Signup
              </Link>
            </>

          )}

          {current_user?.email && (
            <>
              <Link
            to="/"
            className="block py-2 pl-3 pr-4 text-white bg-gradient-to-br from-purple-900 to-purple-900 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 text-center mr-2 mb-2"
            >
            Home
          </Link>

              <Link
                to="/profile"
                className="block py-2 pl-3 pr-4 text-white bg-gradient-to-br from-purple-900 to-purple-900 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 text-center mr-2 mb-2"
              >
                Profile
              </Link>

              <Link
                to="/addevent"
                className="block py-2 pl-3 pr-4 text-white bg-gradient-to-br from-purple-900 to-purple-900 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 text-center mr-2 mb-2"
              >
                Add Event
              </Link>
              <button
                onClick={signout}
                className="block py-2 pl-3 pr-4 text-white bg-gradient-to-br from-red-400 to-red-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 text-center mr-2 mb-2"
              >
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
