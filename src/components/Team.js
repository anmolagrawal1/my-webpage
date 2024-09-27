import React from 'react';
import './Team.css';

function Team() {
  const teamMembers = [
    {
      name: "Freddy Smith",
      position: "CEO and Founder",
      imgUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      twitter: "#",
      github: "#"
    },
    {
      name: "Carl Jones",
      position: "CTO and Co-Founder",
      imgUrl: "https://randomuser.me/api/portraits/men/2.jpg",
      twitter: "#",
      github: "#"
    },
    {
      name: "Susan Peterson",
      position: "Marketing Director",
      imgUrl: "https://randomuser.me/api/portraits/women/1.jpg",
      twitter: "#",
      github: "#"
    },
    {
      name: "Tommy Barnes",
      position: "Designer",
      imgUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      twitter: "#",
      github: "#"
    },
    {
      name: "Ron Jenson",
      position: "Senior Developer",
      imgUrl: "https://randomuser.me/api/portraits/men/4.jpg",
      twitter: "#",
      github: "#"
    },
    {
      name: "Pete Tompkins",
      position: "Web Developer",
      imgUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      twitter: "#",
      github: "#"
    },
    {
      name: "Kelly Richards",
      position: "Sales Manager",
      imgUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      twitter: "#",
      github: "#"
    },
    {
      name: "Alexis Jordan",
      position: "Affiliate Manager",
      imgUrl: "https://randomuser.me/api/portraits/women/3.jpg",
      twitter: "#",
      github: "#"
    }
  ];

  return (
    <div className="team-section">
      <h2>An incredible team of amazing individuals</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.imgUrl} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <div className="social-icons">
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
