import React from "react"

export default function ProfileHeader() {
  return (
    <div className="profileheader flex pt-10">
      <div className="profileheader_titles flex-1">Personal Info</div>
      <div className="profileheader_titles flex-1">Elections</div>
      <div className="profileheader_titles flex-1">Contact</div>
      <div className="profileheader_titles flex-1">
        <button className="signup_button">Vote</button>
      </div>
    </div>
  )
}
