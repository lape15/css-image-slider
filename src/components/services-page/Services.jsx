import React, { useState, useEffect } from "react";
import "./services.css";
import Footer from "../about/Footer";
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
        <div className="services">
          Section three about to bang yo
          <div className="services-container">Service items</div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Services;
