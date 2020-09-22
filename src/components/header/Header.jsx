import React, { useState, useRef, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Header = () => {
  const [fixed, setFixed] = useState(false);
  let ref = useRef(null);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       // if (entry.isIntersecting) {
  //       //   console.log(entry);
  //       //   console.log(ref.current);
  //       //   ref.current.classList.add("absolute");
  //       // }
  //       if (entry.intersectionRatio.toFixed(7) < 0.000012) {
  //         ref.current.classList.add("fixed");
  //       } else if (entry.intersectionRatio.toFixed(2) > 0.68) {
  //         console.log(entry);
  //         console.log(ref.current);
  //         // ref.current.classList.remove("fixed");
  //       }
  //     },
  //     {
  //       threshold: [1.0, 0.58, 0.48, 0.68, 0.000012],
  //       root: null,
  //       rootMargin: "0px",
  //     }
  //   );
  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }
  // });

  const listenScrollEvent = (e) => {
    if (window.scrollY >= 400) {
      setFixed(true);
    } else if (window.scrollY < 400) {
      setFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  return (
    <header ref={ref} className={`${fixed ? "fixed" : "absolute"}`}>
      <div className="image-con">
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul>
        <li>
          <i className="fas fa-phone pho"></i>+234 894 567 876
        </li>
        <li className="rights">
          <i className="far fa-envelope-open"></i>random@gmail.com
        </li>
      </ul>
    </header>
  );
};

export default Header;
