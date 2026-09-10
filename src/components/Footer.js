import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../Constants";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <>
    <footer className="footer-container">
      <div className="footer-gradient-overlay" aria-hidden="true"></div>
      
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.75rem" }}>
            <h3 className="footer-title">
              Designed and Developed by Siti Annisa Dahlan
            </h3>
            <nav aria-label="Footer" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link to="/" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>Home</Link>
              <Link to="/about" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>About</Link>
              <Link to="/project" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>Projects</Link>
              <Link to="/resume" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>Resume</Link>
            </nav>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", margin: 0 }}>
              HCI Research • UI/UX Design • English Education
            </p>
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
                    aria-label={social.title || social.id}
                    title={social.title || social.id}
                  >
                    <IconComponent size={22} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
    {showTop && (
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        title="Back to top"
      >
        ↑
      </button>
    )}
    </>
  );
}

export default Footer;