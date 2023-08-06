import React, { useContext, useEffect, useState } from "react"
import { VoteContext } from "../Context/VoteContext"
import { AuthContext } from "../Context/AuthContext"
import { useParams } from "react-router-dom"

function Candidates() {
  const [candidatesData, setCandidatesData] = useState([])
  const { id } = useParams()
  const [selectedCandidateId, setSelectedCandidateId] = useState(null)
  const [hasVoted, setHasVoted] = useState(false)
  const { addVote, BaseUrl } = useContext(VoteContext)
  const { current_user } = useContext(AuthContext)

  // useEffect(() => {
  //   fetch("/candidates")
  //     .then((response) => response.json())
  //     .then((data) => setCandidatesData(data))
  //     .catch((error) => console.error("Error fetching candidates:", error))
  // }, [])

  useEffect(() => {
    // /candidates/by_voting_event/:voting_event_id
    fetch(`${BaseUrl}/candidates/by_voting_event/${id}`)
      .then((res) => res.json())
      .then((EventCandidates) => {
        console.log(EventCandidates)
        setCandidatesData(EventCandidates)
      })
  }, [BaseUrl, candidatesData?.length, id])

  const handleVote = (candidate_id, user_id, event_id) => {
    // Send the vote to the server
    fetch(`${BaseUrl}/user_votes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        candidate_id: candidate_id,
        user_id: user_id,
        voting_event_id: event_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response if necessary (e.g., show a success message)
        console.log("Vote submitted:", data)
        setHasVoted(true) // Update the state to indicate that the user has voted
        // addVote(selectedCandidateId) // Call the addVote function to update the voting context
      })
      .catch((error) => console.error("Error submitting vote:", error))
  }

  return (
    <div>
      <h2 className="text-white">Candidates</h2>
      <div className="flex flex-wrap">
        {candidatesData.map((candidate) => (
          <div
            key={candidate.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-800">Name: {candidate.userName}</p>
              {/* Add other candidate information */}
              <p className="text-gray-800">Role: {candidate.role}</p>
              {hasVoted ? (
                <p>You have already voted for {candidate.userName}.</p>
              ) : (
                <button
                  onClick={() => setSelectedCandidateId(candidate.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Vote for {candidate.userName}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {selectedCandidateId && !hasVoted && (
        <button
          onClick={handleVote(selectedCandidateId, current_user.id, id)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Confirm Vote
        </button>
      )}
    </div>
  )
}

export default Candidates
