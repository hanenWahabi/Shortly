import React from "react";
import "./styles.scss";
export function Intro() {
  return (
    <div className="Intro">
      <div className="Intro__body">
        <p className="Intro__title">More than just shorter links</p>
        <p className="Intro__text">
          Build your Brand with recognition and get detailed insights on how
          your links are performing
        </p>
        <button className="Intro__button">Get Started</button>
      </div>
      <div className="Intro__img">
        <img
          src={require("../../assets/images/illustration-working.svg")}
          alt=""
        />
      </div>
    </div>
  );
}
