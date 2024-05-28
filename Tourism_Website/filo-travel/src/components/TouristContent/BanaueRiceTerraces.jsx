import React from 'react'
import './ContentStyle.css'
import BanaueImg from '../../assets/banaue_img.png'
import BanaueVideo from '../../assets/videos/Banaue Rice_Terraces_Banaue.mp4'
import ReactPlayer from 'react-player';
import BanaueThumbnail from '../../assets/banaueThumbnail.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';

function BanaueRiceTerraces() {
  return (
    <div class='content-change'>
      <h1>6. Banaue Rice Terraces, Ifugao - Stairway to Verdant Scenery</h1>
      <img src={BanaueImg} alt='Banaue Rice Terraces'></img>
      <p>The Ifugao Rice Terraces, located in the Cordillera mountains of northern Luzon, Philippines, are an outstanding example of a living cultural landscape. These 2,000-year-old terraces were hand-carved into the mountains by the Ifugao people and are considered one of the most spectacular engineering feats in the ancient world.</p>

      <h2>Discover the Legacy</h2>
      <p>The Banaue Rice Terraces are a symbol of the impressive skills and hard work of the Ifugao people, who have cultivated these terraces for over 2,000 years. These terraces are a testament to the rich cultural heritage and agricultural practices of the Ifugao community</p>

      <h2>See Firsthand the Natural Beauty</h2>
      <p>Recognized as the highest of its kind in the world, the Banaue Rice Terraces are a sight to behold. The stair-like beauty of these terraces, carved into the mountains of Ifugao, offers a breathtaking panorama that showcases the harmony between nature and human ingenuity.</p>

      <h2>Immerse in Local Traditions</h2>
      <p>Visiting the Banaue Rice Terraces provides an opportunity to immerse in the Ifugao culture, witness their traditional way of life, and experience the daily activities of the local community. Exploring cultural villages and interacting with the Ifugao people offer insights into their traditions and craftsmanship skills passed down through generations</p>

      <h2>Culture and People</h2>
      <p>The Ifugao people, residing in the province, have a profound bond with the land and the terraces, reflecting their remarkable skills and diligent cultivation efforts. These terraces, irrigated by water from the rainforests above, symbolize the enduring legacy and agricultural expertise of the Ifugaos. Despite challenges such as erosion and modernization, the terraces continue to be a majestic and spectacular sight, drawing visitors globally.</p>

      <div class='content-trip'>
        <h2>Trip Route from Manila</h2>
        <p>To travel from Manila to the Banaue Rice Terraces, you can take a night bus, which offers both standard and premium options with ample legroom for a comfortable journey lasting approximately 10-11 hours. It is advisable to bring items that ensure comfort throughout the trip. Once in Banaue, you can explore must-visit sites like the Banaue Rice Terraces, Batad Rice Terraces, and Bangaan Village, each offering a unique cultural and natural experience.</p>
      </div>
      <a href="https://www.youtube.com/watch?v=AccU5KfNJ4Q" target="_blank"><h2 class="youtube-link">Banaue Rice Terraces | Banaue, Ifugao Province | Cinematic video | 4K</h2></a>
      <ReactPlayer 
      url={BanaueVideo}
      controls={true} 
      light={BanaueThumbnail}
      playing={true}
      playIcon={<FontAwesomeIcon icon={faPlayCircle} size="4x" style={{ color: 'white' }}/>}
      height="450px" 
      width="100%"/>
    </div>
  )
}

export default BanaueRiceTerraces
