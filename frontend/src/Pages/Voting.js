import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Voting() {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState('');

  const handleVote = () => {
    // Add vote submission logic here, e.g., API call to the backend
    console.log('Selected Option:', selectedOption);
  };

  // Fetch voting event details and available options based on id from the backend
  const votingEvent = {
    event_name: 'Presidential Election',
    event_description: 'Vote for your favorite presidential candidate.',
    options: [
      { option_id: 1, option_name: 'Candidate A' },
      { option_id: 2, option_name: 'Candidate B' },
      { option_id: 3, option_name: 'Candidate C' },
    ],
  };

  return (
    <div>
      <h2>Voting Event: {votingEvent.event_name}</h2>
      <p>{votingEvent.event_description}</p>
      <form>
        {votingEvent.options.map((option) => (
          <div key={option.option_id}>
            <input
              type="radio"
              name="option"
              value={option.option_id}
              checked={selectedOption === option.option_id}
              onChange={() => setSelectedOption(option.option_id)}
            />
            <label>{option.option_name}</label>
          </div>
        ))}
        <button type="button" onClick={handleVote}>Vote</button>
      </form>
    </div>
  );
}

export default Voting;
