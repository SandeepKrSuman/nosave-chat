import React from "react";
import styles from "./Card.module.css";

const appurl =
  "https://play.google.com/store/apps/details?id=com.nosavechat&utm_source=website&utm_campaign=download";

export default function Card() {
  return (
    <div className={styles.card}>
      <p className={styles.device}>Mobile and Tablet</p>
      <h2 className={styles.deviceTitle}>Android</h2>
      <a href={appurl}>
        <img
          alt="Get it on Google Play"
          src={require("../../../public/playbadge.png")}
        />
      </a>
    </div>
  );
}
