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
        <img src={footer_bg} alt="Footer background" className="footer-bg" />
        <div className="top-footer-content">
          <h1>Subcribe and be Updated</h1>
          <input
            type="email"
            placeholder="Please enter your email address to get latest updates and offers"
            className="footer-email-input"
          />
        </div>
      </div>
      <div className="bottom-footer-container">
        <div className="bottom-footer-content">
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
