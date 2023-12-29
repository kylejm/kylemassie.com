import React from 'react';
import './Experiences.css'; // Make sure to import the CSS file

// Dummy data - replace this with your actual experience data
const experiences = [
  {
    id: 1,
    title: "Electrical and Data Engineer Intern",
    company: "Heart of Racing Aston Martin",
    duration: "May - July 2023",
    description: "Had the privilege of working with the Heart of Racing team, gaining insights into automotive and race engineering across several races. Utilized Cosworth's PI Toolbox for real-time data analysis of the #23 IMSA car, focusing primarily on maintaining the car's ECU boost range within IMSA standards. Also managed the IPS (Internal Power System) and ICD (Instrument Display Cluster) to relay real-time tire and engine temperature data to the driver."

  },
];

function Experiences() {
  return (
    <div className="experiences">
      <h2>Experience</h2>
      {experiences.map((exp) => (
        <div key={exp.id} className="experience">
          <h3>{exp.title} - {exp.company}</h3>
          <p className="duration">{exp.duration}</p>
          <p className="description">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Experiences;
