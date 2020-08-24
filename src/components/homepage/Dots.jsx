import React from "react";

const Dot = ({ active, indexSlide, index }) => (
  <button
    className={`dot ${active ? "active" : ""}`}
    onClick={() => indexSlide(index)}
  ></button>
);

const Dots = ({ slides, activeSlide, indexSlide }) => {
  return (
    <div className="slide-dots">
      {slides.map((slide, index) => (
        <Dot
          key={slide.id}
          active={activeSlide === index}
          indexSlide={indexSlide}
          index={index}
        />
      ))}
    </div>
  );
};
export default Dots;
