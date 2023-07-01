import React from "react";
import "./Brand.css";

export default function Brand() {
  return (
    <div className="navbrand">
      <img
        src={require("../../../public/logo.png")}
        alt="Logo"
        className="logo"
      />
      <span className="text">NoSave Chat</span>
    </div>
  );
}
