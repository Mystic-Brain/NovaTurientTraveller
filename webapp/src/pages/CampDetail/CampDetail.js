import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./CampDetail.css";
// images

function CampDetail(props) {
  const location = useLocation();
  const destination = location.state;
  return (
    <div className="camp-detail-page">
      <NavBar />
      <header className="camp-detail">
        <img src={destination.image} />
        <div className="enquiry-card">
          <button>Enquire Now</button>
          <p className="price">{destination.cost}</p>
          <div className="info">
            <i className="fas fa-heart"></i>
            <p>Instant Confirmation</p>
          </div>
          <div className="info">
            <i className="fas fa-heart"></i>
            <p>Best Price Guaranteed</p>
          </div>
          <div className="info">
            <i className="fas fa-heart"></i>
            <p>1000+ Happy Customers</p>
          </div>
        </div>
        <h1 className="destination-name">{destination.title}</h1>
      </header>
      {/* Put your content here */}
      <div className="content">
        <h1>Overview</h1>
        <p>{destination.info}</p>
        <h1>Basic Details</h1>
        <p>
          <ul>
            {Object.keys(destination.trek_details).map((trek) => {
              return (
                <li className="trek-list">
                  <span className="trek-detail-key">{trek}</span>
                  <span> : {destination.trek_details[trek]}</span>
                </li>
              );
            })}
          </ul>
        </p>


        <h1>Cost:</h1>
        <p>
          <ul>
            {Object.keys(destination.package_cost).map((pkg) => {
              return (
                <li className="trek-list">
                  <span className="trek-detail-key">{pkg}</span>
                  <span> : {destination.package_cost[pkg]}</span>
                </li>
              );
            })}
          </ul>
        </p>

        <h1>Amenities:</h1>
        <p>
          <ul>
            {Object.keys(destination.Amenities).map((Ame) => {
              return (
                <div className="trek-list">
                  <span className="trek-detail-key">{Ame}</span>
                  <span>  {destination.Amenities[Ame]}</span>
                </div>
              );
            })}
          </ul>
        </p>

        <h1>Activities:</h1>
        <p>
          <ul>
            {Object.keys(destination.Activities).map((Act) => {
              return (
                <div className="trek-list">
                  <span className="trek-detail-key">{Act}</span>
                  <span>  {destination.Activities[Act]}</span>
                </div>
              );
            })}
          </ul>
        </p>

        
        <h1>Things To Carry:</h1>
        <p>
          <ul>
            {Object.keys(destination.Things_To_Carry).map((thing) => {
              return (
                <div className="trek-list">
                  <span className="trek-detail-key">{thing}</span>
                  <span>  {destination.Things_To_Carry[thing]}</span>
                </div>
              );
            })}
          </ul>
        </p>


        <h1>Things To Do:</h1>
        <p>
          <ul>
            {Object.keys(destination.Things_To_Carry).map((Things) => {
              return (
                <div className="trek-list">
                  <span className="trek-detail-key">{Things}</span>
                  <span>  {destination.Things_To_Carry[Things]}</span>
                </div>
              );
            })}
          </ul>
        </p>

        <div className="">
        <h1>Booking</h1>
        <button class="button">Button</button>
        </div>      
      </div>
      
    </div>
  );
}

export default CampDetail;
