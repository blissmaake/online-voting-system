import { createContext, useState } from "react"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

export const VoteContext = createContext()

export default function VoteProvider({ children }) {
  const nav = useNavigate()
  // const [votingEvents, setVotingEvents] = useState([])
  const [onChange, setOnChange] = useState(true)
  const BaseUrl = "http://127.0.0.1:3000"

  const addEventB = async (
    event_name,
    duration,
    event_description,
    event_date,
    current_user
  ) => {
    try {
      const response = async () =>
        await (
          await fetch(`${BaseUrl}/voting_events`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({
              eventsName: event_name,
              duration: duration,
              eventsDescription: event_description,
              eventDate: event_date,
              user_id: current_user,
            }),
          })
        ).json()
      const eventData = await response()
      return eventData
    } catch (error) {
      console.log(error)
    }
  }

  const addCandidate = async (role, userName, eventId, current_user_id) => {
    try {
      const response = async () =>
        await (
          await fetch(`${BaseUrl}/candidates`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              role: role,
              userName: userName,
              voting_event_id: eventId,
              user_id: current_user_id,
            }),
          })
        ).json()
      const candidateData = await response()
      console.log(candidateData)
      return candidateData
    } catch (error) {
      console.log(error)
    }
  }

  const addVote = (candidate_id, user_id, event_id) => {
    fetch(`${BaseUrl}/voting_events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        candidate_id: candidate_id,
        user_id: user_id,
        event_id: event_id,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          Swal.fire("Error", response.error, "error")
        } else {
          nav("/") // Redirect to another page on success if needed
          Swal.fire("Success", response.message, "success")
          setOnChange(!onChange)
        }
      })
  }

  const deleteVoteEvent = (user_id, event_id) => {
    // voting_events/by_user/:user_id/:event_id
    fetch(`${BaseUrl}/voting_events/${event_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message) {
          nav("/")
          Swal.fire("Success", response.message, "success")
          setOnChange(!onChange)
        } else {
          Swal.fire("Error", "Something went wrong", "error")
        }
      })
  }

  const fetchEventsData = () => {
    fetch(`${BaseUrl}/voting_events`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => response)
  }

  // const fetchEvents = () => {
  //   fetch(`${BaseUrl}/voting_events`, {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setVotingEvents(response)
  //       console.log(response)
  //     })
  // }
  const editEvent = (
    event_name,
    event_description,
    start_date,
    end_date,
    event_id
  ) => {
    fetch(`${BaseUrl}/voting_events/${event_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventsName: event_name,
        eventsDescription: event_description,
        duration: {
          start_date: start_date,
          end_date: end_date,
        },
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          Swal.fire("Error", response.error, "error")
        } else {
          nav("/addVote")
          Swal.fire("Success", response.message, "success")
          setOnChange(!onChange)
        }
      })
  }

  // useEffect(() => {
  //   fetchEvents()
  // }, [onChange])

  const contextData = {
    fetchEventsData,
    addVote,
    deleteVoteEvent,
    editEvent,
    addEventB,
    addCandidate,
    BaseUrl,
  }

  return (
    <VoteContext.Provider value={contextData}>{children}</VoteContext.Provider>
  )
}
