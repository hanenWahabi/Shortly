import React from "react";
import "./styles.scss";

export function Footer() {
  return (
    <div className="footer">
      <p className="footer__name">Shortly</p>
      <div className="footer__features">
        <p className="footer__title">Features</p>
        <p className="footer__link">Shortening</p>
        <p className="footer__link">Branded Links</p>
        <p className="footer__link">Analytics</p>
      </div>
      <div className="footer__resources">
        <p className="footer__title">Resources</p>
        <p className="footer__link">Blog</p>
        <p className="footer__link">Developers</p>
        <p className="footer__link">Support</p>
      </div>
      <div className="footer__company">
        <p className="footer__title">Company</p>
        <p className="footer__link">About</p>
        <p className="footer__link">Our Team</p>
        <p className="footer__link">Careers</p>
        <p className="footer__link">Contact</p>
      </div>
      <div className="footer__icons">
        <img
          className="footer__link"
          src={require("../../assets/images/icon-facebook.svg")}
          alt=""
        />
        <img src={require("../../assets/images/icon-twitter.svg")} alt="" />
        <img src={require("../../assets/images/icon-pinterest.svg")} alt="" />
        <img src={require("../../assets/images/icon-instagram.svg")} alt="" />
      </div>
    </div>
  );
}
