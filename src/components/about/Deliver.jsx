import React from "react";
import "./deliver.css";
import user from "../../assets/user.svg";
import speed from "../../assets/speedometer.svg";
import briefcase from "../../assets/suitcase.svg";
import idea from "../../assets/idea.svg";
const Deliver = () => {
  return (
    <div className="container-four">
      <div className="deli-atrr">
        <h2>DELIVER</h2>
        <div className="deli-box">
          <div className="item-box one">
            <img src={user} alt="user" />
            <span>Dependable</span>
          </div>
          <div className="item-box two">
            <img src={speed} alt="rocket" />
            <span>Effecient</span>
          </div>
          <div className="item-box three">
            <img src={briefcase} alt="boss" />
            <span>Leader</span>
          </div>
          <div className="item-box four">
            <img src={idea} alt="rocket" />
            <span>Innovative</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Deliver;
