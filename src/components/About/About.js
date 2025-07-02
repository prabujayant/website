import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <section style={{ 
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden"
    }}>
      <Container fluid className="about-section" id="about" style={{
        paddingTop: "80px",
        paddingBottom: "50px",
        position: "relative",
        zIndex: 1
      }}>
        <Particle />
        
        {/* Floating geometric shapes for visual interest */}
        <div style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: "180px",
          height: "180px",
          background: "linear-gradient(45deg, rgba(212, 175, 55, 0.12), rgba(199, 112, 240, 0.12))",
          borderRadius: "50%",
          filter: "blur(70px)",
          animation: "float 7s ease-in-out infinite",
          zIndex: 0
        }}></div>
        
        <div style={{
          position: "absolute",
          bottom: "25%",
          left: "5%",
          width: "120px",
          height: "120px",
          background: "linear-gradient(45deg, rgba(199, 112, 240, 0.18), rgba(100, 200, 255, 0.12))",
          borderRadius: "30%",
          filter: "blur(50px)",
          animation: "float 9s ease-in-out infinite reverse",
          zIndex: 0
        }}></div>

        <Container style={{ position: "relative", zIndex: 1 }}>
          <Row style={{ 
            minHeight: "85vh",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Col md={7} className="about-header" style={{
              paddingTop: "50px",
              paddingBottom: "50px",
              color: "white"
            }}>
              <div style={{
                marginBottom: "40px",
                animation: "fadeInUp 1s ease-out"
              }}>
                {/* Main Title */}
                <div style={{
                  position: "relative",
                  display: "inline-block",
                  marginBottom: "30px"
                }}>
                  <h1 style={{
                    fontSize: "clamp(2.8rem, 6vw, 4.2rem)",
                    paddingBottom: "15px",
                    background: "linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4, #45b7d1)",
                    backgroundSize: "300% 300%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: "800",
                    textShadow: "none",
                    marginBottom: "0",
                    animation: "gradientShift 4s ease infinite",
                    letterSpacing: "2px",
                    lineHeight: "1.1"
                  }}>
                    Know Who{" "}
                    <strong style={{
                      background: "linear-gradient(45deg, #c770f0, #ffd700)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}>
                      I'M
                    </strong>
                  </h1>
                  
                  {/* Animated underline */}
                  <div style={{
                    position: "absolute",
                    bottom: "0px",
                    left: "0",
                    width: "0%",
                    height: "4px",
                    background: "linear-gradient(90deg, #d4af37, #c770f0, #4ecdc4)",
                    borderRadius: "2px",
                    animation: "expandWidth 2s ease-out 1s forwards"
                  }}></div>
                </div>

                {/* Subtitle */}
                <p style={{
                  fontSize: "1.1rem",
                  color: "rgba(255, 255, 255, 0.75)",
                  fontWeight: "300",
                  letterSpacing: "0.5px",
                  marginTop: "25px",
                  lineHeight: "1.6",
                  animation: "fadeIn 1s ease-out 1.5s both"
                }}>
                  Passionate Developer & Creative Thinker
                </p>
              </div>

              {/* About Card */}
              <div style={{ 
                animation: "fadeInUp 1s ease-out 0.8s both"
              }}>
                <Aboutcard />
              </div>
            </Col>

            <Col md={5} style={{ 
              paddingBottom: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <div style={{
                position: "relative",
                maxWidth: "400px",
                width: "100%",
                animation: "fadeInRight 1s ease-out 1.2s both"
              }}>
                {/* Multiple layered background effects */}
                <div style={{
                  position: "absolute",
                  top: "-25px",
                  left: "-25px",
                  width: "calc(100% + 35px)",
                  height: "calc(100% + 35px)",
                  background: "linear-gradient(45deg, rgba(212, 175, 55, 0.25), rgba(199, 112, 240, 0.25))",
                  borderRadius: "30px",
                  zIndex: -2,
                  transform: "rotate(-2deg)",
                  animation: "pulse 4s ease-in-out infinite"
                }}></div>
                
                <div style={{
                  position: "absolute",
                  top: "-15px",
                  left: "-15px",
                  width: "calc(100% + 15px)",
                  height: "calc(100% + 15px)",
                  background: "linear-gradient(135deg, rgba(100, 200, 255, 0.2), rgba(255, 107, 107, 0.2))",
                  borderRadius: "25px",
                  zIndex: -1,
                  transform: "rotate(3deg)",
                  animation: "pulse 4s ease-in-out infinite 1.5s"
                }}></div>
                
                <div style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "20px",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  transform: "scale(1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05) translateY(-15px)";
                  e.currentTarget.style.boxShadow = "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                  e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)";
                }}>
                  <img
                    src={laptopImg}
                    alt="about"
                    className="img-fluid"
                    style={{
                      borderRadius: "20px",
                      width: "100%",
                      height: "auto",
                      display: "block"
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(45deg, rgba(212, 175, 55, 0.15), rgba(199, 112, 240, 0.15))",
                    borderRadius: "20px",
                    opacity: 0,
                    transition: "opacity 0.4s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = "1"}
                  onMouseLeave={(e) => e.target.style.opacity = "0"}></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      
      {/* Skills and Tools Sections */}
      <div style={{
        position: "relative",
        background: "rgba(0,0,0,0.1)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255,255,255,0.1)"
      }}>
        {/* Enhanced Section Headers Component */}
        {[
          { title: "Professional", highlight: "Skillset", component: <Techstack /> },
          { title: "", highlight: "Tools", subtitle: "I Use", component: <Toolstack /> },
          { title: "Days I", highlight: "Code", component: <Github /> }
        ].map((section, index) => (
          <div key={index} style={{ 
            paddingTop: "80px", 
            paddingBottom: "60px",
            position: "relative"
          }}>
            {/* Section background effect */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "200px",
              height: "200px",
              background: `radial-gradient(circle, rgba(${index % 2 ? '199, 112, 240' : '212, 175, 55'}, 0.05) 0%, transparent 70%)`,
              borderRadius: "50%",
              zIndex: -1
            }}></div>
            
            <Container style={{ position: "relative", zIndex: 1 }}>
              <div style={{ 
                textAlign: "center", 
                marginBottom: "60px",
                animation: "fadeInUp 0.8s ease-out"
              }}>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <h1 style={{ 
                    fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                    background: "linear-gradient(45deg, #ffffff, #f0f0f0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: "800",
                    marginBottom: "15px",
                    textShadow: "none",
                    letterSpacing: "1px"
                  }}>
                    {section.title} <strong style={{ 
                      background: "linear-gradient(45deg, #c770f0, #d4af37, #4ecdc4)",
                      backgroundSize: "200% 200%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: "gradientShift 3s ease infinite"
                    }}>{section.highlight}</strong> {section.subtitle}
                  </h1>
                  
                  {/* Animated decorative line */}
                  <div style={{
                    width: "120px",
                    height: "3px",
                    background: "linear-gradient(90deg, #d4af37, #c770f0, #4ecdc4)",
                    backgroundSize: "200% 100%",
                    margin: "0 auto",
                    borderRadius: "2px",
                    animation: "gradientSlide 2s ease infinite"
                  }}></div>
                  
                  {/* Decorative dots */}
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "8px",
                    marginTop: "15px"
                  }}>
                    {[...Array(3)].map((_, i) => (
                      <div key={i} style={{
                        width: "6px",
                        height: "6px",
                        background: i === 1 ? "#c770f0" : "rgba(255,255,255,0.3)",
                        borderRadius: "50%",
                        animation: `pulse 2s ease-in-out infinite ${i * 0.5}s`
                      }}></div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div style={{ animation: `fadeInUp 0.8s ease-out ${0.2 + index * 0.1}s both` }}>
                {section.component}
              </div>
            </Container>
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes expandWidth {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes gradientSlide {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(3deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }

        /* Responsive adjustments */
        @media (max-width: 991px) {
          .about-header {
            text-align: center !important;
            padding-top: 30px !important;
          }
        }
        
        @media (max-width: 768px) {
          .about-section h1 {
            font-size: 2.2rem !important;
          }
          
          .about-section {
            padding-top: 50px !important;
          }
        }
        
        @media (max-width: 576px) {
          .about-section h1 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default About;