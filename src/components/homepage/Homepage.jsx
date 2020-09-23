import React, { useState } from "react";
import "./homepage.css";

const Homepage = (props) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [lastWheeled, setLastWheeled] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

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
        <button
          className={`prev ${clicked ? "dashed" : ""}`}
          onClick={() => {
            handleClicked();
            changeSlide("previous");
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
        <button
          className={`next ${clicked ? "dashed" : ""}`}
          onClick={() => {
            handleClicked();
            changeSlide("next");
          }}
        >
          <i className="fas fa-arrow-down"></i>
        </button>
      </div>
      <div className="slider-wrap" onWheel={(e) => changeWheel(e)}>
        <div className={`slide one ${activeSlide === 1 ? "show-slide" : ""}`}>
          <h2
            className={`text  ${
              activeSlide === 1 ? "show-text" : " hide-text"
            }`}
          >
            <div className="text1">Pioneering</div>
            <div className="text2">Africa's</div>
            <div className="text3">Innovation.</div>
          </h2>
          <button
            className={`hide-btn ${activeSlide === 1 ? "btn" : ""}`}
            onClick={() => props.history.push("/about")}
          >
            About us
          </button>
        </div>
        <div className={`slide two ${activeSlide === 2 ? "show-slide" : ""}`}>
          <h2
            className={`text ${activeSlide === 2 ? "show-text" : "hide-text"}`}
          >
            <div className="text1">Providing</div>
            <div className="text2">Elegant</div>
            <div className="text3">Solutions.</div>
          </h2>
          <button
            className={`hide-btn ${activeSlide === 2 ? "btn" : ""}`}
            onClick={() => props.history.push("/services")}
          >
            Services
          </button>
        </div>
        <div className={`slide three ${activeSlide === 3 ? "show-slide" : ""}`}>
          <h2
            className={`text ${activeSlide === 3 ? "show-text" : "hide-text"}`}
          >
            <div className="text1">Creating an</div>
            <div className="text2">African Tech</div>
            <div className="text3">Future.</div>
          </h2>
          <button
            className={`hide-btn ${activeSlide === 3 ? "btn" : ""}`}
            onClick={() => props.history.push("/products")}
          >
            Our products
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
