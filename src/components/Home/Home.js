import React from "react";
import Brand from "../Brand/Brand";
import ChatBox from "../ChatBox/ChatBox";
import Instructions from "../Instructions/Instructions";
import CallToAction from "../CallToAction/CallToAction";
import Faq from "../Faq/Faq";

import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <Brand />
      <div className="main">
        <div className="fluid">
          <ChatBox />
          <CallToAction />
          <Instructions />
          <Faq />
        </div>
      </div>
    </div>
  );
}
