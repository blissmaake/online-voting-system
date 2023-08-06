import React, { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { VoteContext } from "../Context/VoteContext"
// import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

function AddEvent() {
  const { current_user } = useContext(AuthContext)
  const { addCandidate, addEventB } = useContext(VoteContext)
  const nav = useNavigate()
  // const [onChange, setOnChange] = useState(true)

  const [eventName, setEventName] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [eventOption, setEventOption] = useState({})
  const [currentOptions, setCurrentOptions] = useState([])
  const [duration, setDuration] = useState("")
  const [showOptionInput, setShowOptionInput] = useState(false)
  // const [newEventId, setNewEventId] = useState(null)

  const handleSendSubmit = async (e) => {
    e.preventDefault()
    if (current_user && current_user.id) {
      const eventId = await addEventB(
        eventName,
        duration,
        eventDescription,
        eventDate,
        current_user.id
      ) // Pass eventDescription here

      if (eventId) {
        // Add candidate
        console.log(eventId)
        currentOptions.map(async (candidate) => {
          await addCandidate(
            candidate.role,
            candidate.userName,
            eventId.id,
            current_user.id
          )
          // console.log(res)
          function delayedFunction() {
            console.log("skipping 100ms before next db transactions")
          }

          setTimeout(delayedFunction, 10000)
        })
        // Swal.fire(
        //   "Success",
        //   "Event and candidate added successfully",
        //   "success"
        // )
        // setOnChange(!onChange)
        console.log("Event and candidate added successfully.")

        nav("/") // Redirect to another page on success if needed
      } else {
        console.error("Failed to add event.")
        // Swal.fire("Error", eventId.error, "error")
        // setOnChange(!onChange)
      }
    } else {
      console.error("User ID is not available.")
    }
  }

  const handleAddOption = (e) => {
    e.preventDefault()
    if (showOptionInput) {
      setShowOptionInput(false)
    } else {
      setShowOptionInput(true)
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Add a New Event</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="eventName"
              className="block text-gray-700 font-bold mb-2"
            >
              Event Name:
            </label>
            <input
              type="text"
              id="eventName"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="eventDate"
              className="block text-gray-700 font-bold mb-2"
            >
              Event Date:
            </label>
            <input
              type="date"
              id="eventDate"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="eventDescription"
              className="block text-gray-700 font-bold mb-2"
            >
              Event Description:
            </label>
            <textarea
              id="eventDescription"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter Event Description"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <button
              type="text"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
              onClick={handleAddOption}
            >
              Add Candidate Option
            </button>
            {showOptionInput === true ? (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="eventOption"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Candidate Name:
                  </label>
                  <textarea
                    id="eventOption"
                    name="userName"
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Enter Candidate Name"
                    value={eventOption.userName || ""}
                    onChange={(e) => {
                      e.preventDefault()
                      setEventOption({
                        ...eventOption,
                        userName: e.target.value,
                      })
                    }}
                  />
                </div>

                {/* Candidate details */}
                <div className="mb-4">
                  <label
                    htmlFor="role"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Role:
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Enter Role"
                    value={eventOption.role || ""}
                    onChange={(e) => {
                      e.preventDefault()
                      setEventOption({
                        ...eventOption,
                        role: e.target.value,
                      })
                    }}
                  />
                </div>
                <button
                  type="text"
                  className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-green-600"
                  onClick={(e) => {
                    e.preventDefault()
                    console.log("test click")

                    setCurrentOptions([...currentOptions, eventOption])
                    setShowOptionInput(false)
                    setEventOption("")
                    console.log(currentOptions)
                  }}
                >
                  Add Option
                </button>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="mb-4">
            {currentOptions.length === 0 ? (
              ""
            ) : (
              <>
                <table>
                  <tbody>
                    <tr>
                      <th>No. </th>
                      <th>Name</th>
                      <th>Role</th>
                    </tr>
                    {currentOptions.map((e, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{currentOptions[index].userName}</td>
                          <td>{currentOptions[index].role}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-gray-700 font-bold mb-2"
            >
              Duration:
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Event duration in hours"
              value={duration || ""}
              onChange={(e) => {
                e.preventDefault()
                setDuration(e.target.value)
              }}
            />
          </div>
          <button
            type="text"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
            onClick={handleSendSubmit}
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddEvent
