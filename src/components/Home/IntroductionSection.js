import React, { useState, useEffect } from "react";
import { SOCIAL_LINKS, HOME_ACHIEVEMENTS } from "../../Constants";

function IntroductionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const topSocialLinks = SOCIAL_LINKS.slice(0, 3);

  return (
    <section className="intro-section-container">
      {/* Animated Background Elements */}
      <div className="intro-bg-gradient"></div>
      
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="intro-floating-particle"
          style={{
            width: Math.random() * 10 + 5 + "px",
            height: Math.random() * 10 + 5 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animation: `float ${3 + Math.random() * 4}s linear infinite`,
            opacity: 0.3
          }}
        />
      ))}

      <div className="intro-main-container">
        {/* Introduction Grid */}
        <div className="intro-grid">
          <div className={`intro-text-section ${isVisible ? "visible" : ""}`}>
            <h2 className="intro-section-title">
              LET ME <span className="intro-title-highlight">INTRODUCE</span> MYSELF
            </h2>
            
            <div className="intro-content-box">
              <p className="intro-body-text">
                I am an <span className="intro-highlight">Aspiring HCI/UI/UX Researcher and Designer</span> with hands-on experience in user research, wireframing, and user-centered design. I'm passionate about synthesizing insights and translating findings into actionable design solutions.
                <br /><br />
                Throughout my academic and professional journey, I've honed my skills in <span className="intro-highlight">UX research, prototyping, and responsive web development</span>. I've taken on leadership roles in international events and student exchange programs, where I bridged the gap between diverse stakeholders and digital platforms.
                <br /><br />
                I lead with intention, always striving to make digital experiences more accessible through <span className="intro-highlight">user-centered principles and creative innovation</span>. My work spans from developing academic management prototypes like TaskFlow to building gamified reading platforms and educational blogs.
                <br /><br />
                My belief is simple: <span className="intro-highlight">true impact comes from deeply understanding user needs and crafting intuitive digital solutions</span> that empower communities. I'm committed to the intersection of education, technology, and human-computer interaction.
              </p>
            </div>
          </div>
          
          {/* Avatar Section */}
          <div className={`intro-avatar-section ${isVisible ? "visible" : ""}`}>
            <div
              className="intro-avatar-wrapper"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateY(-15deg) scale(1)";
              }}
              style={{
                transform: "perspective(1000px) rotateY(-15deg)",
                transition: "transform 0.3s ease"
              }}
            >
              <div className="intro-avatar-border">
                <div className="intro-avatar-content">
                  👩‍🎓
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="intro-floating-icon top-right">📚</div>
              <div className="intro-floating-icon bottom-left">✨</div>
              <div className="intro-floating-icon middle-right">🌟</div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <article className="achievements-article">
          <h2 className="achievements-article-title">🏆 ACHIEVEMENTS & AWARDS</h2>
          
          <div className="achievements-carousel">
            {HOME_ACHIEVEMENTS.map((achievement, index) => (
              <div
                key={index}
                className="achievement-card"
                style={{
                  background: hoveredCard === index 
                    ? achievement.gradient 
                    : "rgba(255, 255, 255, 0.1)"
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: hoveredCard === index ? "0%" : "-100%",
                  width: "100%",
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.1)",
                  transition: "left 0.5s ease",
                  zIndex: 0
                }} />
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  <h3 className="achievement-card-title">
                    {achievement.title}
                  </h3>
                  <p className="achievement-card-description">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Connect Section */}
        <section className="connect-section">
          <h2 className="connect-section-title">🌐 FIND ME ON</h2>
          <p className="connect-section-subtitle">
            Feel free to <span className="connect-highlight">connect</span> with me on these platforms:
          </p>
          
          <div className="social-links-grid">
            {topSocialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link-btn"
                  aria-label={`Connect on ${social.id}`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = social.color;
                    e.currentTarget.style.boxShadow = `0 15px 30px ${social.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <IconComponent size={40} />
                </a>
              );
            })}
          </div>
        </section>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        ::-webkit-scrollbar {
          height: 8px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: rgba(255, 215, 0, 0.5);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </section>
  );
}

export default IntroductionSection;
