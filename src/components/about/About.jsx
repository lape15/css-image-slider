import React, { useEffect, useState } from "react";
import "./about.css";
import AOS from "aos";
import tower from "../../assets/tower.jpg";
import "aos/dist/aos.css";
import Deliver from "./Deliver";

const About = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    AOS.init({
      // delay: 700,
      // offset: 400,
      duration: 1500,
    });
    setLoad(true);
  }, []);

  return (
    <div className="abt-container">
      {" "}
      <div className="container-one">
        <h2 className={` ${load ? "text" : "text-in"}`}>
          <div className="">First text for slider</div>
          <div className="">Elder wand</div>
          <div className="">Slider.</div>
        </h2>
      </div>
      <div className={`container-two ${load ? "slide-up" : "slide-down"}`}>
        <h2>About us</h2>
        <div className="text">
          TechnoPro Consulting Ltd. combines strategic thinking and emerging
          technologies to provide innovatie, techonology centered solutions that
          consistently breaks new ground. Since the establishement of our noble
          firm, we have professionally focused on transforming how people think
          about and experiennce products and services.
        </div>
      </div>
      <div className="container-three">
        <div className="item-one">
          <div className="content" data-aos="slide-right">
            <h6>Our vision</h6>
            <span>
              Providing sustainable and affordable world class solutions.
            </span>
          </div>
          <div className="content" data-aos="slide-right">
            <h6>Our mission</h6>
            <span>
              Reaching capacity building through cost effective and competitive
              brand building
            </span>
          </div>
          <div className="content" data-aos="slide-right">
            <h6>Our responsibiliy</h6>
            <span>
              Elder wand pride itself in qualitfy service delivery.It makes sure
              set deadlines are met on every projects
            </span>
          </div>
        </div>
        <div className="item-two">
          <img
            src={tower}
            alt="tower"
            data-aos="slide-up"
            className="img"
            // data-aos-delay="1200"
          />
        </div>
      </div>
      <Deliver />
    </div>
  );
};
export default About;
