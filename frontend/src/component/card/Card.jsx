import React from "react";
import icon from "../../assets/icon.png";
import logoipsum from "../../assets/Logoipsum.png";
import "./Card.css";
import bgImage from "../../assets/image.png";
import youtube from "../../assets/youtube.png";
import pintesrest from "../../assets/pinterest-logo.png";
import twitch from "../../assets/Vector.png";

const Card = () => {
  return (
    <>
      <div className="main-section">
        <div className="card d-flex justify-content-between flex-row flex-wrap m-auto">
          <div className="card-left ">
            <p className="text-xl-start">
              <span id="color-half">Organize</span>.<br />
              Achieve.
              <br />
              Relax.
            </p>
            <p>
              Turn clutter into clarity, chaos into control, and dreams into
              done. <br />
              Visions into market success.
            </p>

            <div className="card-left-button d-flex flex-wrap">
              <button className="btn-one">Get Start Today</button>
              <button className="btn-two">Discover Features</button>
            </div>
          </div>
          <div
            className="card-right d-flex justify-content-between flex-column"
            style={{
              backgroundImage: `linear-gradient(rgba(216, 67, 67, 0.37), rgba(252, 252, 252, 0.28)),  url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="card-right-upper d-flex justify-content-between align-items-center">
              <p>
                <span id="color-half">Your Task</span> <br /> Our Tools
              </p>
              <div className="dots">
                <i
                  className="fa-solid fa-ellipsis"
                  style={{ color: " #ffffff" }}
                ></i>
              </div>
            </div>
            <div className="card-right-middle d-flex justify-content-between align-items-center">
              <div className="left-slider">
                <i className="fa-solid fa-angle-left"></i>
              </div>
              <div className="right-slider">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div className="card-right-lower d-flex justify-content-between align-items-center">
              <div className="text">
                <div className="text-logo">
                  <img src={logoipsum} alt="" />
                </div>
                <p>Freddie Halvorson</p>
                <p>Chief Productivity Enthusiast</p>
              </div>
              <div className="play-btn">
                <img src={icon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="trusted-brand d-flex flex-wrap justify-content-between">
          <div className="google">
            <p className="text-xl-center">Google</p>
          </div>
          <div className="facebook">
            <p className="text-xl-center">facebook</p>
          </div>
          <div className="youtube d-flex align-items-center">
            <i class="fa-brands fa-youtube" style={{ color: "#170f49;" }}></i>
            <p className="text-xl-center">Youtube</p>
          </div>
          <div className="pinterest d-flex align-items-center">
            <i class="fa-brands fa-pinterest" style={{ color: "#170f49;" }}></i>
            <p className="text-xl-center">Pinterest</p>
          </div>
          <div className="twitch">
            <img src={twitch} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
