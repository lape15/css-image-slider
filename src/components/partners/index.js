import React, { useState, useEffect } from "react";
import "./index.css";

const Partners = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <div className="partners">
      <div className="mar-bt">
        <div className="partners-one">
          {" "}
          <h2 className={`${load ? "text" : "text-in"}`}>
            <div className="text1">Supporting</div>
            <div className="text2">Indigenous</div>
            <div className="text3">Enterprises.</div>
          </h2>
        </div>
        <div className={`partners-two  ${load ? "slide-up" : "slide-down"}`}>
          {" "}
          <h2>Our Partners</h2>
          <div className="text">
            Our promise is to provide the best solutions and products for our
            clients, and we are bound by our words. We work with various
            partners from different fields to ensure we do not fall short of our
            promise. We also provide services to our partners that helps them
            achieve their goals.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
