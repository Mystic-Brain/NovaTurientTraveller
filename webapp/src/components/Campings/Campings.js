import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// images
import Destination11 from "./assets/Destination11.png";
import Destination12 from "./assets/Destination12.png";
import Destination13 from "./assets/Destination13.png";
import Destination14 from "./assets/Destination14.png";
import Destination15 from "./assets/Destination15.png";
import Destination16 from "./assets/Destination16.png";
import info1 from "./assets/info1.png";
import info2 from "./assets/info2.png";
import info3 from "./assets/info3.png";
// styles
import "./Campings.css"


const data = [
  {
    image: Destination11,
    title: "Harishchandra Trek",
    subTitle:
      "Harishchandra, A famous ancient fort in the district of Ahmednagar is a perfect place for you to visit for a weekend getaway",
    cost: "2000",
    duration: "Approx 1 night trip",
    distance: "1000",
    info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    trek_details: { ["Height"]: "100", ["Trek Route"]: "", ["Trek Difficulty"]: "", ["Trek Endurance"]: "", ["Trek Length"]: "", ["Trek Location"]: "", ["Distance from Aurangabad"]: "",  ["Distance from Pune"]: "" }
  },
  {
    image: Destination12,
    title: "Lohgad",
    subTitle: "",
    cost: "2000",
    duration: "Approx 2 night trip",
    distance: "500",
    info: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    trek_details: { ["Height"]: "100", ["Trek Route"]: "", ["Trek Difficulty"]: "", ["Trek Endurance"]: "", ["Trek Length"]: "", ["Trek Location"]: "", ["Distance from Aurangabad"]: "",  ["Distance from Pune"]: "" }
  },
  {
    image: Destination13,
    title: "Kalsubai",
    subTitle: "",
    cost: "1200",
    duration: "Approx 2 night trip",
    distance: "300",
    info: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    trek_details: { ["Height"]: "100", ["Trek Route"]: "", ["Trek Difficulty"]: "", ["Trek Endurance"]: "", ["Trek Length"]: "", ["Trek Location"]: "", ["Distance from Aurangabad"]: "",  ["Distance from Pune"]: "" }
  },
  {
    image: Destination14,
    title: "lagatpuri water sport and campaign ",
    subTitle: "",
    cost: "1000",
    duration: "Approx 1 night trip",
    distance: "350",
    info: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    trek_details: { ["Height"]: "100", ["Trek Route"]: "", ["Trek Difficulty"]: "", ["Trek Endurance"]: "", ["Trek Length"]: "", ["Trek Location"]: "", ["Distance from Aurangabad"]: "",  ["Distance from Pune"]: "" }
  },
  {
    image: Destination15,
    title: "Pawna LAke Campings",
    subTitle: "",
    cost: "2500",
    duration: "Approx 2 night 2 day trip",
    distance: "1200",
    info: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    trek_details: { ["Height"]: "100", ["Trek Route"]: "", ["Trek Difficulty"]: "", ["Trek Endurance"]: "", ["Trek Length"]: "", ["Trek Location"]: "", ["Distance from Aurangabad"]: "",  ["Distance from Pune"]: "" }
  },
  {
    image: Destination16,
    title: "Harihar",
    subTitle: "",
    cost: "1400",
    duration: "Approx 2 night 2 day trip",
    distance: "456",
    info: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    trek_details: { ["Height"]: "100", ["Trek Route"]: "", ["Trek Difficulty"]: "", ["Trek Endurance"]: "", ["Trek Length"]: "", ["Trek Location"]: "", ["Distance from Aurangabad"]: "",  ["Distance from Pune"]: "" }
  }

];

const packages = [
  "The Weekend Break",
  "The Package Holiday",
  "The Group Tour",
  "Long Term Slow Travel",
];

function Campings() {

  const navigate = useNavigate()
  const navigateToDetailPage = (data) => {
    navigate("campdetail", { state: data })
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Campings Destinations</h2>
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
            <div className="destination" onClick={() => navigateToDetailPage(destination)}>
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

export default Campings;
