import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function EventCandidates() {
  const { id } = useParams();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch(`/candidates/${id}`)
      .then((res) => res.json())
      .then((candidates) => {
        setCandidates(candidates);
      });
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Candidates for the Event</h3>
          {candidates.length === 0 ? (
            <p>No candidates found for this event.</p>
          ) : (
            <ul>
              {candidates.map((candidate) => (
                <li key={candidate.id} className="mb-4">
                  <h4 className="text-lg font-bold">{candidate.name}</h4>
                  <p>Party: {candidate.party}</p>
                  <p>Position: {candidate.position}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <Link to={`/`} className="bg-blue-800 text-white px-4 py-2 rounded-full">
            Back to Event
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCandidates;
