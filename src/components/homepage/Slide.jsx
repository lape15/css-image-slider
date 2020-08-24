import React from "react";

const Slide = ({ slide, active }) => {
  return (
    <div
      className={` slide ${active ? "hide-slide" : ""}`}
      style={{
        backgroundImage: `url(${require(`../../assets/${slide.backgroundImage}`)})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        zIndex: slide.zIndex,
      }}
    >
      <h2 className={`text ${active ? "hide-text" : ""}`}>
        <div className="text1">{slide.text.text1}</div>
        <div className="text2">{slide.text.text2}</div>
        <div className="text3">{slide.text.text1}</div>
      </h2>
      <button className={`btn ${active ? "hide-btn" : ""}`}>
        {slide.buttonText}
      </button>
    </div>
  );
};
export default Slide;
