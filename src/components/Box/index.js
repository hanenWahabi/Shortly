import React from "react";
import "./styles.scss";

export function Box(props) {
  return (
    <div className={`box-container ${props.class}`}>
      <div className="box__circle">
        <img src={props.icon} alt="" className="box__img" />
      </div>
      <div className="box__body">
        <p className="box__body__title">{props.title}</p>
        <p className="box__body__desc">{props.description}</p>
      </div>
    </div>
  );
}
