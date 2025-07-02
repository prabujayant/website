import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaEye, FaStar, FaHeart } from "react-icons/fa";

function ProjectCards(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card
      className="project-card-view"
      style={{
        background: "linear-gradient(135deg, rgba(29, 29, 29, 0.95) 0%, rgba(45, 45, 60, 0.95) 100%)",
        border: "1px solid rgba(212, 175, 55, 0.3)",
        borderRadius: "20px",
        boxShadow: isHovered 
          ? "0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(212, 175, 55, 0.5), 0 0 30px rgba(212, 175, 55, 0.2)"
          : "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        maxWidth: "380px",
        margin: "20px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        transform: isHovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
        backdropFilter: "blur(10px)",
        cursor: "pointer"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(45deg, rgba(212, 175, 55, 0.1), rgba(199, 112, 240, 0.1), rgba(78, 205, 196, 0.1))",
        backgroundSize: "400% 400%",
        animation: "gradientFlow 8s ease infinite",
        opacity: isHovered ? 0.7 : 0,
        transition: "opacity 0.3s ease",
        borderRadius: "20px",
        zIndex: 1
      }}></div>

      {/* Floating particles effect */}
      <div style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        width: "6px",
        height: "6px",
        background: "#d4af37",
        borderRadius: "50%",
        opacity: isHovered ? 1 : 0,
        transition: "opacity 0.3s ease",
        animation: "float 3s ease-in-out infinite",
        zIndex: 3
      }}></div>
      
      <div style={{
        position: "absolute",
        top: "40px",
        right: "35px",
        width: "4px",
        height: "4px",
        background: "#c770f0",
        borderRadius: "50%",
        opacity: isHovered ? 0.8 : 0,
        transition: "opacity 0.3s ease 0.1s",
        animation: "float 3s ease-in-out infinite 1s",
        zIndex: 3
      }}></div>

      {/* Like button */}
      <div 
        style={{
          position: "absolute",
          top: "15px",
          left: "15px",
          zIndex: 4,
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "scale(1)" : "scale(0.8)"
        }}
        onClick={(e) => {
          e.stopPropagation();
          setIsLiked(!isLiked);
        }}
      >
        <FaHeart 
          style={{
            color: isLiked ? "#ff6b6b" : "rgba(255, 255, 255, 0.6)",
            fontSize: "16px",
            transition: "all 0.3s ease",
            transform: isLiked ? "scale(1.2)" : "scale(1)"
          }}
        />
      </div>

      {props.imgPath && (
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt="card-img"
            style={{
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              objectFit: "cover",
              height: "220px",
              width: "100%",
              transition: "transform 0.4s ease",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              filter: isHovered ? "brightness(1.1) contrast(1.1)" : "brightness(1) contrast(1)"
            }}
          />
          
          {/* Image overlay gradient */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60px",
            background: "linear-gradient(transparent, rgba(29, 29, 29, 0.8))",
            transition: "opacity 0.3s ease",
            opacity: isHovered ? 1 : 0.7
          }}></div>
        </div>
      )}

      <Card.Body style={{ position: "relative", zIndex: 2 }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "15px"
        }}>
          <Card.Title
            style={{
              background: "linear-gradient(45deg, #d4af37, #ffd700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: "800",
              fontSize: "1.4em",
              marginBottom: "0",
              letterSpacing: "0.5px",
              flex: 1
            }}
          >
            {props.title}
          </Card.Title>
          
          {/* Rating stars */}
          <div style={{ display: "flex", gap: "2px", opacity: 0.7 }}>
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i}
                style={{
                  color: i < 4 ? "#ffd700" : "rgba(255, 255, 255, 0.3)",
                  fontSize: "12px"
                }}
              />
            ))}
          </div>
        </div>

        <Card.Text
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: "1em",
            marginBottom: "25px",
            lineHeight: "1.6",
            fontWeight: "300",
            letterSpacing: "0.3px"
          }}
        >
          {props.description}
        </Card.Text>

        {/* Enhanced button section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "auto"
          }}
        >
          {props.ghLink && (
            <Button
              variant="outline-warning"
              href={props.ghLink}
              target="_blank"
              style={{
                background: isHovered 
                  ? "linear-gradient(45deg, rgba(212, 175, 55, 0.2), rgba(255, 215, 0, 0.2))"
                  : "transparent",
                color: "#d4af37",
                border: "2px solid transparent",
                backgroundImage: "linear-gradient(rgba(29, 29, 29, 1), rgba(29, 29, 29, 1)), linear-gradient(45deg, #d4af37, #ffd700)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                fontWeight: "600",
                textTransform: "uppercase",
                padding: "12px 20px",
                borderRadius: "25px",
                fontSize: "0.85em",
                letterSpacing: "0.5px",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                minWidth: "100px"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 25px rgba(212, 175, 55, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              <BsGithub style={{ marginRight: "8px" }} />
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {props.demoLink && (
            <Button
              variant="outline-warning"
              href={props.demoLink}
              target="_blank"
              style={{
                background: isHovered 
                  ? "linear-gradient(45deg, rgba(199, 112, 240, 0.2), rgba(147, 51, 234, 0.2))"
                  : "transparent",
                color: "#c770f0",
                border: "2px solid transparent",
                backgroundImage: "linear-gradient(rgba(29, 29, 29, 1), rgba(29, 29, 29, 1)), linear-gradient(45deg, #c770f0, #9333ea)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                fontWeight: "600",
                textTransform: "uppercase",
                padding: "12px 20px",
                borderRadius: "25px",
                fontSize: "0.85em",
                letterSpacing: "0.5px",
                transition: "all 0.3s ease",
                minWidth: "100px"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 25px rgba(199, 112, 240, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              <CgWebsite style={{ marginRight: "8px" }} />
              Demo
            </Button>
          )}

          {props.viewLink && (
            <Button
              variant="outline-warning"
              href={props.viewLink}
              target="_blank"
              style={{
                background: isHovered 
                  ? "linear-gradient(45deg, rgba(78, 205, 196, 0.2), rgba(32, 201, 151, 0.2))"
                  : "transparent",
                color: "#4ecdc4",
                border: "2px solid transparent",
                backgroundImage: "linear-gradient(rgba(29, 29, 29, 1), rgba(29, 29, 29, 1)), linear-gradient(45deg, #4ecdc4, #20c997)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                fontWeight: "600",
                textTransform: "uppercase",
                padding: "12px 20px",
                borderRadius: "25px",
                fontSize: "0.85em",
                letterSpacing: "0.5px",
                transition: "all 0.3s ease",
                minWidth: "100px"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 25px rgba(78, 205, 196, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              <FaEye style={{ marginRight: "8px" }} />
              View
            </Button>
          )}
        </div>
      </Card.Body>

      {/* Bottom accent line */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, #d4af37, #c770f0, #4ecdc4)",
        backgroundSize: "200% 100%",
        animation: "gradientSlide 3s ease infinite",
        opacity: isHovered ? 1 : 0,
        transition: "opacity 0.3s ease"
      }}></div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes gradientSlide {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </Card>
  );
}

