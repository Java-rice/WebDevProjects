import React from 'react';
import './MissionItem.css';

const MissionItem = ({ icon, title, content }) => {
  return (
    <div className="mission-item">
      <img src={icon} alt={title} className="mission-icon" />
      <h3 className = "mission-titles-3">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default MissionItem;
