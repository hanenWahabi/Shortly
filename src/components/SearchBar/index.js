import React, { useState } from "react";
import "./styles.scss";
import Axios from "axios";

export function SearchBar() {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShorten] = useState([]);

  function onShorten() {
    const API = "https://rel.ink/api/links/";
    Axios.post(API, { url }).then((res) => {
      setShorten([...shortenUrl, "https://rel.ink/" + res.data.hashid]);
    });
  }

  function onCopy() {
    var textField = document.createElement("textarea");
    textField.innerText = url;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }
  return (
    <div className="container">
      <div className="search">
        <input
          className="search__input"
          placeholder="shorten a link here"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="search__button" onClick={() => onShorten()}>
          Shorten it!
        </button>
      </div>
      {shortenUrl.map((item, i) => (
        <div className="item" key={i}>
          <div className="item__row">
            <p className="item__name">{url}</p>
            <p className="item__link">{item}</p>
          </div>
          <button className="item__copy" onClick={() => onCopy()}>
            Copy
          </button>
        </div>
      ))}
    </div>
  );
}
