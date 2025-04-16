import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favorite Food Here.</h2>
        <p>
          choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest meal at a time. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Totam modi aut blanditiis amet nisi
          quasi? Voluptate doloribus vero, repellat ratione reiciendis, odio ea
          harum temporibus, eos id cupiditate at nemo!
        </p>
        <button><a href="#explore-menu">ViewMenu</a></button>
      </div>
    </div>
  );
};

export default Header;
