import React from 'react'
import './ContentStyle.css'
import MayonImg from '../../assets/mayon_img.png'
import MayonVideo from '../../assets/videos/mayon_video.mp4'
import ReactPlayer from 'react-player';
import MayonThumbnail from '../../assets/mayon_thumbnail.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';

function MayonVolcano() {
  return (
    <div class='content-change'>
      <h1>10. Mayon Volcano: The Perfect Cone of the Philippines</h1>
      <img src={MayonImg} alt='Mayon Volcano'></img>
      <p>Mayon, located in the Philippines, has steep upper slopes capped by a small summit crater. Recorded eruptions date back to 1616 CE and are characterized by Strombolian eruptions, lava flows, pyroclastic flows, and mudflows. Eruptions mostly originated from a central conduit. Pyroclastic flows and mudflows have commonly descended many of the approximately 40 drainages that surround the volcano. The most recent eruption occurred during January 2018 through October 2019 and included phreatic explosions, gas-and-ash plumes, lava fountaining, and pyroclastic flows.</p>

      <h2>A Natural Masterpiece of Unparalleled Beauty</h2>
      <p>Mayon Volcano, with its perfectly conical shape and otherworldly beauty, is a true masterpiece of nature. Rising majestically above the landscapes of Albay, this active stratovolcano is a sight to behold. Its distinct, symmetrical form and the wispy plumes of smoke that occasionally emanate from its summit create a mesmerizing scene that captivates visitors from near and far.</p>

      <h2>An Adventure Playground for Outdoor Enthusiasts</h2>
      <p>While Mayon Volcano's beauty is best appreciated from a distance, it also offers a thrilling playground for adventure seekers and outdoor enthusiasts. Experienced hikers can embark on the challenging trek to the summit, where they'll be rewarded with breathtaking views of the surrounding landscapes and a sense of accomplishment like no other. For those seeking a more relaxed experience, the lower slopes of the volcano offer scenic trails and opportunities for picnicking and nature photography.</p>

      <h2>A Tapestry of Rich Cultural Heritage</h2>
      <p>Mayon Volcano is not just a natural wonder; it's also deeply woven into the cultural fabric of Albay and its people. The volcano holds significant spiritual and mythological significance for the local communities, and its presence is celebrated through various festivals and traditions. Visitors can immerse themselves in this rich cultural heritage by attending local events, visiting museums, and interacting with the warm and welcoming residents.</p>

      <div class='content-trip'>
        <h2>Trip Route from Manila</h2>
        <p>Reaching Mayon Volcano from Manila is relatively straightforward. You can take a direct flight to Legazpi City, the capital of Albay, which takes approximately one hour. Alternatively, you can travel by land via a scenic drive or a combination of bus and van rides, which will take around 8-10 hours. Once in Albay, you can arrange guided tours or transportation to explore the various viewpoints and hiking trails around the volcano.</p>
      </div>

      <a href="https://www.youtube.com/watch?v=DBFmCgFuBCk" target="_blank"><h2 class="youtube-link">WATCH | Mount Mayon Volcano, Philippines - Stock Videos 4K Ultra HD</h2></a>
      <ReactPlayer 
      url={MayonVideo}
      controls={true} 
      light={MayonThumbnail}
      playing={true}
      playIcon={<FontAwesomeIcon icon={faPlayCircle} size="4x" style={{ color: 'white' }}/>}
      height="450px" 
      width="100%"/>
    </div>
  )
}

export default MayonVolcano
