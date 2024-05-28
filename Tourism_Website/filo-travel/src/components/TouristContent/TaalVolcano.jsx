import React from 'react'
import './ContentStyle.css'
import TaalImg from '../../assets/taal_img.png'
import TaalVideo from '../../assets/videos/taalvideo.mp4'
import ReactPlayer from 'react-player';
import TaalThumbnail from '../../assets/taalthumbnail.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';


function TaalVolcano() {
  return (
    <div class='content-change'>
      <h1>9. Taal Volcano, Batangas - The Mighty Miniature</h1>
      <img src={TaalImg} alt='Taal Volcano'></img>
      <p>Taal Volcano, located in the province of Batangas, Philippines, is an active complex stratovolcano situated on an island within Taal Lake. It is often described as the world's smallest volcano and is recognized for its unique geological features. Taal Volcano has a long history of eruptions, with 34 recorded eruptions since 1572, making it the second most active volcano in the Philippines after Mount Mayon.</p>

      <h2>How About a Volcano Within a Lake Inside Another Volcano?</h2>
      <p>Taal Volcano is the smallest active volcano in the world and is known for its distinctive geological features, being a volcano within a lake within a volcano. This unique setup makes it a fascinating natural wonder that attracts visitors from around the globe.</p>

      <h2>Where Breathtaking Views Erupt!</h2>
      <p>The vista from Taal Volcano offers a 360-degree panorama that captures the beauty of the surrounding landscapes, including Taal Lake and the lush mountains in the distance. The serene and picturesque views from the volcano rim provide a peaceful and awe-inspiring experience for visitors.</p>

      <h2>Mini Volcano, Mega Adventure</h2>
      <p>Trekking or riding a horse up Taal Volcano offers an adventurous experience for nature enthusiasts and hikers. The hike up the volcano provides an opportunity to witness volcanic steam vents, sulfuric odors, and breathtaking views of the Crater Lake and surrounding landscapes.</p>

      <h2>Culture and People</h2>
      <p>Batangas is home to a rich cultural heritage, with the town of Taal being a prime example. Taal was established in 1572 and is known for its well-preserved Filipino-Spanish architecture, including Asia's biggest Catholic church and a collection of old houses. The town played an important role in the Philippine revolution against the Spanish and is famous for its traditional barong shirts and balisong (butterfly knives).
         <br /> <br />The people of Batangas are known for their warm hospitality and welcoming nature towards visitors. Many locals rely on fishing in Taal Lake and agriculture on the fertile soil of Volcano Island for their livelihoods
      </p>

      <div class='content-trip'>
        <h2>Trip Route from Manila</h2>
        <p>To visit Taal Volcano from Manila, the easiest and most affordable way is by bus. You can find several bus terminals in Manila; just ask around for the nearest one. The bus journey to Tagaytay takes about 2 to 2.5 hours. Once in Tagaytay, you'll need to catch a tuk-tuk for a 20-minute ride to Talisay Bay, which faces Taal Lake. From there, you’ll take a 30-minute boat trip across Taal Lake on a small boat to reach Volcano Island, where Taal Volcano is located.</p>
      </div>

      <a href="https://www.youtube.com/watch?v=nQRU8wxBaoI" target="_blank"><h2 class="youtube-link">DRONE VIEW OF TAAL VOLCANO</h2></a>
      <ReactPlayer 
      url={TaalVideo}
      controls={true} 
      light={TaalThumbnail}
      playing={true}
      playIcon={<FontAwesomeIcon icon={faPlayCircle} size="4x" style={{ color: 'white' }}/>}
      height="450px" 
      width="100%"/>






    </div>
  )
}

export default TaalVolcano
