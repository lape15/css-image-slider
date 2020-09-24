import React, { useState, useEffect } from "react";
import "./index.css";
import bafaj from "../../assets/sponsors/better/3.png";
import flower from "../../assets/sponsors/better/2.png";
import fluid from "../../assets/sponsors/better/4.png";
import coffee from "../../assets/sponsors/better/5.png";
import AOS from "aos";

const Partners = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    AOS.init();
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
        <div className="major-partners">
          <h2>Major Partners</h2>
          <section
            className="partner-con"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            <div className="top">
              <img src={bafaj} alt="bafaj" className="partner-img" />{" "}
              <h3>Bafaj Group</h3>
            </div>{" "}
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                accusamus optio sit vero nulla dolore corporis atque dicta
                itaque quibusdam officia quae ipsam reprehenderit recusandae
                consequatur, provident perferendis perspiciatis aut.
              </p>
            </div>
          </section>

          <section
            className="partner-con"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            <div className="top">
              <img src={flower} alt="flower" className="partner-img" />{" "}
              <h3>Company name</h3>
            </div>{" "}
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                accusamus optio sit vero nulla dolore corporis atque dicta
                itaque quibusdam officia quae ipsam reprehenderit recusandae
                consequatur, provident perferendis perspiciatis aut.
              </p>
            </div>
          </section>
          <section
            className="partner-con"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            <div className="top">
              <img src={flower} alt="fluid" className="partner-img" />{" "}
              <h3>Company name</h3>
            </div>{" "}
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                accusamus optio sit vero nulla dolore corporis atque dicta
                itaque quibusdam officia quae ipsam reprehenderit recusandae
                consequatur, provident perferendis perspiciatis aut.
              </p>
            </div>
          </section>
          <section
            className="partner-con"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            <div className="top">
              <img src={coffee} alt="flower" className="partner-img" />{" "}
              <h3>Company name</h3>
            </div>{" "}
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                accusamus optio sit vero nulla dolore corporis atque dicta
                itaque quibusdam officia quae ipsam reprehenderit recusandae
                consequatur, provident perferendis perspiciatis aut.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Partners;
