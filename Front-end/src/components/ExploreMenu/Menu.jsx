import React, { useState } from "react";
import "./Menu.css";
import { menu_list } from "../../assets/assets";
const Menu = ({ category, setCategory }) => {
  let [menu, setMenu] = useState(menu_list);

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        {" "}
        choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest meal at a time. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Totam modi aut blanditiis amet nisi quasi?
        Voluptate doloribus vero, repellat ratione reiciendis, odio ea harum
        temporibus, eos id cupiditate at nemo!
      </p>
      <div className="explore-menu-list">
        {menu.map((val, i) => {
          return (
            <div
              onClick={(e) =>
                setCategory((prev) =>
                  prev === val.menu_name ? "All" : val.menu_name
                )
              }
              key={i}
              className="explore-menu-list-item"
            >
              <img
                className={category === val.menu_name ? "active" : ""}
                src={val.menu_image}
                alt=""
              />
              <p>{val.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Menu;
