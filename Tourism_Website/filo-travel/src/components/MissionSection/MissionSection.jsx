import React from 'react';
import MissionItem from './MissionItem';
import JoinUsContactUs from './JoinUsContactUs';
import './MissionSection.css';
import icon1 from '../../assets/mission_icon1.png';
import icon2 from '../../assets/mission_icon2.png';
import icon3 from '../../assets/mission_icon3.png';



const MissionSection = () => {
  return (
    <div className="mission-section">
      <h1 className = "mission">Our Mission</h1>
      <div className="mission-items">
        <MissionItem 
          icon={icon1}
          title="Promote Sustainable Tourism" 
          content="Encourage responsible travel to protect our heritage." 
        />
        <MissionItem 
          icon={icon2}
          title="Highlight Local Culture" 
          content="Showcase unique traditions, crafts, and cuisines." 
        />
        <MissionItem 
          icon={icon3}
          title="Support Local Communities" 
          content="Partner with locals to boost their economy." 
        />
      </div>
      <JoinUsContactUs />
    </div>
  );
};

export default MissionSection;
