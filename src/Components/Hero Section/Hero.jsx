import React from "react";
import "../../App.css";
import solanaIcon from "../../assets/Solana-icon.png";
import LandingPic from "../../assets/NFT-LandingPic.png";
import { HiChevronRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <>
      <section id="Home" className="main__section">
        <div className="hero__section">
          <div className="hero__left__section">
            <h1>Music for NFT creators.</h1>
            <h3>Digital Music for fans.</h3>
            <p>
              Music NFTs will continue to revolutionize the way that artists and
              fans create community together as we enter the upcoming year —
              undoubtedly changing the trajectory of countless budding music
              careers.
            </p>
            <div className="hero__sub__section">
              <img src={solanaIcon} alt="solanaIcon" />
              <button>
                Discover More
                <HiChevronRight className="icon-left" fontSize={20} />
              </button>
            </div>
          </div>
          <div className="hero__right__section">
            <img src={LandingPic} alt="solanaIcon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
