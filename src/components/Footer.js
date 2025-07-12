import React from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { IoLogoTiktok, IoLogoTwitter } from "react-icons/io5";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/sitiannisadahlan", color: "#0077b5" },
    { icon: Instagram, url: "https://www.instagram.com/an_nzaaa?igsh=NzYzcmt3cDE1YzVo", color: "#e4405f" },
    { icon: Mail, url: "mailto:sitiannisadahlan50@gmail.com", color: "#bb001b" },
    { icon: IoLogoTiktok, url: "https://www.tiktok.com/@anotherpageunlocked_?is_from_webapp=1&sender_device=pc", color: "#69C9D0" },
    { icon: IoLogoTwitter, url: "https://x.com/apageunlocked_", color: "#1DA1F2" }
  ];

  return (
    <div style={{
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
      padding: "40px 0",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(199, 112, 240, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)
        `,
      }} />
      
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
        position: "relative",
        zIndex: 2
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          alignItems: "center"
        }}>
          <div style={{ 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px"
          }}>
            <h3 style={{ 
              color: "#ffd700",
              fontWeight: "600",
              textAlign: "center",
              background: "linear-gradient(45deg, #ffd700, #ffed4e)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1.2rem",
              margin: 0,
              whiteSpace: "nowrap" // Ensures the text stays on one line
            }}>
              Designed and Developed by Siti Annisa Dahlan
            </h3>
          </div>
          
          <div style={{ 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px"
          }}>
            <h3 style={{ 
              color: "#ffd700",
              fontWeight: "600",
              textAlign: "center",
              background: "linear-gradient(45deg, #ffd700, #ffed4e)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1.2rem",
              margin: 0
            }}>
              Copyright © {year}
            </h3>
          </div>
          
          <div style={{ 
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <div style={{
              display: "flex",
              gap: "30px",
              justifyContent: "center"
            }}>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "50%",
                      color: "#ffd700",
                      fontSize: "1.5em",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 215, 0, 0.3)",
                      textDecoration: "none"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px) scale(1.1)";
                      e.currentTarget.style.boxShadow = `0 10px 20px ${social.color}40`;
                      e.currentTarget.style.background = social.color;
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.color = "#ffd700";
                    }}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;