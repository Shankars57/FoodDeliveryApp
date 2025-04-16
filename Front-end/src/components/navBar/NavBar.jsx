import React, { useEffect, useState } from "react";

import "./NavBar.css";

import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${sticky ? "sticky" : ""}`}>
      <Link to="/">
        {" "}
        <img src={assets.logo} alt="" class="logo" />
      </Link>
      <ul class="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-App")}
          className={menu === "mobile-App" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contactUs")}
          className={menu === "contactUs" ? "active" : ""}
        >
          ContactUs
        </a>
      </ul>
      <div className="navbar-right">
        <img className="search" src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)} type="button">
          sign in
        </button>
      </div>
    </div>
  );
};

export default NavBar;
