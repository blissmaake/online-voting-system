import React, { useContext, useState } from "react";
import IMG from "../assets/Login Page.png";
import { AuthContext } from '../Context/AuthContext';

function Login() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login( email, password);
  };

  return (
    <div className="md:flex max-w-6xl py-10 mx-auto">
      <div className="w-[50%] mx-auto">
        <img src={IMG} alt="registration logo" />
      </div>

      <div className="w-[50%] mx-auto">
        <div className="login_title mx-auto"></div>

        <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">


          <div className="mt-5 flex flex-col">
            <div className="login_label">Email</div>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />
          </div>

          <div className="mt-5 flex flex-col">
            <div className="login_label">Password</div>
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
          Login
        </button>          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
