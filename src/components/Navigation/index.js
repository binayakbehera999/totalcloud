import React from "react";
import "./style.css";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ fontSize: "1rem" }}>
        <div
          className="navbar-brand ml-lg-5"
          style={{ textDecorationColor: "white", fontSize: "1.5rem" }}
        >
          FOOD.<span style={{ color: "#f8a22f" }}>LOGO</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: "white" }}
        >
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item mx-5 about">
              <a className="nav-link" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link" href="#">
                OUR FOOD
              </a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link" href="#">
                PLANS
              </a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link contact-us" href="#">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
