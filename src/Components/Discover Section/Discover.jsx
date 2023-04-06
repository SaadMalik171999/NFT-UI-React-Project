import React, { useState } from "react";
import { DiscoverData } from "./DiscoverData";

const Discover = () => {
  const [discoverFilterData, setDiscoverFilterData] = useState(DiscoverData);
  const handleFilter = (value) => {
    const data = DiscoverData.filter((item) => item.category === value);
    // var header = document.getElementsByClassName("discover__button");

    if (data.length > 0) {
      // if (value === "Rock") {
      // header.classList.add("active-button");
      setDiscoverFilterData(data);
      // }
    } else {
      setDiscoverFilterData(DiscoverData);
    }
  };
  return (
    <>
      <section id="Discover">
        <div className="discover__main">
          <div className="discover__section">
            <h1>Discover Music NFT</h1>
            <div className="discover__sub__section">
              <h5>Music Genre</h5>
              <div className="discover__filter_buttons">
                <div className="discover__button__section">
                  <button
                    className="discover__button"
                    onClick={() => handleFilter("All")}
                  >
                    All
                  </button>
                </div>

                <div className="discover__button__section">
                  <button
                    className="discover__button"
                    onClick={() => handleFilter("Rock")}
                  >
                    Rock
                  </button>
                </div>

                <div className="discover__button__section">
                  <button
                    className="discover__button"
                    onClick={() => handleFilter("K-Pop")}
                  >
                    K-Pop
                  </button>
                </div>

                <div className="discover__button__section">
                  <button
                    className="discover__button"
                    onClick={() => handleFilter("Pop")}
                  >
                    Pop
                  </button>
                </div>

                <div className="discover__button__section">
                  <button
                    className="discover__button"
                    onClick={() => handleFilter("Jazz")}
                  >
                    Jazz
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="discover__img__main__section">
            {discoverFilterData?.map((item) => {
              return (
                <>
                  <div key={item?.id} className="discover__img__section">
                    <img src={item?.url} alt={item?.title} />
                    <h3>{item?.title}</h3>

                    <div key={item?.id + 5} className="discover__tokens">
                      <h6>{item?.price}</h6>
                      <h6>{item?.tokens}</h6>
                    </div>

                    <div key={item?.id + 1} className="discover__buttons">
                      <button className="play__button">Play Now</button>
                      <button className="nft__button">Buy NFT</button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
