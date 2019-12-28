import React from "react";
import "./styles.scss";
export function Description() {
  return (
    <div className="Description">
      <div>
        <p className="Description__title">More than just shorter links</p>
        <p className="Description__text">
          Build your Brand with recognition and get detailed insights on how
          your links are performing
        </p>
        <button className="Description__button">Get Started</button>
      </div>
      <img
        src={require("../../assets/images/illustration-working.svg")}
        alt=""
        className="Description__img"
      />
    </div>
  );
}
