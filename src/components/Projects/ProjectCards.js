import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaEye, FaHeart, FaBookOpen } from "react-icons/fa";

function isInternalLink(url) {
  return typeof url === "string" && url.startsWith("/");
}

function ProjectCards(props) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card
      className="project-card-view"
    >
      {/* Animated background gradient overlay */}
      <div className="project-card-gradient-overlay"></div>

      {/* Floating particles effect */}
      <div className="project-card-particle"></div>
      <div className="project-card-particle secondary"></div>

      {/* Like button */}
      <button
        className="project-card-like-btn"
        onClick={(e) => {
          e.stopPropagation();
          setIsLiked(!isLiked);
        }}
        type="button"
        aria-label={isLiked ? `Unlike ${props.title}` : `Like ${props.title}`}
        aria-pressed={isLiked}
      >
        <FaHeart className={`project-card-heart-icon ${isLiked ? 'liked' : ''}`} />
      </button>

      {props.imgPath ? (
        <div className="project-card-image-wrapper">
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt={`${props.title} - Project showcase image`}
            className="project-card-image"
            loading="lazy"
          />
          <div className="project-card-image-overlay" aria-hidden="true"></div>
        </div>
      ) : (
        <div className="project-card-placeholder" aria-hidden="true">
          <FaBookOpen />
        </div>
      )}

      <Card.Body className="project-card-body">
        <div className="project-card-header">
          <Card.Title className="project-card-title">
            {props.title}
          </Card.Title>
        </div>

        <Card.Text className="project-card-description">
          {props.description}
        </Card.Text>

        {/* Button section */}
        <div className="project-card-buttons">
          {props.ghLink && (
            <Button
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
              className="project-card-btn project-card-btn-github"
            >
              <BsGithub className="project-card-btn-icon" />
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {props.demoLink &&
            (isInternalLink(props.demoLink) ? (
              <Button
                as={Link}
                to={props.demoLink}
                className="project-card-btn project-card-btn-demo"
              >
                <CgWebsite className="project-card-btn-icon" />
                {props.customButtonText || "Demo"}
              </Button>
            ) : (
              <Button
                href={props.demoLink}
                target="_blank"
                rel="noreferrer"
                className="project-card-btn project-card-btn-demo"
              >
                <CgWebsite className="project-card-btn-icon" />
                {props.customButtonText || "Demo"}
              </Button>
            ))}

          {props.viewLink && (
            <Button
              href={props.viewLink}
              target="_blank"
              rel="noreferrer"
              className="project-card-btn project-card-btn-view"
            >
              <FaEye className="project-card-btn-icon" />
              View
            </Button>
          )}
        </div>
      </Card.Body>

      {/* Bottom accent line */}
      <div className="project-card-accent-line"></div>
    </Card>
  );
}

export default ProjectCards;