export default ProjectCards;

export function Publications() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
        marginTop: "40px",
        paddingBottom: "60px",
        position: "relative"
      }}
    >
      {/* Background decorative elements */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "10%",
        width: "150px",
        height: "150px",
        background: "radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "float 6s ease-in-out infinite",
        zIndex: -1
      }}></div>
      
      <div style={{
        position: "absolute",
        bottom: "30%",
        right: "15%",
        width: "120px",
        height: "120px",
        background: "radial-gradient(circle, rgba(199, 112, 240, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "float 8s ease-in-out infinite reverse",
        zIndex: -1
      }}></div>

      <ProjectCards
        title="Smart Health Monitoring and Anomaly Detection Using IoT and AI"
        description="ICoICI 2024. This paper focuses on leveraging IoT and AI for health monitoring and anomaly detection with real-time data processing and machine learning algorithms."
        demoLink="https://ieeexplore.ieee.org/document/10724486"
        viewLink="https://example.com/view/smart-health-monitoring"
      />
      <ProjectCards
        title="Intrusion Detection Using LSTM and Deep Learning"
        description="ICCCNT 2024. A comprehensive deep learning approach for network intrusion detection using advanced LSTM models and neural network architectures."
        demoLink="https://ieeexplore.ieee.org/document/10696283"
        viewLink="https://example.com/view/intrusion-detection"
      />
    </div>
  );
}