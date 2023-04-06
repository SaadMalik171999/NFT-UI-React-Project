import React from "react";
import "../../App.css";
import MusicNFT from "../../assets/Music-NFT.png";

const MusicWork = () => {
  return (
    <>
      <section id="Musicwork" className="main__section">
        <div className="hero__section music__section">
          <div className="hero__left__section">
            <h1>How do Music NFTs work?</h1>
            <p>
              NFTs are unique assets stored and tradable on a blockchain. They
              are, immutable, scarce and publicly verifiable. In the music
              world, artistes get to sell limited digital content to their fans
              who pay via crypto. You can now produce any music content that
              cannot be counterfeited.
            </p>
          </div>
          <div className="hero__right__section music__work__pic">
            <img src={MusicNFT} alt="solanaIcon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MusicWork;
