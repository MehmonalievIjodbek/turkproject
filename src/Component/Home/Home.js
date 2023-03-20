import React from "react";

const partnerCard = [
  {
    id: 1,
    src: "/img/electrolux.png",
  },
  {
    id: 2,
    src: "/img/fagor.png",
  },
  {
    id: 3,
    src: "/img/ghidini.png",
  },
  {
    id: 4,
    src: "/img/hawo.png",
  },
  {
    id: 5,
    src: "/img/schulthess.png",
  },
];

const Home = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="home-banner">
          <h1>Beautiful analytics to grow smarter</h1>
          <img src="/img/banner.png" alt="" />
        </div>
        <div className="home-ourpartners">
          <h2>our partners</h2>
          <div className="home-ourpartners-company">
            {partnerCard.map((item) => (
              <div key={item.id}>
                <img src={item.src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
