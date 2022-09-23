import React, { useState } from "react";
// images
import Destination1 from "./assets/Destination1.png";
import Destination2 from "./assets/Destination2.png";
import Destination3 from "./assets/Destination3.png";
import Destination4 from "./assets/Destination4.png";
import Destination5 from "./assets/Destination5.png";
import Destination6 from "./assets/Destination6.png";
import info1 from "./assets/info1.png";
import info2 from "./assets/info2.png";
import info3 from "./assets/info3.png";
// styles
import "./Recommended.css"


const data = [
  {
    image: Destination1,
    title: "Harishchandra Trek",
    subTitle:
      "Harishchandra, A famous ancient fort in the district of Ahmednagar is a perfect place for you to visit for a weekend getaway",
    cost: "2000",
    duration: "Approx 1 night trip",
    distance: "1000"
  },
  {
    image: Destination2,
    title: "Lohgad",
    subTitle: "",
    cost: "2000",
    duration: "Approx 2 night trip",
    distance: "500"
  },
  {
    image: Destination3,
    title: "Kalsubai",
    subTitle: "",
    cost: "1200",
    duration: "Approx 2 night trip",
    distance: "300"
  },
  {
    image: Destination4,
    title: "dudhsagar waterfall ",
    subTitle: "",
    cost: "1000",
    duration: "Approx 1 night trip",
    distance: "350"
  },
  {
    image: Destination5,
    title: "Devkund waterfall",
    subTitle: "",
    cost: "2500",
    duration: "Approx 2 night 2 day trip",
    distance: "1200"
  },
  {
    image: Destination6,
    title: "Harihar",
    subTitle: "",
    cost: "1400",
    duration: "Approx 2 night 2 day trip",
    distance: "456"
  }
];

const packages = [
  "The Weekend Break",
  "The Package Holiday",
  "The Group Tour",
  "Long Term Slow Travel",
];

function Recommended() {

  const [active, setActive] = useState(1);

  return (
    <section className="section">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      {/* <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>{destination.distance + " KMS"}</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Recommended;
