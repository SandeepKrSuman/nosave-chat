import React from "react";
import styles from "./Brand.module.css";

export default function Brand() {
  return (
    <div className={styles.navbrand}>
      <img
        src={require("../../../public/logo.png")}
        alt="Logo"
        className={styles.logo}
      />
      <span className={styles.text}>NoSave Chat</span>
    </div>
  );
}
