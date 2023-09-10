import React from "react";
import location from '../images/placeholder.png'
import Data from "../data";
export default function Place() {
  return (
    <div>
      {Data.map((item) => (
        <div className="place-container" key={item.id}>
          <div className="left-container">
            <img src={item.imageUrl} alt="error loading image" className="left-image" />
          </div>
          <div className="right-container">
            <div className="first-location">
              <img src={location} className="location-image" alt="location icon" />
              <span className="country-name">{item.location}</span>
              <a href={item.googleMapsUrl}   className="map-link" target="_blank" rel="noopener noreferrer">
                View on Google Map
              </a>
            </div>
            <div className="heading-part">
              <h1 className="main-h1">{item.title}</h1>
            </div>
            <div className="content-part">
              <h4>{item.startDate}-{item.endDate}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
