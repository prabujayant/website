import React from "react";
import { SOCIAL_LINKS } from "../Constants";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <footer className="footer-container">
      <div className="footer-gradient-overlay"></div>
      
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">
              Designed and Developed by Siti Annisa Dahlan
            </h3>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-copyright">
              Copyright © {year}
            </h3>
          </div>
          
          <div className="footer-social-wrapper">
            <div className="footer-social-links">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-link"
                    aria-label={social.title}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;