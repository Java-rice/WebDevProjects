import React from "react";
import "./Footer.css";
import footer_bg from "../../assets/footer_bg.png";
import facebookIcon from "../../assets/facebook_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";
import twitterXIcon from "../../assets/twitterX_icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-footer-container">
        <div className="top-footer-content">
          <img src={footer_bg} alt="Footer background" className="footer-bg" />
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-content">
          <h1>Filo Travel</h1>
          <p>
            Welcome to Filo Travel! Let’s inspire locals and international
            travelers to discover the hidden gems and iconic landmarks of our
            archipelago.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterXIcon} alt="Twitter" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
