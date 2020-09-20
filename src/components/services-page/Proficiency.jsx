import React, { useEffect, useState } from "react";
import angular from "../../assets/profs/angular.png";
import aws from "../../assets/profs/aws.png";
import bootstrap from "../../assets/profs/bootstrap.png";
import brandkit from "../../assets/profs/brandkit.png";
import coreldraw from "../../assets/profs/coreldraw.png";
import crazyegg from "../../assets/profs/crazyegg.png";
import creativeCloud from "../../assets/profs/creativeCloud.png";
import figma from "../../assets/profs/figma.png";
import flutter from "../../assets/profs/flutter.png";
import frontify from "../../assets/profs/frontify.png";
import googleCloud from "../../assets/profs/googleCloud.png";
import gsap from "../../assets/profs/gsap.png";
import icinga from "../../assets/profs/icinga.png";
import invision from "../../assets/profs/invision.png";
import ionic from "../../assets/profs/ionic.png";
import laravel from "../../assets/profs/laravel.png";
import lottie from "../../assets/profs/lottie.png";
import magento from "../../assets/profs/magento.png";
import manageEngine from "../../assets/profs/manageEngine.png";
import nagios from "../../assets/profs/nagios.png";
import node from "../../assets/profs/node.png";
import python from "../../assets/profs/python.png";
import react from "../../assets/profs/react.png";
import reolink from "../../assets/profs/reolink.png";
import ring from "../../assets/profs/ring.png";
import safire from "../../assets/profs/safire.png";
import solarwinds from "../../assets/profs/solarwinds.png";
import swift from "../../assets/profs/swift.png";
import vue from "../../assets/profs/vue.png";
import webflow from "../../assets/profs/webflow.png";
import woocommerce from "../../assets/profs/woocommerce.png";
import wordpress from "../../assets/profs/wordpress.png";
import zoneMinder from "../../assets/profs/zoneMinder.png";

import "./proficiency.css";

const Proficiencies = ({ AOS }) => {
  const [software, setSoftware] = useState(false);
  const [network, Network] = useState(false);
  const [branding, setBranding] = useState(false);
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="prof_con">
      <h2>proficiencies</h2>
      <div className="btns-con">
        <button className="btns active">All</button>
        <button className="btns">Software Development</button>
        <button className="btns">Networking & Security</button>
        <button className="btns">Branding & Design</button>
      </div>
      <div className="flex-container">
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={angular} alt="angular" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={aws} alt="aws" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={bootstrap} alt="bootstrap" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={brandkit} alt="brandkit" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={coreldraw} alt="coreldraw" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={crazyegg} alt="crazyegg" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={creativeCloud} alt="creativeCloud" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={figma} alt="figma" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={flutter} alt="flutter" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={frontify} alt="frontify" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={googleCloud} alt="frontify" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={gsap} alt="gsap" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={icinga} alt="icinga" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={invision} alt="invision" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={ionic} alt="ionic" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={laravel} alt="laravel" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={lottie} alt="lottie" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={magento} alt="magento" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={manageEngine} alt="manageEngine" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={nagios} alt="nagios" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={node} alt="node" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={python} alt="python" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={react} alt="react" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={reolink} alt="reolink" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={ring} alt="ring" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={safire} alt="safire" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={solarwinds} alt="solarwinds" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={swift} alt="swift" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={vue} alt="vue" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={webflow} alt="webflow" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={woocommerce} alt="woocommerce" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={wordpress} alt="wordpress" />
        </div>
        <div
          className="prof-item"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <img src={zoneMinder} alt="zoneMinder" />
        </div>
      </div>
    </div>
  );
};

export default Proficiencies;
