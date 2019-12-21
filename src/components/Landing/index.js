import React from "react";
import "./style.css";
import navIcon from "../nav-icon.png";
import Navigation from "../Navigation";

const Landing = () => {
  return (
    <div className="hero">
      <Navigation></Navigation>
      <div className="pt-lg-5 pt-sm-2 pt-xs-4">
        <div className="row py-3">
          <div className="col-lg-1 col-xs-12"></div>
          <div className="col-lg-5 col-xs-12">
            <div className="landing-text">
              Have no time to prepare <span className="food-text">food</span>?
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-xs-12">
            <div className="landing-subtitle">
              Choose any of our plans to, enter delivery time
            </div>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-xs-12">
            <div className="landing-subtitle">
              and delicious food without leaving home!
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-xs-12 pt-2">
            <button className="btn order-btn"> ORDER NOW </button>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-xs-12 pt-2">
            <i className="fa fa-2x fa-instagram px-3" aria-hidden="true"></i>
            <i
              className="fa fa-2x fa-facebook-official px-3"
              aria-hidden="true"
            ></i>
            <i className="fa fa-2x fa-twitter px-3" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <a href="#shoppingcart">
        <img src={navIcon} className="nav-icon"></img>
      </a>
    </div>
  );
};

export default Landing;
