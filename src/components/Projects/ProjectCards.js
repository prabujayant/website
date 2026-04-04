import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaEye, FaStar, FaHeart } from "react-icons/fa";

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
        aria-label="Like project"
      >
        <FaHeart className={`project-card-heart-icon ${isLiked ? 'liked' : ''}`} />
      </button>

      {props.imgPath && (
        <div className="project-card-image-wrapper">
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt={`${props.title} - Project showcase image`}
            className="project-card-image"
          />
          <div className="project-card-image-overlay"></div>
        </div>
      )}

      <Card.Body className="project-card-body">
        <div className="project-card-header">
          <Card.Title className="project-card-title">
            {props.title}
          </Card.Title>

          {/* Rating stars */}
          <div className="project-card-rating">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className="project-card-rating-star"
              />
            ))}
          </div>
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

          {props.demoLink && (
            <Button
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className="project-card-btn project-card-btn-demo"
            >
              <CgWebsite className="project-card-btn-icon" />
              {props.customButtonText || "Demo"}
            </Button>
          )}

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