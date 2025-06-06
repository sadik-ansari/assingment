import React from "react";
import "./HeroSection.css";

const HeroSection = ({ setShowForm }) => {
  return (
    <>
      <div className="hero-section text-xl-center">
        <div className="title">
          <p className="m-auto">Simplify Your Life with Our Todo App</p>
        </div>
        <div className="subtitle">
          <p className="m-auto">
            Stay organized and boost your productivity with our intuitive todo
            website. Experience a modern approach to task management that fits
            your lifestyle.
          </p>
        </div>
        <div className="cta-button d-flex justify-content-center flex-wrap">
          <div className="get-start">
            <button className="fw-bold" onClick={() => setShowForm(true)}>
              Get Start
            </button>
          </div>
          <div className="learn-more">
            <button>Learn More</button>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default HeroSection;
