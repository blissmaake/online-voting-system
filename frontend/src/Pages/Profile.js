import React, { useState, useContext } from 'react';
import image2 from '../assets/image2.png';
import { AuthContext } from '../Context/AuthContext';

function Profile() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { current_user } = useContext(AuthContext);

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
    if (!current_user) {
      // Handle the case when current_user is not available
      // ... (You can add the necessary logic here)
    }
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
        <button
          onClick={toggleDropdown}
          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span className="sr-only">Open dropdown</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
        <div
          id="dropdown"
          className={`z-10 ${dropdownVisible ? '' : 'hidden'} text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Edit  Profile
              </a>
            </li>
            {/* You can add more dropdown items here */}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={image2}
          alt="Bonnie image"
        />
        <div className="text-white text-center">
          <div>
            <strong>First Name:</strong> {current_user.firstName}
          </div>
          <div>
            <strong>Last Name:</strong> {current_user.lastName}
          </div>
          <div>
            <strong>User Name:</strong> {current_user.userName}
          </div>
          <div>
            <strong>Email:</strong> {current_user.email}
          </div>
          {/* You can add more user details here */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
