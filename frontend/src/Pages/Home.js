import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { VoteContext } from "../Context/VoteContext"
import Header from "../components/Header"

function Home() {
  const { fetchEventsData, BaseUrl } = useContext(VoteContext)
  const [votingEvents, setVotingEvents] = useState([])

  useEffect(() => {
    // Your useEffect logic here if needed

    const fetchData = async () => {
      try {
        const response = await fetch(`${BaseUrl}/voting_events`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })

        const data = await response.json()
        // console.log(data)
        setVotingEvents(data)
        // Now you can work with the 'data' you fetched
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [BaseUrl, fetchEventsData, votingEvents.length])

  return (
    <>
      <div className="home_header w-full bg-black">
        <Header />
      </div>
      <div className="mt-20">
        {" "}
        {/* Add margin-top to create space for the Navbar */}
        <h2 className="text-xl font-semibold text-blue-800 mb-2 uppercase text-center">
          Available Events
        </h2>
        {votingEvents?.length > 0 ? (
          votingEvents.map((votingEvent, index) => (
            <article
              key={index}
              className="rounded-xl border-2 border-gray-100 text-white mb-8"
            >
              <Link
                to={`/voting_events/${votingEvent.id}`}
                className="container mx-auto px-4 text-[10px] font-medium sm:text-xs"
              >
                <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                  <div>
                    <h1 className="font-large sm:text-lg">
                      {votingEvent.eventsName}
                    </h1>
                    <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                      <div className="flex items-center gap-1 text-gray-500"></div>
                      <span className="hidden sm:block" aria-hidden="true">
                        &middot;
                      </span>
                      <p className="hidden sm:block lg:text-xl sm:text-green-400">
                        {votingEvent.eventsDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))
        ) : (
          <p>No voting events found.</p>
        )}
      </div>
    </>
  )
}

export default Home
