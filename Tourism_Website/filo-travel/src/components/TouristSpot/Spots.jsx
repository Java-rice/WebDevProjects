import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Spots.css';
import Boracay from '../TouristContent/Boracay';
import BanaueRiceTerraces from '../TouristContent/BanaueRiceTerraces';
import Cebu from '../TouristContent/Cebu';
import ChocolateHills from '../TouristContent/ChocolateHills';
import KayanganLake from '../TouristContent/KayanganLake';
import MayonVolcano from '../TouristContent/MayonVolcano';
import PuertoPrincesa from '../TouristContent/PuertoPrincesa';
import RizalPark from '../TouristContent/RizalPark';
import Siargao from '../TouristContent/Siargao';
import TaalVolcano from '../TouristContent/TaalVolcano';

function SpotsNav() {
  const [selectedSpot, setSelectedSpot] = useState('Boracay');
  const [isFading, setIsFading] = useState(false);

  const spots = [
    'Boracay',
    'Chocolate Hills',
    'Puerto Princesa',
    'Siargao',
    'Cebu',
    'Banaue Rice Terraces',
    'Rizal Park',
    'Kayangan Lake',
    'Taal Volcano',
    'Mayon Volcano'
  ];

  const handleSpotChange = (spot) => {
    setIsFading(true);
    setTimeout(() => {
      setSelectedSpot(spot);
      setIsFading(false);
    }, 400);
  };

  const renderContent = () => {
    switch (selectedSpot) {
      case 'Boracay':
        return  <Boracay />;
      case 'Chocolate Hills':
        return <ChocolateHills/>
      case 'Puerto Princesa':
        return <PuertoPrincesa/>
      case 'Siargao':
        return <Siargao/>
      case 'Cebu':
        return <Cebu/>
      case 'Banaue Rice Terraces':
        return <BanaueRiceTerraces/>
      case 'Rizal Park':
        return <RizalPark/>
      case 'Kayangan Lake':
        return <KayanganLake/>
      case 'Taal Volcano':
        return <TaalVolcano/>
      case 'Mayon Volcano':
        return <MayonVolcano/>
      default:
        return <Boracay/>
    }
  };

  return (
    <div className='spotcontainer container'>
      <div className='spotnavcontainer'>
        <h3>Top 10 Tourist Spots</h3>
        <ul className='spot-items'>
          {spots.map((spot) => (
            <li key={spot}>
              <Link to="#" onClick={() => handleSpotChange(spot)} className={selectedSpot === spot ? 'active' : ''}>
                {spot}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={`spotcontent ${isFading ? 'fade-out' : ''}`}>
        <p id='spottext'>Are you a traveler looking for a new adventure? Do you want to explore destinations that are off the beaten path and not overcrowded with tourists? Look no further than these top 10 emerging destinations. These hidden gems are waiting to be explored, and they offer a unique blend of culture, history, and natural beauty.</p>
        {renderContent()}
      </div>
    </div>
  );
}

export default SpotsNav;