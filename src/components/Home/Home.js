import React from "react";
import Brand from "../Brand/Brand";
import ChatBox from "../ChatBox/ChatBox";
import Instructions from "../Instructions/Instructions";
import CallToAction from "../CallToAction/CallToAction";
import Faq from "../Faq/Faq";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Brand />
      <div className={styles.main}>
        <div className={styles.fluid}>
          <ChatBox />
          <CallToAction />
          <Instructions />
          <Faq />
        </div>
      </div>
    </div>
  );
}
