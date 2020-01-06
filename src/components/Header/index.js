import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <div className="header">
      <h1 className="header__name">Shortly</h1>
      <div
        className="header__menu"
        onClick={() => {
          const navs = document.querySelectorAll(".Navbar__Items");
          navs.forEach(nav => nav.classList.toggle("Navbar__ToggleShow"));
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <nav className="header__navbar">
        <p className=" Navbar__Items header__navbar__link">Features</p>
        <p className=" Navbar__Items header__navbar__link">Pricing</p>
        <p className=" Navbar__Items header__navbar__link">Ressources</p>
        <p className=" Navbar__Items header__navbar__link--right">Login</p>
        <button className=" Navbar__Items header__navbar__signup">
          Sign Up
        </button>
      </nav>
    </div>
  );
}
