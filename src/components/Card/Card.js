import React from "react";

import "./Card.css";

const appurl =
  "https://play.google.com/store/apps/details?id=com.famapp&utm_source=website&utm_campaign=download";

const Card = () => {
  return (
    <div className="card">
      <p className="device">Mobile and Tablet</p>
      <h2 className="device-title">Android</h2>
      <a href={appurl}>
        <img alt="Get it on Google Play" src="/playbadge.png" />
      </a>
    </div>
  );
};

export default Card;
