import React, { useState, useRef, useEffect } from "react";
import "./menu-items.css";

const MenuItems = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [fixed, setFixed] = useState(false);
  let ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio.toFixed(2) < 0.98) {
          setFixed(true);
        } else if (entry.intersectionRatio.toFixed(1) > 0.6) {
        }
      },
      {
        threshold: [1.0, 0.58, 0.48, 0.98, 0.000012],
        root: null,
        rootMargin: "0px",
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  });
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div ref={ref} className={`menu-box ${fixed ? "fixed" : ""}`}>
      <div
        className={`menu-btn ${showMenu ? "right" : ""}`}
        onClick={handleMenu}
      >
        <span className={`burger ${showMenu ? "open" : ""}`}></span>
      </div>

      <div className="menu-items">
        <div className={`box about ${showMenu ? "shrink" : ""}`}>
          <i className="fas fa-info-circle em"></i>About
        </div>
        <div className={`box services ${showMenu ? "shrink-one" : ""}`}>
          <i className="fas fa-wrench em"></i>Services
        </div>
        <div className={`box products ${showMenu ? "shrink-two" : ""}`}>
          <i className="fas fa-wrench em"></i>Products
        </div>
        <div className={`box partners ${showMenu ? "shrink-three" : ""}`}>
          <i className="fas fa-handshake em"></i>Partners
        </div>
        <div className={`box team ${showMenu ? "shrink-four" : ""}`}>
          <i className="fas fa-user-friends em"></i>Team
        </div>
        <div className={`box contact ${showMenu ? "shrink-five" : ""}`}>
          <i className="fas fa-mail-bulk em"></i>Contact
        </div>
      </div>
    </div>
  );
};
export default MenuItems;
