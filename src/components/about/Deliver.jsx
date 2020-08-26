import React, { useState } from "react";
import lady from "../../assets/lady.jpg";
const Testimonial = () => {
  const [nextActiveSlide, setNextActiveSlide] = useState([1, 2]);

  let activeSlide = 2;
  const nextSlide = (position) => {
    let newArray = nextActiveSlide;
    let snippedArray;
    if (position === "previous" && nextActiveSlide > 1) {
      activeSlide = activeSlide - 1;
      snippedArray = newArray.splice(newArray.length - 1, 1);
      newArray.unshift(activeSlide);
      setNextActiveSlide(snippedArray);
      console.log(nextActiveSlide, snippedArray);
    } else if (position === "next" || nextActiveSlide < 5) {
      activeSlide = activeSlide + 1;
      snippedArray = newArray.splice(newArray[0], 1);
      snippedArray.push(activeSlide);
      console.log(activeSlide, snippedArray);
      setNextActiveSlide(snippedArray);
      console.log(nextActiveSlide);
    } else if (typeof position === "number" && activeSlide < 5) {
      activeSlide = activeSlide + 1;
    }
  };

  const checkArrActiveArray = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === n) {
        return true;
      }
    }
  };

  const switchClass = (n) => {
    if (checkArrActiveArray(nextActiveSlide, n)) {
      return "active";
    }
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
            <button className="dot"></button>
            <button className="dot"></button>
            <button className="dot"></button>
            <button className="dot"></button>
            <button className="dot"></button>
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
    </div>
  );
};
export default Testimonial;
