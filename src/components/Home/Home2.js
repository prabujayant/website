import React, { useState, useEffect } from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    {
      title: "CODE RED'25 National Level Hackathon",
      description: "Won the Consolidation Prize of INR 10,000 finishing 4th out of 1000+ teams nationally.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "ELCIA Next-Gen Innovative Tech Hackathon", 
      description: "Finished in the top 10 out of 500+ teams all over India and won INR 10,000.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    }
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com/Prabu17", color: "#333" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/prabu-jayant-6b316b251/", color: "#0077b5" },
    { icon: Instagram, url: "https://www.instagram.com/prabujayant17/", color: "#e4405f" }
  ];

  return (
    <div style={{
      background: "linear-gradient(135deg, #2d1b69 0%, #11052c 50%, #0f0c29 100%)",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(75, 0, 130, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(72, 61, 139, 0.3) 0%, transparent 50%)
        `,
        animation: "float 6s ease-in-out infinite"
      }} />
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: Math.random() * 10 + 5 + "px",
            height: Math.random() * 10 + 5 + "px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animation: `particle${i % 3} ${3 + Math.random() * 4}s linear infinite`,
            backdropFilter: "blur(1px)"
          }}
        />
      ))}

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
        position: "relative",
        zIndex: 2,
        fontFamily: "'Inter', sans-serif"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "60px",
          alignItems: "center",
          marginBottom: "80px"
        }}>
          <div style={{ 
            textAlign: "center",
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
          }}>
            <h1 style={{ 
              fontSize: "clamp(2.5rem, 5vw, 4rem)", 
              fontWeight: "900", 
              background: "linear-gradient(45deg, #fff, #f0f0f0, #fff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "40px",
              textShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
              letterSpacing: "2px"
            }}>
              LET ME <span style={{ background: "linear-gradient(45deg, #ffd700, #ffed4e)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>INTRODUCE</span> MYSELF</h1>
            
            <div style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              borderRadius: "20px",
              padding: "40px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              marginBottom: "50px"
            }}>
              <p style={{ 
                fontSize: "1.2em", 
                lineHeight: "1.8", 
                color: "rgba(255, 255, 255, 0.9)", 
                marginBottom: "0",
                textAlign: "left"
              }}>
                I am driven by the passion to create innovative solutions that solve real-world challenges. My journey began with a deep interest in coding, which quickly transformed into a love for problem-solving using technology.
                <br /><br />
                Throughout my journey, I've honed my skills in <span style={{color: "#ffd700", fontWeight: "600"}}>Python, C/C++, JavaScript, and the MERN Stack</span>, and I've taken on leadership roles in multiple hackathons and projects where I guided teams to success.
                <br /><br />
                I lead by example, always striving for excellence while collaborating to deliver impactful projects in areas like <span style={{color: "#ffd700", fontWeight: "600"}}>web development, machine learning, and cybersecurity</span>. Building real-world applications using Node.js and React.js is where my passion truly lies, and I continue to explore new ways to innovate and challenge myself.
                <br /><br />
                My belief is simple: <span style={{color: "#ffd700", fontWeight: "600"}}>true leadership comes from the ability to inspire others and turn ideas into reality</span>. I'm committed to learning, sharing knowledge, and pushing the limits of technology in every project I take on.
              </p>
            </div>
          </div>
          
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            transform: isVisible ? "scale(1)" : "scale(0.8)",
            opacity: isVisible ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s"
          }}>
            <div style={{
              position: "relative",
              transform: "perspective(1000px) rotateY(-15deg)",
              transition: "transform 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateY(-15deg) scale(1)"}
            >
              <div style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "linear-gradient(45deg, #ffd700, #ffed4e, #ffd700)",
                padding: "8px",
                boxShadow: "0 0 50px rgba(255, 215, 0, 0.4)"
              }}>
                <div style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "100px",
                  color: "white",
                  fontWeight: "bold"
                }}>
                  👨‍💻
                </div>
              </div>
              
              {/* Floating Elements around Avatar */}
              <div style={{
                position: "absolute",
                top: "10%",
                right: "-20%",
                width: "60px",
                height: "60px",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                animation: "float 3s ease-in-out infinite",
                backdropFilter: "blur(10px)"
              }}>
                ⚡
              </div>
              
              <div style={{
                position: "absolute",
                bottom: "20%",
                left: "-15%",
                width: "50px",
                height: "50px",
                background: "rgba(255, 215, 0, 0.3)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                animation: "float 4s ease-in-out infinite reverse",
                backdropFilter: "blur(10px)"
              }}>
                🚀
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Achievements Section */}
        <div style={{ 
          marginTop: "80px",
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          opacity: isVisible ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s"
        }}>
          <h2 style={{ 
            fontSize: "clamp(2rem, 4vw, 3rem)", 
            background: "linear-gradient(45deg, #fff, #ffd700)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center", 
            marginBottom: "50px",
            fontWeight: "800",
            letterSpacing: "1px"
          }}>
            🏆 ACHIEVEMENTS & AWARDS
          </h2>
          
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            padding: "0 20px"
          }}>
            {achievements.map((achievement, index) => (
              <div
                key={index}
                style={{
                  background: hoveredCard === index 
                    ? achievement.gradient 
                    : "rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  padding: "30px",
                  textAlign: "center",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: hoveredCard === index ? "translateY(-10px) scale(1.02)" : "translateY(0)",
                  boxShadow: hoveredCard === index 
                    ? "0 25px 50px rgba(0, 0, 0, 0.2)" 
                    : "0 10px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated background effect */}
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
                  <h4 style={{ 
                    fontSize: "1.4em", 
                    fontWeight: "700", 
                    color: "#fff",
                    marginBottom: "20px",
                    lineHeight: "1.3"
                  }}>
                    {achievement.title}
                  </h4>
                  <p style={{ 
                    fontSize: "1.1em", 
                    color: "rgba(255, 255, 255, 0.9)",
                    lineHeight: "1.5",
                    margin: 0
                  }}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Social Section */}
        <div style={{ marginTop: "80px", textAlign: "center" }}>
          <h1 style={{ 
            fontSize: "clamp(2rem, 4vw, 2.5rem)", 
            background: "linear-gradient(45deg, #fff, #ffd700)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px",
            fontWeight: "800"
          }}>
            🌐 FIND ME ON
          </h1>
          <p style={{ 
            fontSize: "1.3em", 
            marginBottom: "40px", 
            color: "rgba(255, 255, 255, 0.9)" 
          }}>
            Feel free to <span style={{ 
              background: "linear-gradient(45deg, #ffd700, #ffed4e)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "600"
            }}>connect</span> with me on these platforms:
          </p>
          
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap"
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
                    width: "80px",
                    height: "80px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                    color: "#fff",
                    fontSize: "2.5em",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    textDecoration: "none",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px) scale(1.1)";
                    e.currentTarget.style.boxShadow = `0 15px 30px ${social.color}40`;
                    e.currentTarget.style.background = social.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  }}
                >
                  <IconComponent size={40} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes particle0 {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes particle1 {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(-360deg); opacity: 0; }
        }
        
        @keyframes particle2 {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          10% { opacity: 1; transform: scale(1); }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default Home;