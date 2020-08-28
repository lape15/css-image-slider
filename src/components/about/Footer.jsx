import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-first">
        <div className="side-one">
          <div className="word">
            <p>
              TechnoPro consulting combines startegic thinking and emerging
              technologies to provide innovative, technology-centered, soluties
              that constantly break new ground.Since the establishment of our
              noble firm, we have professionally fpcused on transforming how
              people think about and experience a
              product,services,activity,company and place. Our design philosopy
              is simple: create real, unique, beautiful and compelling work. We
              deliver high-quality work through our focus on bidirectional
              communication, responsive customer service, clien education,
              accurate project management, product quality, and an ethical
              approach to business
            </p>
            <div className="values">
              <h6>Our Values</h6>
              <p>
                <span>Dependable</span> <span> Effeciency</span>
                <span> Innovation</span>
                <span> Leadership</span> <span> Versatility</span>{" "}
                <span> Energetic</span> <span> Responsibility</span>
              </p>
            </div>
          </div>
        </div>
        <div className="side-two">
          {" "}
          <div className="value">
            <h6>Our services</h6>
            <ul>
              <li className="lis">Corporate Suite Web and App Development</li>
              <li>Network & Cabling services</li>
              <li>Corporate Branding</li>
              <li>Electrical Services</li>
              <li>Technical Maintenance, Sales & Supply Servces</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="value">
            <h6>Our Company</h6>
            <Link to={"/"} className="link">
              About us
            </Link>
            <Link to={"/"} className="link">
              Our services
            </Link>
            <Link to={"/"} className="link">
              Our products
            </Link>
            <Link to={"/"} className="link">
              Our partners
            </Link>
            <Link to={"/"} className="link">
              Our team
            </Link>
            <Link to={"/"} className="link">
              Reach out
            </Link>
            <ul>
              <li className="dir">
                <i class="fas fa-map-marker pho"></i>10 Emina crescent, off
                Toyin St, 100212, ikeja.
              </li>
              <li className="dir">
                <i className="fas fa-phone pho"></i>+234 894 567 876
              </li>
              <li className="rights dir">
                <i className="far fa-envelope-open"></i>random@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="black">Copyright 2020 TechnoPro Consulting Ltd.</div>
    </div>
  );
};

export default Footer;
