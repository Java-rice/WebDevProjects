import React from 'react'
import './ContentStyle.css'
import PuertoPrincesaImg from '../../assets/puerto_princesa_img.png'
import PalawanVideo from '../../assets/videos/palawanvideo.mp4'
import ReactPlayer from 'react-player';
import PalawanThumbnail from '../../assets/palawan.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';



function PuertoPrincesa() {
  return (
    <div class='content-change'>
      <h1>3. Puerto Princesa Underground River, Palawan - The Princess of the Depths</h1>
      <img src={PuertoPrincesaImg} alt='Puerto Princesa'></img>
      <p>The Puerto Princesa Underground River in Palawan, Philippines, is the world's longest navigable underground river. Flowing directly into the West Philippine Sea, this natural marvel is also a UNESCO World Heritage Site. Visitors can explore its wonders through a guided boat tour that takes them along the river and through a breathtaking cave system.
      </p>

      <h2>Extended Subterranean Journey</h2>
      <p>The underground river is the longest navigable subterranean river globally, stretching over 8.2 kilometers underground. This remarkable feature makes it a top attraction for those seeking to explore extraordinary geological formations.</p>

      <h2>Eco-Haven</h2>
      <p>The river is home to a diverse range of wildlife, including endemic and endangered flora and fauna. Exploring the underground river allows visitors to witness these unique species in their natural habitat, adding to the allure of the experience.</p>

      <h2>Enchanted Exploration</h2>
      <p>Embarking on a boat tour through the underground river offers an enchanting and mystical adventure. Visitors can marvel at the stunning stalactite and stalagmite formations, sculpted over time, creating a magical and unforgettable journey.</p>

      <h2>Culture and People</h2>
      <p>The Puerto Princesa Underground River is located in the ancestral domains of the Batak and Tagbanua, two of the seven cultural groups indigenous to Palawan. These groups have a deep connection to the land and have lived sustainably in the area for generations.
      <br /> <br />The local people are known for their warm hospitality and welcoming nature towards visitors. Many are employed in the tourism industry surrounding the underground river, providing boat tours, guides, and other services.</p>

      <div class='content-trip'>
        <h2>Trip Route from Manila</h2>
        <p>To visit the Puerto Princesa Underground River from Manila, first fly to Puerto Princesa City, which takes about 1 hour and 25 minutes. From there, drive for two hours to Sabang Wharf, the starting point for the river tours. A short 15-20 minute boat ride from the wharf takes you to the river's entrance. Alternatively, you can book a complete tour package from Manila that includes flights, transfers, and the river tour.</p>
      </div>

      <a href="https://www.youtube.com/watch?v=U-U3yE6dyXA" target="_blank"><h2 class="youtube-link">Virtual Tour | It's More Fun with You in Puerto Princesa</h2></a>
      <ReactPlayer 
      url={PalawanVideo}
      controls={true} 
      light={PalawanThumbnail}
      playing={true}
      playIcon={<FontAwesomeIcon icon={faPlayCircle} size="4x" style={{ color: 'white' }}/>}
      height="450px" 
      width="100%"/>
    </div>
  )
}

export default PuertoPrincesa
