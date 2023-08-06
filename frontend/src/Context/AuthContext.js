import React, { createContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const nav = useNavigate()
  const [current_user, setCurrentUser] = useState(null)
  const [onChange, setOnChange] = useState(true)

  // Function to handle user login
  const login = (email, password) => {
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message) {
          setCurrentUser(response.user)
          nav("/")
          Swal.fire("Success", response.message, "success")
          setOnChange(!onChange)
        } else {
          Swal.fire(
            "Error",
            "Login failed. Please check your credentials.",
            "error"
          )
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error)
      })
  }

  // Function to handle user logout
  const signout = () => {
    fetch("/logout", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        setCurrentUser(null)
        setOnChange(!onChange)

        if (response.message) {
          nav("/login")
          Swal.fire("Success", response.message, "success")
        } else {
          nav("/login")
          Swal.fire("Success", response.success, "success")
        }
      })
  }

  // Function to handle user registration
  const signup = (firstName, lastName, userName, email, password) => {
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, userName, email, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          Swal.fire("Error", response.error, "error")
        } else if (response.success) {
          nav("/login")
          Swal.fire("Success", response.success, "success")
          setOnChange(!onChange)
        } else {
          Swal.fire("Error", "Something went wrong", "error")
        }
      })
      .catch((error) => {
        console.error("Error registering user:", error)
      })
  }

  // Function to handle changing the user's password
  const changePassword = (currentPassword, newPassword) => {
    fetch("/changepassword", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ currentPassword, newPassword }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          Swal.fire("Success", response.success, "success")
        } else if (response.error) {
          Swal.fire("Error", response.error, "error")
        } else {
          Swal.fire("Error", "Something went wrong", "error")
        }
      })
      .catch((error) => {
        console.error("Error changing password:", error)
      })
  }

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    fetch("/logged_in", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("current", response)
        if (response.user) {
          setCurrentUser(response.user)
        } else {
          setCurrentUser(null)
        }
      })
  }, [onChange])

  const contextData = {
    login,
    signup,
    current_user,
    signout,
    changePassword,
  }

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}
