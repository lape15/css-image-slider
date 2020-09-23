import React, { useState, useEffect } from "react";
import "./services.css";
import Footer from "../about/Footer";
import software from "../../assets/sub_Images/software.svg";
import network from "../../assets/sub_Images/network.svg";
import branding from "../../assets/sub_Images/branding.svg";
import electrical from "../../assets/sub_Images/electrical.svg";
import supply from "../../assets/sub_Images/supply.svg";
import security from "../../assets/sub_Images/security.svg";
import Proficiencies from "./Proficiency";
import AOS from "aos";
import "aos/dist/aos.css";
import car from "../../assets/2.jpg";
const Services = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    AOS.init({
      // duration: 2000,
    });
  }, []);

  return (
    <section className={`services`}>
      <div className="mar-bt">
        {" "}
        <div className="service-one">
          <h2 className={`${load ? "text" : "text-in"}`}>
            <div className="">Providing</div>
            <div className="">Elegant</div>
            <div className="">Solutions.</div>
          </h2>
        </div>
        <div className={`service-two  ${load ? "slide-up" : "slide-down"}`}>
          {" "}
          <h2>Our services</h2>
          <div className="text">
            Our years of experience in different capacities ensures that when we
            deploy solutions for our clients based on their communicated needs
            and set goals, they can be sure that they are getting the best there
            is to offer. We are backed by seasoned teams and partners with
            extensive knowledge and experience in the following areas.
          </div>
        </div>
        <div className="services-main">
          <div className="services-container">
            <div
              className="_service"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="inner _software">
                <img src={software} alt="software" className="img" />
                <h3 className="title">Enterprise software development </h3>
              </div>
              <div className="inner_second">
                <ul className="list">
                  <li>Website design, development and maintenance</li>
                  <li>Mobile and desktop appliction development</li>
                  <li>Software infrastructure management</li>
                  <li>Software development traning and consultancy</li>
                </ul>
              </div>
            </div>
            <div
              className="_service"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="inner _networking">
                <img src={network} alt="network" className="img" />
                <h3 className="title">Networking and cabling</h3>
              </div>
              <div className="inner_second">
                {" "}
                <ul className="list">
                  <li>LAN, WAN, WLAN, PAN, etc.</li>
                  <li>Computer networks</li>
                  <li>Structured cabling</li>
                  <li>Distributed Antenna Systems (DAS)</li>
                  <li>Network security systems</li>
                </ul>
              </div>
            </div>
            <div
              className="_service"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="inner _branding">
                <img src={branding} alt="branding" className="img" />
                <h3 className="title">Corprate branding</h3>
              </div>
              <div className="inner_second">
                {" "}
                <ul className="list">
                  <li>Advertising, marketing and corporate promotions</li>
                  <li>Idea generation and conceptualization</li>
                  <li>Corporate events seasonal design and printing</li>
                  <li>Business procurement</li>
                  <li>Business consultancy</li>
                </ul>
              </div>
            </div>
            <div
              className="_service"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="inner _electrical">
                <img src={electrical} alt="electrical" className="img" />
                <h3 className="title">Electrical services</h3>
              </div>
              <div className="inner_second">
                {" "}
                <ul className="list">
                  <li>Electrical conduit and surface wiring</li>
                  <li>Electrical equipments and appliances intsallation</li>
                  <li>Industrial generator installation</li>
                  <li>Alternate power source systems</li>
                </ul>
              </div>
            </div>
            <div
              className="_service"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="inner _supply">
                <img src={supply} alt="supply" className="img" />
                <h3 className="title">Supply and maintenance</h3>
              </div>
              <div className="inner_second">
                {" "}
                <ul className="list">
                  <li>Computer system supply, repair and maintenance</li>
                  <li>Electrical material sales and supply</li>
                  <li>Systems integration</li>
                  <li>IT equipment sales and supply</li>
                </ul>
              </div>
            </div>
            <div
              className="_service"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="inner _security">
                <img src={security} alt="security" className="img" />
                <h3 className="title">Security</h3>
              </div>
              <div className="inner_second">
                {" "}
                <ul className="list">
                  <li>
                    Closed Circuit Television (CCTV) and surveillance camera
                    (IPTV)
                  </li>
                  <li>PABX / PBX / Voice over Internet Protocol (VoIP)</li>
                  <li>Access control & video door phone system</li>
                  <li>Audio and video intercom</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Proficiencies AOS={AOS} />
        <div className="best-service">
          <section className="service-text">
            <h2>Get the best service</h2>
            <p>
              Our core competence lies in being backed by seasoned operation
              teams and partners that has extensive technological knowledge and
              experience in the following areas. Reach out now
            </p>

            <button className="best-service-btn">Reach out now</button>
          </section>
          <div className="car-con">
            <img className="car-img" src={car} alt="car" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Services;
