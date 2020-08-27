import React, { useEffect, useState } from "react";
import "./about.css";
import AOS from "aos";
import tower from "../../assets/tower.jpg";
import "aos/dist/aos.css";
import user from "../../assets/user.svg";
import speed from "../../assets/speedometer.svg";
import briefcase from "../../assets/suitcase.svg";
import idea from "../../assets/idea.svg";
import Testimonial from "./Deliver";
import bacardi from "../../assets/sponsors/Bacardi_Logo_900.png";
import flower from "../../assets/sponsors/floral.jpg";
import fast from "../../assets/sponsors/21_fast_ever.png";
import kolo from "../../assets/sponsors/Koloroo.jpg";
import bird from "../../assets/sponsors/bird.png";
import dummy from "../../assets/sponsors/dummy.png";

const About = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    AOS.init({
      // delay: 700,
      // offset: 400,
      duration: 2800,
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
          <img src={tower} alt="tower" data-aos="slide-up" className="img" />
        </div>
      </div>
      <div className="container-four">
        <div className="deli-atrr">
          <h2>DELIVER</h2>
          <div
            className="deli-box"
            data-aos="slide-up"
            data-aos-duration="2800"
            data-aos-delay="170"
          >
            <div className="item-box one" data-aos="flip-up">
              <img src={user} alt="user" />
              <div>Dependable</div>
            </div>
            <div className="item-box two" data-aos="flip-up">
              <img src={speed} alt="rocket" />
              <div>Effecient</div>
            </div>
            <div className="item-box three" data-aos="flip-up">
              <img src={briefcase} alt="boss" />
              <div>Leader</div>
            </div>
            <div className="item-box four" data-aos="flip-up">
              <img src={idea} alt="rocket" />
              <div>Innovative</div>
            </div>
          </div>
          <div
            className="deli-box two"
            data-aos="slide-up"
            data-aos-duration="2900"
            data-aos-delay="200"
          >
            <div
              className="item-box two"
              data-aos="flip-up"
              data-aos-delay="500"
            >
              <img src={speed} alt="rocket" />
              <div>Versatile</div>
            </div>
            <div
              className="item-box two"
              data-aos="flip-up"
              data-aos-delay="500"
            >
              <img src={speed} alt="rocket" />
              <div>Energetic</div>
            </div>
            <div
              className="item-box three"
              data-aos="flip-up"
              data-aos-delay="500"
            >
              <img src={briefcase} alt="boss" />
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
            <img src={bacardi} alt="bacardi" />
          </div>
          <div className="w-15">
            <img src={flower} alt="flower" />
          </div>
          <div className="w-15">
            <img src={fast} alt="fast" />
          </div>
          <div className="w-15">
            <img src={bird} alt="kolo" />
          </div>
          <div className="w-15 index">
            <img src={kolo} alt="bird" />
          </div>
          <div className="w-15 index">
            <img src={dummy} alt="woody" className="woody" />
          </div>
        </div>
        <div className="contact">
          {" "}
          <div className="message-one">
            <h3>Get in touch</h3>{" "}
            <span>
              Our core cometence lies in being backed by seasoned operation
              teamsand partners that have extensive technological knowledge and
              experience in the following areas
            </span>
            <button>Reach out now</button>
          </div>
          <div className="message-two"></div>
        </div>
      </div>
    </div>
  );
};
export default About;
