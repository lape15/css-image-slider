import React, { useEffect, useState } from "react";
import "./about.css";
import AOS from "aos";
import tower from "../../assets/tower.jpg";
import "aos/dist/aos.css";

import dependable from "../../assets/deliver/dependable.svg";
import efficient from "../../assets/deliver/efficient.svg";
import leader from "../../assets/deliver/leader.svg";
import innovative from "../../assets/deliver/innovative.svg";
import responsible from "../../assets/deliver/responsible.svg";
import versatile from "../../assets/deliver/versatile.svg";
import energetic from "../../assets/deliver/energetic.svg";

import Testimonial from "./Deliver";
import first from "../../assets/sponsors/better/1.png";
import second from "../../assets/sponsors/better/2.png";
import third from "../../assets/sponsors/better/3.png";
import fourth from "../../assets/sponsors/better/4.png";
import five from "../../assets/sponsors/better/5.png";
import six from "../../assets/sponsors/better/6.png";
import bump from "../../assets/4.jpg";

const About = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    setLoad(true);
  }, []);

  return (
    <div className="abt-container">
      {" "}
      <div className="mar-bt">
        <div className="container-one">
          <h2 className={` ${load ? "text" : "text-in"}`}>
            <div className="">Pioneering</div>
            <div className="">Africa's</div>
            <div className="">Innovation.</div>
          </h2>
        </div>
        <div className={`container-two ${load ? "slide-up" : "slide-down"}`}>
          <h2>About us</h2>
          <div className="text">
            TechnoPro Consulting Ltd. combines strategic thinking and emerging
            technologies to provide innovatie, techonology centered solutions
            that consistently breaks new ground. Since the establishement of our
            noble firm, we have professionally focused on transforming how
            people think about and experiennce products and services.
          </div>
        </div>
        <div className="container-three">
          <div className="item-one">
            <div
              className="content"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-offset="100"
            >
              <h6>Our vision</h6>
              <span>
                Providing sustainable and affordable world class solutions.
              </span>
            </div>
            <div
              className="content"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-offset="100"
            >
              <h6>Our mission</h6>
              <span>
                Reaching capacity building through cost effective and
                competitive brand building
              </span>
            </div>
            <div
              className="content"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-offset="100"
            >
              <h6>Our responsibiliy</h6>
              <span>
                Elder wand pride itself in qualitfy service delivery.It makes
                sure set deadlines are met on every projects
              </span>
            </div>
          </div>
          <div className="item-two">
            <img src={tower} alt="tower" data-aos="slide-up" className="img" />
          </div>
        </div>
        <div className="container-four">
          <div className="deli-atrr">
            <h2>DELIVER</h2>
            <div className="deli-box">
              <div
                className="item-box"
                data-aos="flip-up"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <img src={dependable} alt="user" />
                <div>Dependable</div>
              </div>
              <div
                className="item-box"
                data-aos="flip-up"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <img src={efficient} alt="rocket" />
                <div>Effecient</div>
              </div>
              <div
                className="item-box"
                data-aos="flip-up"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <img src={leader} alt="boss" />
                <div>Leader</div>
              </div>
              <div
                className="item-box"
                data-aos="flip-up"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <img src={innovative} alt="rocket" />
                <div>Innovative</div>
              </div>

              <div
                className="item-bo"
                data-aos="flip-up"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <img src={versatile} alt="rocket" />
                <div>Versatile</div>
              </div>
              <div
                className="item-bo"
                data-aos="flip-up"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <img src={energetic} alt="rocket" />
                <div>Energetic</div>
              </div>
              <div
                className="item-box"
                data-aos="flip-up"
                data-aos-delay="200"
                data-aos-duration="500"
              >
                <img src={responsible} alt="boss" />
                <div>Responsible</div>
              </div>
            </div>

            <div className="message">
              <span role="img" aria-label="emoji">
                ...and they <i className="fas fa-heart"></i> it.
              </span>
            </div>
          </div>
        </div>
        <Testimonial />
        <div className="container-five">
          <div className="logos">
            <div className="w-15">
              <img src={first} alt="bacardi" />
            </div>
            <div className="w-15">
              <img src={second} alt="flower" />
            </div>
            <div className="w-15">
              <img src={third} alt="fast" />
            </div>
            <div className="w-15">
              <img src={fourth} alt="kolo" />
            </div>
            <div className="w-15 index">
              <img src={five} alt="bird" />
            </div>
            <div className="w-15 index">
              <img src={six} alt="woody" className="woody" />
            </div>
          </div>
          <div className="contact">
            {" "}
            <div className="message-one">
              <h3>Get in touch</h3>{" "}
              <span>
                Our core cometence lies in being backed by seasoned operation
                teamsand partners that have extensive technological knowledge
                and experience in the following areas
              </span>
              <button>Reach out now</button>
            </div>
            <div className="message-two">
              <img
                src={bump}
                alt="bump"
                data-aos="slide-up"
                // data-aos-delay="500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
