import React, { useContext, useState } from "react";
import IMG from "../assets/Registration Page.png";
import { AuthContext } from '../Context/AuthContext';

function Signup() {
  const { signup } = useContext(AuthContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(firstName, lastName, userName, email, password);
  };

  return (
    <div className="md:flex max-w-6xl py-10 mx-auto">
      <div className="w-[50%] mx-auto">
        <img src={IMG} alt="registration logo" />
      </div>

      <div className="w-[50%] mx-auto">
        <div className="signup_title mx-auto">Registration form</div>

        <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">

          <div className="mt-5 flex flex-col">
            <div className="signup_label">First Name</div>
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter first name"
            />
          </div>

          <div className="mt-5 flex flex-col">
            <div className="signup_label">Last Name</div>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter last name"
            />
          </div>

          <div className="mt-5 flex flex-col">
            <div className="signup_label">User Name</div>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter user name"
            />
          </div>

          <div className="mt-5 flex flex-col">
            <div className="signup_label">Email</div>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />
          </div>

          <div className="mt-5 flex flex-col">
            <div className="signup_label">Password</div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
          </div>

          <div className="mx-auto mt-5">
          <button 
        type="submit"
         class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Register
        </button>          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
