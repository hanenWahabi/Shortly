import React from "react";
import "./styles.scss";

export function SearchBar() {
  return (
    <div className="container">
      <div className="search">
        <input className="search__input" placeholder="shorten a link here" />
        <button className="search__button">Shorten it!</button>
      </div>
      <div className="item">
        <p className="item__name">https://www.frontendmentor.io/challenges</p>
        <div className="item__row">
          <p className="item__link">https://0.frontendm.io/</p>
          <button className="item__copy">Copy</button>
        </div>
      </div>
    </div>
  );
}
