import React, { useEffect, useState } from "react";
import QRCode from "qrcode";

import styles from "./QrCode.module.css";

export default function QrCode(props) {
  const [qrCodeData, setQRCodeData] = useState("");

  useEffect(() => {
    generateQRCode();
  }, [props.qrurl]);

  const generateQRCode = async () => {
    try {
      const dataURL = await QRCode.toDataURL(props.qrurl);
      setQRCodeData(dataURL);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  return (
    <div className={styles.container}>
      {qrCodeData && <img src={qrCodeData} alt="qr-code" />}
      <p>Scan to chat on your phone.</p>
    </div>
  );
}
