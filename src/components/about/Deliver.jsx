import React, { useState } from "react";
import lady from "../../assets/lady.jpg";
const Testimonial = () => {
  const [nextActiveSlide, setNextActiveSlide] = useState([1, 2]);
  const [activeSlide, setActiveSlide] = useState(1);

  const nextSlide = (position) => {
    if (position === "previous" && activeSlide > 1) {
      setActiveSlide(activeSlide - 1);
      setNextActiveSlide([nextActiveSlide[0] - 1, nextActiveSlide[1] - 1]);
    } else if (position === "next" && activeSlide < 5) {
      setActiveSlide(activeSlide + 1);
      setNextActiveSlide([nextActiveSlide[0] + 1, nextActiveSlide[1] + 1]);
    } else if (typeof position === "number" && activeSlide < 5) {
      if (position === 1 || position === 2) {
        console.log("it is present", +position);
        setNextActiveSlide([...nextActiveSlide]);
      } else {
        setNextActiveSlide([nextActiveSlide[1], position]);
      }
      // setActiveSlide(position);
      // console.log(activeSlide, position);
      // setNextActiveSlide([nextActiveSlide[1], position]);
    }
  };
  console.log(nextActiveSlide);
  const checkArrActiveArray = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === n) {
        return true;
      }
    }
  };

  const switchClass = (n) => {
    let classes = "";
    if (checkArrActiveArray(nextActiveSlide, n) && activeSlide === n) {
      classes = "active-first";
    } else if (
      checkArrActiveArray(nextActiveSlide, n) &&
      activeSlide + 1 === n
    ) {
      classes = "active-second";
    }
    return classes;
  };
  return (
    <div className="testimonial-slider">
      <div className="slide-con">
        <div className={`slider ${switchClass(1)}`}>
          <blockquote>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Malesuada proin libero nunc consequat interdum varius sit amet
            mattis. Senectus et netus et malesuada fames ac turpis. Vel elit
            scelerisque mauris pellentesque.
          </blockquote>
          <div className="profile">
            {" "}
            <div className="title">
              <span>
                <b>Ladey Adeblack </b>
              </span>
              <br />
              <span className="ceo">CEO @ Black Rivers Real Estate</span>
            </div>
            <div className="img-con">
              <img src={lady} alt="lady" />
            </div>
          </div>
        </div>
        <div className={`slider ${switchClass(2)}`}>
          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Malesuada proin libero nunc consequat interdum varius sit amet
            mattis. Senectus et netus et malesuada fames ac turpis. Vel elit
            scelerisque mauris pellentesque.{" "}
          </blockquote>
          <div className="profile">
            {" "}
            <div className="title">
              <span>
                <b>Ladey Adeblack </b>
              </span>
              <br />
              <span className="ceo">CEO @ Black Rivers Real Estate</span>
            </div>
            <div className="img-con">
              <img src={lady} alt="lady" />
            </div>
          </div>
        </div>
        <div className={`slider ${switchClass(3)}`}>
          <blockquote>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Malesuada proin libero nunc consequat interdum varius sit amet
            mattis. Senectus et netus et malesuada fames ac turpis. Vel elit
            scelerisque mauris pellentesque.{" "}
          </blockquote>
          <div className="profile">
            {" "}
            <div className="title">
              <span>
                <b>Ladey Adeblack </b>
              </span>
              <br />
              <span className="ceo">CEO @ Black Rivers Real Estate</span>
            </div>
            <div className="img-con">
              <img src={lady} alt="lady" />
            </div>
          </div>
        </div>
        <div className={`slider ${switchClass(4)}`}>
          <blockquote>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Malesuada proin libero nunc consequat interdum varius sit amet
            mattis. Senectus et netus et malesuada fames ac turpis. Vel elit
            scelerisque mauris pellentesque.{" "}
          </blockquote>
          <div className="profile">
            {" "}
            <div className="title">
              <span>
                <b>Ladey Adeblack </b>
              </span>
              <br />
              <span className="ceo">CEO @ Black Rivers Real Estate</span>
            </div>
            <div className="img-con">
              <img src={lady} alt="lady" />
            </div>
          </div>
        </div>
        <div className={`slider ${switchClass(5)}`}>
          <blockquote>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Malesuada proin libero nunc consequat interdum varius sit amet
            mattis. Senectus et netus et malesuada fames ac turpis. Vel elit
            scelerisque mauris pellentesque.{" "}
          </blockquote>
          <div className="profile">
            {" "}
            <div className="title">
              <span>
                <b>Ladey Adeblack </b>
              </span>
              <br />
              <span className="ceo">CEO @ Black Rivers Real Estate</span>
            </div>
            <div className="img-con">
              <img src={lady} alt="lady" />
            </div>
          </div>
        </div>
      </div>
      <div className="controls">
        <div className="slider-controls">
          <button className="prev" onClick={() => nextSlide("previous")}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <div className="slider-dots">
            <button
              className={`dot ${activeSlide === 1 ? "active" : ""}`}
              onClick={() => {
                nextSlide(1);
              }}
            ></button>
            <button
              className={`dot ${activeSlide === 2 ? "active" : ""}`}
              onClick={() => {
                nextSlide(2);
              }}
            ></button>
            <button
              className={`dot ${activeSlide === 3 ? "active" : ""}`}
              onClick={() => {
                nextSlide(3);
              }}
            ></button>
            <button
              className={`dot ${activeSlide === 4 ? "active" : ""}`}
              onClick={() => {
                nextSlide(4);
              }}
            ></button>
            <button
              className={`dot ${activeSlide === 5 ? "active" : ""}`}
              onClick={() => {
                nextSlide(5);
              }}
            ></button>
          </div>
          <button
            className="next"
            onClick={() => {
              nextSlide("next");
            }}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="messages">
        <span>
          <b>See what we do for them </b>
        </span>
      </div>
    </div>
  );
};
export default Testimonial;
