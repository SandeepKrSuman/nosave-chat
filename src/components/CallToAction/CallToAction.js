import React from "react";
import Card from "../Card/Card";

import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <div className={styles.section}>
      <h2>Connect instantly with WhatsApp!</h2>
      <p>Start chatting without saving phone numbers.</p>
      <Card />
    </div>
  );
};

export default CallToAction;
