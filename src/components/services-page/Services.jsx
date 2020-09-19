import React, { useState, useEffect } from "react";
import "./services.css";
import Footer from "../about/Footer";
import software from "../../assets/sub_Images/software.svg";
import network from "../../assets/sub_Images/network.svg";
const Services = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);
  console.log(load);
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
          Section three about to bang yo
          <div className="services-container">
            <div className="first_service">
              <div className="inner_first_software">
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
            <div className="second_service">
              <div className="inner_first_networking">
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
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Services;
