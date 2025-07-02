import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" style={{
        minHeight: "100vh",
        position: "relative",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d1b69 50%, #1a1a1a 100%)",
        overflow: "hidden"
      }}>
        <Particle />
        
        {/* Animated background elements */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "100px",
          height: "100px",
          background: "linear-gradient(45deg, rgba(212, 175, 55, 0.1), rgba(199, 112, 240, 0.1))",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
          zIndex: 1
        }}></div>
        
        <div style={{
          position: "absolute",
          top: "60%",
          right: "10%",
          width: "150px",
          height: "150px",
          background: "linear-gradient(45deg, rgba(199, 112, 240, 0.08), rgba(212, 175, 55, 0.08))",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite reverse",
          zIndex: 1
        }}></div>

        <Container className="home-content" style={{ 
          position: "relative", 
          zIndex: 2,
          paddingTop: "50px"
        }}>
          <Row style={{ 
            minHeight: "90vh", 
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Col md={7} className="home-header" style={{
              animation: "slideInLeft 1s ease-out",
              paddingRight: "30px"
            }}>
              {/* Greeting Section */}
              <div style={{ marginBottom: "30px" }}>
                <h1 style={{ 
                  paddingBottom: 15,
                  fontSize: "2.5em",
                  fontWeight: "600",
                  color: "#fff",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  animation: "fadeInDown 1s ease-out 0.2s both"
                }} className="heading">
                  Hi There!{" "}
                  <span 
                    className="wave" 
                    role="img" 
                    aria-labelledby="wave"
                    style={{
                      display: "inline-block",
                      animation: "wave 2s ease-in-out infinite",
                      transformOrigin: "70% 70%"
                    }}
                  >
                    👋🏻
                  </span>
                </h1>
              </div>

              {/* Name Section */}
              <div style={{ 
                marginBottom: "40px",
                position: "relative"
              }}>
                <h1 className="heading-name" style={{
                  fontSize: "3.2em",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  animation: "fadeInUp 1s ease-out 0.4s both"
                }}>
                  <span style={{ 
                    color: "#d4af37",
                    textShadow: "3px 3px 6px rgba(0,0,0,0.4)"
                  }}>
                    I'M
                  </span>
                  <br />
                  <strong className="main-name" style={{ 
                    background: "linear-gradient(45deg, #d4af37, #c770f0, #d4af37)",
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "gradientShift 3s ease infinite, textGlow 2s ease-in-out infinite alternate",
                    display: "block",
                    marginTop: "10px"
                  }}>
                    PRABU JAYANT
                  </strong>
                </h1>
                
                {/* Decorative line */}
                <div style={{
                  width: "120px",
                  height: "4px",
                  background: "linear-gradient(45deg, #d4af37, #c770f0)",
                  marginTop: "20px",
                  borderRadius: "2px",
                  animation: "slideInLeft 1s ease-out 0.6s both"
                }}></div>
              </div>

              {/* Typing Animation Section */}
              <div style={{ 
                padding: "30px 0",
                textAlign: "left",
                animation: "fadeInUp 1s ease-out 0.8s both"
              }}>
                <div style={{
                  background: "rgba(46, 46, 46, 0.3)",
                  padding: "25px 30px",
                  borderRadius: "15px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, transparent, #d4af37, #c770f0, transparent)",
                    animation: "shimmer 2s linear infinite"
                  }}></div>
                  <Type />
                </div>
              </div>

              {/* Call to Action */}
              <div style={{
                marginTop: "40px",
                animation: "fadeInUp 1s ease-out 1s both"
              }}>
                <p style={{
                  fontSize: "1.2em",
                  color: "rgba(255, 255, 255, 0.8)",
                  fontWeight: "300",
                  lineHeight: "1.6",
                  marginBottom: "30px"
                }}>
                  Passionate about <span style={{ color: "#d4af37", fontWeight: "500" }}>Cybersecurity</span>, 
                  <span style={{ color: "#c770f0", fontWeight: "500" }}> AI</span>, and 
                  <span style={{ color: "#d4af37", fontWeight: "500" }}> Innovation</span>
                </p>
              </div>
            </Col>

            <Col md={5} style={{ 
              paddingBottom: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: "slideInRight 1s ease-out 0.5s both"
            }}>
              <div style={{
                position: "relative",
                maxWidth: "500px",
                width: "100%"
              }}>
                {/* Glowing background effect */}
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "120%",
                  height: "120%",
                  background: "radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(199, 112, 240, 0.1) 50%, transparent 70%)",
                  borderRadius: "50%",
                  animation: "pulse 4s ease-in-out infinite",
                  zIndex: -1
                }}></div>
                
                {/* Rotating border */}
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "110%",
                  height: "110%",
                  border: "2px solid transparent",
                  borderImage: "linear-gradient(45deg, #d4af37, #c770f0, #d4af37) 1",
                  borderRadius: "50%",
                  animation: "rotate 10s linear infinite",
                  opacity: "0.6"
                }}></div>

                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ 
                    maxHeight: "450px",
                    width: "100%",
                    height: "auto",
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                    e.target.style.filter = "drop-shadow(0 15px 30px rgba(212, 175, 55, 0.3))";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.filter = "drop-shadow(0 10px 20px rgba(0,0,0,0.3))";
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      
      <Home2 />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes wave {
          0%, 20%, 50%, 80%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          30% { transform: rotate(-8deg); }
          60% { transform: rotate(14deg); }
          70% { transform: rotate(-4deg); }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes textGlow {
          from { text-shadow: 0 0 10px rgba(212, 175, 55, 0.5); }
          to { text-shadow: 0 0 20px rgba(199, 112, 240, 0.5), 0 0 30px rgba(212, 175, 55, 0.3); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.4; }
        }

        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @media (max-width: 768px) {
          .home-header {
            text-align: center !important;
            padding-right: 15px !important;
          }
          
          .heading-name {
            font-size: 2.5em !important;
          }
          
          .home-content {
            padding-top: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Home;