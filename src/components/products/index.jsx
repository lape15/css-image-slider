import React, { useState, useEffect } from "react";
import "./index.css";
import AOS from "aos";
import Testimonials from "./Testimonials";
import car from "../../assets/2.jpg";
const Products = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    AOS.init({
      // duration: 2000,
    });
  }, []);
  return (
    <section className="products">
      <div className="mar-bt">
        <div className="products-one">
          <h2 className={`${load ? "text" : "text-in"}`}>
            <div className="">Creating an</div>
            <div className="">African Tech</div>
            <div className="">Future.</div>
          </h2>
        </div>
        <div className={`products-two  ${load ? "slide-up" : "slide-down"}`}>
          {" "}
          <h2>Our Products</h2>
          <div className="text">
            Our design philosophy is simple: create real, unique, beautiful and
            compelling work. We deliver high-quality work through our focus on
            bidirectional communication, responsive customer service, client
            education, accurate project management, product quality and an
            ethical approach to business.
          </div>
        </div>
        <div className="featured">
          <h2>Featured products</h2>
          <div
            class="featured-item"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <section className="featured-item-msg">
              <h3 class="sub-header">Hospital Management Suite</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                accusamus optio sit vero nulla dolore corporis atque dicta
                itaque quibusdam officia quae ipsam reprehenderit recusandae
                consequatur, provident perferendis perspiciatis aut.
              </p>
            </section>
            <div className="featured-item-img one"></div>
          </div>

          <div
            class="featured-item"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <section className="featured-item-msg">
              <h3 class="sub-header">Archive & Library Management System</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                accusamus optio sit vero nulla dolore corporis atque dicta
                itaque quibusdam officia quae ipsam reprehenderit recusandae
                consequatur, provident perferendis perspiciatis aut.
              </p>
            </section>
            <div className="featured-item-img two"></div>
          </div>

          <div
            class="featured-item"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <section className="featured-item-msg">
              <h3 class="sub-header">Pension & Insurance Management System</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                accusamus optio sit vero nulla dolore corporis atque dicta
                itaque quibusdam officia quae ipsam reprehenderit recusandae
                consequatur, provident perferendis perspiciatis aut.
              </p>
            </section>
            <div className="featured-item-img three"></div>
          </div>
          <div
            class="featured-item"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <section className="featured-item-msg">
              <h3 class="sub-header">School Management Suite</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                accusamus optio sit vero nulla dolore corporis atque dicta
                itaque quibusdam officia quae ipsam reprehenderit recusandae
                consequatur, provident perferendis perspiciatis aut.
              </p>
            </section>
            <div className="featured-item-img four"></div>
          </div>
        </div>
        <Testimonials title="service" />
        <div className="best-service">
          <section className="service-text">
            <h2>Get the best solution</h2>
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
    </section>
  );
};

export default Products;
