import { Routes, Route } from "react-router-dom"
import "./App.css"
import Layout from "./Layout/Layout"
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Profile from "./Pages/Profile"
import Login from "./Pages/Login"
import Election from "./Pages/Election"
import Voting from "./Pages/Voting"
import About from "./Pages/About"
import NotificationList from "./Pages/NotificationList"
import AuthProvider from "./Context/AuthContext"
import AddEvent from "./Pages/AddEvent"
import VoteProvider from "./Context/VoteContext"
import SingleEvent from "./Pages/SingleEvent"
import CandidateList from "./Pages/CandidateList"

function App() {
  return (
    <AuthProvider>
      <VoteProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addevent" element={<AddEvent />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/election" element={<Election />} />
            <Route path="/voting" element={<Voting />} />
            <Route path="/about" element={<About />} />
            <Route path="/notification" element={<NotificationList />} />
            <Route path="/voting_events/:id" element={<SingleEvent />} />
            <Route path="/candidates/:id" element={<CandidateList />} />
            {/* <Route path="/candidates/:id" element={<SingleEvent />} /> */}
          </Route>
        </Routes>
      </VoteProvider>
    </AuthProvider>
  )
}

export default App
