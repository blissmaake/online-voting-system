import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import IMG from "../assets/lets vote.jpeg"
import { AuthContext } from "../Context/AuthContext"

export default function Header() {
  const navigate = useNavigate()
  const { current_user } = useContext(AuthContext)

  const handleLoginClick = () => {
    // Navigate to the login page when the login button is clicked
    navigate("/login") // Replace "/login" with the actual login page path
  }

  const handleRegisterClick = () => {
    // Navigate to the register page when the register button is clicked
    navigate("/signup") // Replace "/register" with the actual register page path
  }

  const handleReadMore = () => {
    window.scrollBy(0, 500)
  }
  return (
    <div className=" flex max-w-5xl mx-auto space-x-5 min-h-screen">
      <div className="flex-1">
        <img src={IMG} alt="logo" className="w-full" />
      </div>
      <div className="flex-1 mt-5">
        <div className="text-right">
          {current_user ? (
            ""
          ) : (
            <button className="signup_button" onClick={handleLoginClick}>
              Login
            </button>
          )}
        </div>

        <div className="home_writeup">Be a part of decision</div>

        <div className="home_writeup_2">Vote Today</div>

        <div className="mx-auto space-x-5">
          {current_user ? (
            <p>logged in</p>
          ) : (
            <button className="signup_button" onClick={handleRegisterClick}>
              REGISTER
            </button>
          )}

          <button className="signup_button" onClick={handleReadMore}>
            READ MORE
          </button>
        </div>
      </div>
    </div>
  )
}
