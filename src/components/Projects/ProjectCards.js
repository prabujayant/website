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
        background: "linear-gradient(135deg, rgba(29, 29, 29, 0.98) 0%, rgba(45, 45, 60, 0.98) 100%)",
        border: "1px solid rgba(212, 175, 55, 0.4)", // Slightly more prominent border
        borderRadius: "20px",
        boxShadow: isHovered
          ? "0 28px 56px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 175, 55, 0.6), 0 0 40px rgba(212, 175, 55, 0.3)" // Enhanced shadow on hover
          : "0 12px 35px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15)", // Slightly stronger default shadow
        maxWidth: "380px",
        margin: "20px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)", // Smoother transition
        transform: isHovered ? "translateY(-12px) scale(1.03)" : "translateY(0) scale(1)", // More pronounced lift and scale
        backdropFilter: "blur(12px)", // Slightly more blur
        cursor: "pointer",
        willChange: "transform, box-shadow", // Optimize for animations
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
        background: "linear-gradient(45deg, rgba(212, 175, 55, 0.15), rgba(199, 112, 240, 0.15), rgba(78, 205, 196, 0.15))",
        backgroundSize: "400% 400%",
        animation: isHovered ? "gradientFlow 8s ease infinite" : "none", // Only animate on hover
        opacity: isHovered ? 0.8 : 0,
        transition: "opacity 0.4s ease", // Smoother opacity transition
        borderRadius: "20px",
        zIndex: 1
      }}></div>

      {/* Floating particles effect */}
      <div style={{
        position: "absolute",
        top: "25px",
        right: "25px",
        width: "8px", // Slightly larger particle
        height: "8px",
        background: "#d4af37",
        borderRadius: "50%",
        opacity: isHovered ? 1 : 0,
        transition: "opacity 0.3s ease",
        animation: "float 3.5s ease-in-out infinite", // Slightly varied animation
        zIndex: 3
      }}></div>

      <div style={{
        position: "absolute",
        top: "45px",
        right: "40px",
        width: "6px", // Slightly larger particle
        height: "6px",
        background: "#c770f0",
        borderRadius: "50%",
        opacity: isHovered ? 0.9 : 0, // Slightly more opaque
        transition: "opacity 0.3s ease 0.15s", // Delayed opacity transition
        animation: "float 3.8s ease-in-out infinite 1.2s", // Varied animation delay
        zIndex: 3
      }}></div>

      {/* Like button */}
      <div
        style={{
          position: "absolute",
          top: "20px", // Adjusted position
          left: "20px", // Adjusted position
          zIndex: 4,
          background: "rgba(255, 255, 255, 0.15)", // Slightly more prominent background
          backdropFilter: "blur(12px)",
          borderRadius: "50%",
          width: "45px", // Slightly larger button
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "scale(1)" : "scale(0.8)",
          boxShadow: isHovered ? "0 4px 15px rgba(0,0,0,0.3)" : "none", // Shadow for like button
        }}
        onClick={(e) => {
          e.stopPropagation();
          setIsLiked(!isLiked);
        }}
      >
        <FaHeart
          style={{
            color: isLiked ? "#ff4d6d" : "rgba(255, 255, 255, 0.7)", // More vibrant liked color
            fontSize: "18px", // Slightly larger icon
            transition: "all 0.3s ease",
            transform: isLiked ? "scale(1.3) rotate(5deg)" : "scale(1) rotate(0deg)" // More dynamic liked animation
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
              height: "240px", // Slightly taller image area
              width: "100%",
              transition: "transform 0.5s ease, filter 0.5s ease", // Smoother transition
              transform: isHovered ? "scale(1.15)" : "scale(1)", // More pronounced image zoom
              filter: isHovered ? "brightness(1.1) contrast(1.1) saturate(1.1)" : "brightness(1) contrast(1) saturate(1)" // Enhanced filter
            }}
          />

          {/* Image overlay gradient */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px", // Taller gradient overlay
            background: "linear-gradient(transparent, rgba(29, 29, 29, 0.9))", // Stronger gradient
            transition: "opacity 0.4s ease",
            opacity: isHovered ? 1 : 0.8 // Slightly more opaque on non-hover
          }}></div>
        </div>
      )}

      <Card.Body style={{ position: "relative", zIndex: 2, padding: "25px" }}> {/* More padding */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "18px" // Increased margin
        }}>
          <Card.Title
            style={{
              background: "linear-gradient(45deg, #d4af37, #ffd700, #ffec8b)", // Brighter gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: "900", // Bolder font weight
              fontSize: "1.5em", // Slightly larger font size
              marginBottom: "0",
              letterSpacing: "0.8px", // Tighter letter spacing
              flex: 1,
              transition: "transform 0.3s ease",
              transform: isHovered ? "translateX(5px)" : "translateX(0)" // Subtle slide on hover
            }}
          >
            {props.title}
          </Card.Title>

          {/* Rating stars */}
          <div style={{ display: "flex", gap: "3px", opacity: 0.8 }}> {/* Slightly more gap and opaque */}
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                style={{
                  color: "#ffd700", // All stars are gold
                  fontSize: "14px" // Slightly larger icon
                }}
              />
            ))}
          </div>
        </div>

        <Card.Text
          style={{
            color: "rgba(255, 255, 255, 0.95)", // More prominent text color
            fontSize: "1.05em", // Slightly larger font size
            marginBottom: "30px", // Increased margin
            lineHeight: "1.7", // Increased line height for readability
            fontWeight: "300",
            letterSpacing: "0.5px" // Slightly increased letter spacing
          }}
        >
          {props.description}
        </Card.Text>

        {/* Enhanced button section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px", // Increased gap
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
                  ? "linear-gradient(45deg, rgba(212, 175, 55, 0.25), rgba(255, 215, 0, 0.25))" // Stronger gradient on hover
                  : "transparent",
                color: "#d4af37",
                border: "2px solid transparent",
                backgroundImage: "linear-gradient(rgba(29, 29, 29, 1), rgba(29, 29, 29, 1)), linear-gradient(45deg, #d4af37, #ffd700)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                fontWeight: "700", // Bolder font weight
                textTransform: "uppercase",
                padding: "14px 22px", // Increased padding
                borderRadius: "30px", // More rounded corners
                fontSize: "0.9em", // Slightly larger font size
                letterSpacing: "0.8px", // Tighter letter spacing
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                minWidth: "110px", // Slightly larger min-width
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)", // Default shadow for buttons
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)"; // More pronounced lift
                e.target.style.boxShadow = "0 10px 30px rgba(212, 175, 55, 0.5)"; // Stronger shadow
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)"; // Reset to default shadow
              }}
            >
              <BsGithub style={{ marginRight: "10px", fontSize: "1.1em" }} /> {/* Larger icon */}
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
                  ? "linear-gradient(45deg, rgba(199, 112, 240, 0.25), rgba(147, 51, 234, 0.25))"
                  : "transparent",
                color: "#c770f0",
                border: "2px solid transparent",
                backgroundImage: "linear-gradient(rgba(29, 29, 29, 1), rgba(29, 29, 29, 1)), linear-gradient(45deg, #c770f0, #9333ea)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                fontWeight: "700",
                textTransform: "uppercase",
                padding: "14px 22px",
                borderRadius: "30px",
                fontSize: "0.9em",
                letterSpacing: "0.8px",
                transition: "all 0.3s ease",
                minWidth: "110px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 10px 30px rgba(199, 112, 240, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
              }}
            >
              <CgWebsite style={{ marginRight: "10px", fontSize: "1.1em" }} />
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
                  ? "linear-gradient(45deg, rgba(78, 205, 196, 0.25), rgba(32, 201, 151, 0.25))"
                  : "transparent",
                color: "#4ecdc4",
                border: "2px solid transparent",
                backgroundImage: "linear-gradient(rgba(29, 29, 29, 1), rgba(29, 29, 29, 1)), linear-gradient(45deg, #4ecdc4, #20c997)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                fontWeight: "700",
                textTransform: "uppercase",
                padding: "14px 22px",
                borderRadius: "30px",
                fontSize: "0.9em",
                letterSpacing: "0.8px",
                transition: "all 0.3s ease",
                minWidth: "110px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 10px 30px rgba(78, 205, 196, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
              }}
            >
              <FaEye style={{ marginRight: "10px", fontSize: "1.1em" }} />
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
        height: "4px", // Thicker line
        background: "linear-gradient(90deg, #d4af37, #ffd700, #c770f0, #9333ea, #4ecdc4, #20c997)", // More colors for gradient
        backgroundSize: "300% 100%", // Larger background size for smoother animation
        animation: isHovered ? "gradientSlide 4s ease infinite" : "none", // Only animate on hover, slightly faster
        opacity: isHovered ? 1 : 0,
        transition: "opacity 0.4s ease"
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
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); } // More pronounced float
        }
      `}</style>
    </Card>
  );
}

export default ProjectCards;
// Removed the Publications export to align with Annisa's project list.
// If you need a section for research publications, please provide a separate file or specify where to include them.