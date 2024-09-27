import React from "react";
import "./Content.css";

function Content() {
  return (
    <div className="Content">
      <div className="section boost-productivity">
        <div className="illustration astronaut"></div>
        <div className="content">
          <h2>Boost Productivity</h2>
          <p>
            Build an atmosphere that creates productivity in your organization
            and your company culture.
          </p>
          <ul>
            <li>Maximize productivity and growth</li>
            <li>Speed past your competition</li>
            <li>Learn the top techniques</li>
          </ul>
        </div>
      </div>

      <div className="section automated-tasks">
        <div className="content">
          <h2>Automated Tasks</h2>
          <p>
            Save time and money with our revolutionary services. We are the
            leaders in the industry.
          </p>
          <ul>
            <li>Automated task management workflow</li>
            <li>Detailed analytics for your data</li>
            <li>Some awesome integrations</li>
          </ul>
        </div>
        <div className="illustration robot"></div>
      </div>
    </div>
  );
}

export default Content;
