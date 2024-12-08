// src/components/TeamSection.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const TeamSection = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios.get("/api/team").then((response) => {
      setTeam(response.data);
    });
  }, []);

  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="team-list">
        {team.map((member) => (
          <div key={member._id} className="team-item">
            <img src={member.photo} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
