import React from "react";
import logo from "../../assets/react.svg";
import fb from "../../assets/fb-icon.png";
import twitter from "../../assets/twitter-icon.png";
import medium from "../../assets/medium-icon.png";
import "./Navbar.css";

const Navbar = () => {
  const handleToggle = () => {
    let header = document.querySelector("header");
    header.classList.toggle("active");
  };

  return (
    <>
      <header>
        <h2 className="navbar_relative">Music NFT Platform</h2>
        <div onClick={handleToggle} className="menuToggle"></div>

        <ul className="nav">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Musicwork">Music Work</a>
          </li>
          <li>
            <a href="#Community">Fans Community</a>
          </li>
          <li>
            <a href="#Discover">Discover Music</a>
          </li>
        </ul>

        <div className="nav-icons">
          <img src={fb} alt="fb-icon" />
          <img src={twitter} alt="twitter-icon" />
          <img src={medium} alt="medium-icon" />
        </div>
      </header>
    </>
  );
};

export default Navbar;
