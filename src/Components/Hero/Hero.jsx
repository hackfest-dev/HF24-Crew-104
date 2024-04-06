import React from "react";
import "./Hero.css";

function Hero() {
  const handleRegisterButtonClick = () => {
    window.location.href = "/register";
  };

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Connecting Fields to Markets, One Click at a Time</h1>
        <p>
          Unlocking the potential of small-scale farming, together with a
          seamless digital bridge between fields and markets, fostering growth
          and sustainability hand in hand, while revolutionizing logistics for a
          more efficient future.
        </p>
        <button className="btn" onClick={handleRegisterButtonClick}>
          Register today!
        </button>
      </div>
    </div>
  );
}

export default Hero;
