import React from "react";
import stroke from "../../images/buttonstroke.png";
import gold from "../../images/gold.png";
import coinleft from "../../images/coinleft.png";
import coinright from "../../images/coinright.png";
import star1 from "../../images/star1.png";
import gold_light from '../Beam.js';
import star2 from "../../images/star2.png";
import star3 from "../../images/star3.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container" >
      <button className="button">
        <p>Play The Game</p>
        <img src={stroke} alt="" />
      </button>
      <div className="Star_container">
        <img className="coin_left" src={coinleft} alt="coin_left" />
        <img className="gold_pot" src={gold} alt="gold_pot" />
        <img className="coin_right" src={coinright} alt="coin_right" /> 
        <img className="gold_light" src={gold_light} alt="gold_light" />
        <img className="star1" src={star1} alt="star1" />
        <img className="star2" src={star2} alt="star2" />
        <img className="star3" src={star3} alt="star3" />
        <div id="grad"></div>
      </div>
    </div>
  );
}


