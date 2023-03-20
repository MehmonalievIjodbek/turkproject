import React from "react";
import RightIcon from "../../static/right-icon";
import { partner } from "../../static/homeMain";

const OurPartners = () => {
  //index % 2 === 0
  return (
    <div className="container">
      <div className="our-partner">
        <div>
          {partner.map((item, index) => {
            const isEven = index % 2 === 0;
            console.log("index % 2 === 0", index % 2 === 0);
            return (
              <div
                className="our-partner__container"
                style={{ flexDirection: `${isEven ? "row-reverse" : "row"}` }}
              >
                <div className="our-partner__text" key={item.id}>
                  <p>{item.text}</p>
                  <a
                    className="our-partner__more"
                    href={item.to}
                    target="_blank"
                  >
                    {item.description} <RightIcon />
                  </a>
                </div>
                <div>
                  <img src={item.img} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
