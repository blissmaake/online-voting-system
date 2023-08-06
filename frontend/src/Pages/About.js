import React from 'react';

function About() {
  const textStyle = {
    fontSize: '24px', // Adjust the font size as needed
    color: 'white',
  };

  return (
    <div style={textStyle}>
      An online voting system that will replace the old ballot system or paper system.
      Over time, we have utilized the required technology in every sector to improve efficiency and save the extra resources.
      But the voting system is still very expensive and requires a bigger workforce.
      The system is slower and still not completely tamper-proof.
      We bring the system that is safe, reliable, and solves modern issues like higher reachability of the booth, crowd-free voting, inexpensive, faster results, and others.
    </div>
  );
}

export default About;
