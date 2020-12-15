import React, { useState } from "react";
import "./styles.scss";
import Axios from "axios";
import Loader from 'react-loader-spinner'

export function SearchBar() {
  const [url, setUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [shortenUrl, setShorten] = useState([]);

  function onShorten() {
    setLoader(true)
    const API = `https://api.shrtco.de/v2/shorten?url=${url}`;
    Axios.get(API).then((res) => {
      setLoader(false)
      setShorten([...shortenUrl, res.data.result.full_short_link]);
    });
  }

  function onCopy() {
    var textField = document.createElement("textarea");
    textField.innerText = shortenUrl;
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
          {!loader?<p>Shorten it!</p>:
          <Loader
            type="Oval"
            color="#00BFFF"
            height={20}
            width={20}
            color={"white"}
            visible={loader}
          />}
        </button>
      </div>
      {shortenUrl.map((item, i) => (
        <div className="item" key={i}>
          <div className="item__row">
            <p className="item__name">{url.substr(0, 40)+"..."}</p>
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
