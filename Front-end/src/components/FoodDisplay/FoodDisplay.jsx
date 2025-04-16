import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes here you.</h2>
      <div className="food-display-list">
        {food_list.map((item, i) => {
          if ((category === "All" || category === item.category)) {
            return (
              <FoodItem
                key={i}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              ></FoodItem>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
