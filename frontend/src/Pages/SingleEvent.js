import React, { useState, useEffect, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import Swal from "sweetalert2"
import { AuthContext } from "../Context/AuthContext"
import { VoteContext } from "../Context/VoteContext"

function SingleEvent() {
  const { id } = useParams()
  const { current_user } = useContext(AuthContext)
  const { deleteVoteEvent, addReply, BaseUrl } = useContext(VoteContext)
  const [newComment, setNewComment] = useState("")
  const [SingleEvent, setSingleEvent] = useState([])

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteVoteEvent(current_user.id, id)
        Swal.fire("Deleted!", "Your event has been deleted.", "success")
      }
    })
  }

  const handleSubmit = () => {
    addReply(newComment, id)
    console.log("submit")
  }

  useEffect(() => {
    fetch(`${BaseUrl}/voting_events/${id}`)
      .then((res) => res.json())
      .then((SingleEvent) => {
        console.log(SingleEvent)
        setSingleEvent(SingleEvent)
      })
  }, [BaseUrl, id])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">
            {SingleEvent && SingleEvent.eventsName}
          </h3>
          <p className="text--700 mb-4">
            {SingleEvent && SingleEvent.eventsDescription}
          </p>
          <p className="text--700 mb-4">
            {SingleEvent && SingleEvent.eventsDescription}
          </p>

          <div className="flex items-center text-gray-500 text-sm"></div>
          <div>
            {current_user && current_user.id === SingleEvent.user_id ? (
              <>
                <div className="flex mt-4">
                  <Link
                    to={`/editEvent/${id}`}
                    className="mr-2 bg-gray-200 px-4 py-1 rounded-full"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="bg-red-200 px-4 py-1 rounded-full"
                  >
                    Delete
                  </button>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        {current_user && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-4">
            <h4 className="text-lg font-bold mb-4">replies</h4>

            {SingleEvent.replies && SingleEvent.replies.length === 0 ? (
              <p>No replies yet.</p>
            ) : (
              SingleEvent.replies &&
              SingleEvent.replies.map((reply) => (
                <div key={reply.id} className="flex mb-4">
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      {reply.user_id}
                    </div>
                    <p className="text-gray-700">{reply.reply_content}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {current_user && (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-6 mb-4"
          >
            <h4 className="text-lg font-bold mb-4">Add Reply</h4>
            <div className="flex mb-4">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mr-2 px-4 py-1 rounded-full border"
                placeholder="Enter your reply..."
              />
              <button className="bg-gray-200 px-4 py-1 rounded-full">
                Add Reply
              </button>
            </div>
          </form>
        )}

        <div>
          <Link
            to={`/candidates/${id}`}
            className="bg-blue-800 text-white px-4 py-2 rounded-full"
          >
            Vote for Candidates
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SingleEvent
