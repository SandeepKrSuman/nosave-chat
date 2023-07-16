import React, { useState } from "react";
import QrCode from "../QrCode/QrCode";

import styles from "./ChatBox.module.css";

export default function ChatBox() {
  const [ccode, setCcode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("Hello 👋");
  const [qrUrl, setQrUrl] = useState("");

  const handleCcodeChange = (e) => {
    const inputCcode = e.target.value;
    setCcode(inputCcode);

    const qurl = `https://wa.me/${inputCcode.replace(
      /[^0-9]/g,
      ""
    )}${phoneNumber}?text=${encodeURIComponent(message)}`;
    setQrUrl(qurl);
  };

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(inputPhoneNumber);

    const qurl = `https://wa.me/${ccode.replace(
      /[^0-9]/g,
      ""
    )}${inputPhoneNumber}?text=${encodeURIComponent(message)}`;
    setQrUrl(qurl);
  };

  const handleMessageChange = (e) => {
    const msg = e.target.value;
    setMessage(msg);

    const qurl = `https://wa.me/${ccode.replace(
      /[^0-9]/g,
      ""
    )}${phoneNumber}?text=${encodeURIComponent(msg)}`;
    setQrUrl(qurl);
  };

  const handleSendMessage = (event) => {
    if (phoneNumber.length === 0) return;

    const encodedMessageText = encodeURIComponent(message);
    const chatLink = `https://wa.me/${ccode.replace(
      /[^0-9]/g,
      ""
    )}${phoneNumber}?text=${encodedMessageText}`;

    setPhoneNumber("");
    setMessage("Hello 👋");

    window.open(chatLink, "_blank");

    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      {phoneNumber.length > 0 && <QrCode qrurl={qrUrl} />}
      <form>
        <div className={`${styles.inputContainer} ${styles.phonewithcode}`}>
          <input
            type="tel"
            placeholder="code"
            title="country code"
            className={styles.ccode}
            value={ccode}
            onChange={handleCcodeChange}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className={styles.pphone}
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            pattern="\d{10}"
            autoFocus
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <textarea
            placeholder="Message"
            value={message}
            onChange={handleMessageChange}
            required
          />
        </div>
        <button className={styles.sendButton} onClick={handleSendMessage}>
          Chat on WhatsApp
        </button>
      </form>
    </div>
  );
}
