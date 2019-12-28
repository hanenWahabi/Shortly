import React from "react";
import "./styles.scss";
import { Box } from "../Box";

export function Statistic() {
  return (
    <div className="container">
      <p className="title">Advanced Statistics</p>
      <p className="subtitle">
        Track how your links are performing accross the web with our advanced
        statistics dashboard.
      </p>
      <div className="boxes">
        <Box
          class="box1"
          icon={require("../../assets/images/icon-brand-recognition.svg")}
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content."
        />
        <div className="line"></div>

        <Box
          class="box2"
          icon={require("../../assets/images/icon-detailed-records.svg")}
          title="Detailed Records"
          description="Gain insights into who is clicking your links. Knowing when and where 
        people engage with your content helps inform better decisions."
        />
        <div className="line"></div>

        <Box
          class="box3"
          icon={require("../../assets/images/icon-fully-customizable.svg")}
          title="Fully Customizable"
          description="Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement."
        />
      </div>
    </div>
  );
}
