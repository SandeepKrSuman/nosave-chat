import React from "react";
import styles from "./Instructions.module.css";

const Instructions = () => {
  return (
    <div className={styles.container}>
      <h3>How to Use?</h3>
      <ol>
        <li>Enter the phone number you want to chat with.</li>
        <li>Type your message in the text box at the bottom.</li>
        <li>
          Click the "Chat on WhatsApp" button to redirect to WhatsApp and start
          the chat.
        </li>
      </ol>
    </div>
  );
};

export default Instructions;
