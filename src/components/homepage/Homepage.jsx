import React, { useState } from "react";
import "./homepage.css";

const Homepage = (props) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [lastWheeled, setLastWheeled] = useState(0);

  const changeSlide = (position) => {
    if (position === "previous" && activeSlide > 1) {
      setActiveSlide(activeSlide - 1);
    } else if (position === "next" && activeSlide < 3) {
      setActiveSlide(activeSlide + 1);
    } else if (typeof position === "number") {
      setActiveSlide(position);
    }
  };

  const changeWheel = (e) => {
    const date = new Date().getTime() - lastWheeled;
    if (date > 2000) {
      if (e.deltaY < 0 && activeSlide > 1) {
        setActiveSlide(activeSlide - 1);
      } else if (e.deltaY > 0 && activeSlide < 3) {
        setActiveSlide(activeSlide + 1);
      }
      setLastWheeled(new Date().getTime());
    }
  };

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 40 && activeSlide < 3) {
      setActiveSlide(activeSlide + 1);
    } else if (e.keyCode === 38 && activeSlide > 1) {
      setActiveSlide(activeSlide - 1);
    }
  });
  return (
    <div>
      <div className="slide-controls">
        <button className="prev" onClick={() => changeSlide("previous")}>
          <i className="fas fa-arrow-up"></i>
        </button>
        <button className="next" onClick={() => changeSlide("next")}>
          <i className="fas fa-arrow-down"></i>
        </button>
      </div>
      <div className="slider-wrap" onWheel={(e) => changeWheel(e)}>
        <div className={`slide one ${activeSlide === 1 ? "show-slide" : ""}`}>
          <h2 className={`hide-text ${activeSlide === 1 ? "text" : ""}`}>
            <div className="text1">First text for slider</div>
            <div className="text2">Elder wand</div>
            <div className="text3">Slider.</div>
          </h2>
          <button
            className={`hide-btn ${activeSlide === 1 ? "btn" : ""}`}
            onClick={() => props.history.push("/about")}
          >
            About us
          </button>
        </div>
        <div className={`slide two ${activeSlide === 2 ? "show-slide" : ""}`}>
          <h2 className={`hide-text ${activeSlide === 2 ? "text" : ""}`}>
            <div className="text1">Second text for slider</div>
            <div className="text2">Fading in</div>
            <div className="text3">Owler.</div>
          </h2>
          <button className={`hide-btn ${activeSlide === 2 ? "btn" : ""}`}>
            Get to know us
          </button>
        </div>
        <div className={`slide three ${activeSlide === 3 ? "show-slide" : ""}`}>
          <h2 className={`hide-text ${activeSlide === 3 ? "text" : ""}`}>
            <div className="text1">Last text for slider</div>
            <div className="text2">Fading out</div>
            <div className="text3">Errol.</div>
          </h2>
          <button className={`hide-btn ${activeSlide === 3 ? "btn" : ""}`}>
            Explore our world
          </button>
        </div>
      </div>

      <div className="slide-dots">
        <button
          className={`dot ${activeSlide === 1 ? "active" : ""}`}
          onClick={() => changeSlide(1)}
        ></button>
        <button
          className={`dot ${activeSlide === 2 ? "active" : ""}`}
          onClick={() => changeSlide(2)}
        ></button>
        <button
          className={`dot ${activeSlide === 3 ? "active" : ""}`}
          onClick={() => changeSlide(3)}
        ></button>
      </div>
      <div className="social-icons">
        <a href="https://github.com">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://github.com">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};
export default Homepage;
