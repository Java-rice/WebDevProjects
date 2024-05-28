import React from 'react'
import './ContentStyle.css'
import CebuImg from '../../assets/cebu_img.png'
import CebuVideo from '../../assets/videos/cebu_video.mp4'
import ReactPlayer from 'react-player';
import CebuThumbnail from '../../assets/cebu_thumbnail.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';

function Cebu() {
  return (
    <div class='content-change'>
      <h1>5. Cebu Beaches and Diving Spots - A Paradise for Beach Lovers and Underwater Explorers</h1>
      <img src={CebuImg} alt='Cebu'></img>
      <p>Cebu, one of the most famous islands in the Philippines, is a stunning destination that offers a perfect blend of natural beauty, rich culture, and exciting adventures. Known for its pristine beaches and world-class diving spots, Cebu is a true paradise for beach enthusiasts and underwater explorers alike.</p>

      <h2>Breathtaking Beaches</h2>
      <p>Cebu is home to some of the most breathtaking beaches in the Philippines. Here are a few must-visit destinations:</p>
      <p>1. Bantayan Island: This idyllic island boasts long stretches of powdery white sand beaches, crystal-clear turquoise waters, and swaying coconut trees. Bantayan Island is a perfect getaway for those seeking tranquility and natural beauty.</p>
      <p>2. Moalboal: Famous for its stunning white sand beaches and vibrant coral reefs, Moalboal is a top destination for beach lovers and snorkelers. The Panagsama Beach is a particular highlight, with its powdery white sand and clear, shallow waters perfect for swimming and soaking up the sun.</p>
      <p>3. Malapascua Island: This small island is renowned for its pristine beaches and world-class diving spots. The white sand beach of Bounty Beach is a true gem, offering a serene and secluded escape from the crowds.</p>

      <h2>Diving Hotspots</h2>
      <p>Cebu is a diver's paradise, offering some of the best diving sites in the Philippines. Here are some must-visit diving spots:</p>
      <p>1. Moalboal: The Panagsama Beach in Moalboal is not only a beautiful beach but also a renowned diving spot. The vibrant coral gardens and diverse marine life, including the famous sardine run, make it a bucket-list destination for divers.</p>
      <p>2. Malapascua Island: This small island is famous for its thresher shark sightings, attracting divers from around the world. The clear waters and abundance of marine life make it a top-notch diving destination.</p>
      <p>3. Mactan Island: Just off the coast of Cebu City, Mactan Island offers a variety of dive sites, including shipwrecks, underwater caves, and vibrant coral gardens. The diverse marine life and excellent visibility make it a popular spot for both beginner and experienced divers.</p>

      <h2>Culture and People</h2>
      <p>Beyond the natural wonders, Cebu offers a rich cultural tapestry woven by its warm and friendly locals. Immerse yourself in traditional festivals, witness age-old fishing practices, and savor the diverse culinary delights that celebrate the island's heritage. The laid-back island vibe and genuine hospitality of the people will make you feel right at home in this tropical paradise.</p>

      <div class='content-trip'>
        <h2>Trip Route from Manila</h2>
        <p>To visit the Puerto Princesa Underground River from Manila, first fly to Puerto Princesa City, which takes about 1 hour and 25 minutes. From there, drive for two hours to Sabang Wharf, the starting point for the river tours. A short 15-20 minute boat ride from the wharf takes you to the river's entrance. Alternatively, you can book a complete tour package from Manila that includes flights, transfers, and the river tour.</p>
      </div>

      <a href="https://www.youtube.com/watch?v=4jzph6P38l8" target="_blank"><h2 class="youtube-link">WATCH | CEBU Island Philippines: Tours Like Never Before!</h2></a>
      <ReactPlayer 
      url={CebuVideo}
      controls={true} 
      light={CebuThumbnail}
      playing={true}
      playIcon={<FontAwesomeIcon icon={faPlayCircle} size="4x" style={{ color: 'white' }}/>}
      height="450px" 
      width="100%"/>
    </div>
  )
}

export default Cebu
