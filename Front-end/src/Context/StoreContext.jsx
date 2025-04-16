import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  let getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        let itemInfo = food_list.find((prod) => prod._id === items);
        totalAmount += itemInfo.price * cartItems[items];
      }
    }
    return totalAmount;
  };
  const [cartItems, setCartItems] = useState({});

  function addToCart(itemId) {
    setCartItems((prev) => {
      return {
        ...prev,
        [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
      };
    });
  }

  function removeFromCart(itemId) {
    setCartItems((prev) => {
      const currentQty = prev[itemId] || 0;
      if (currentQty <= 1) {
        const updatedCart = { ...prev };
        delete updatedCart[itemId];
        return updatedCart;
      } else {
        return { ...prev, [itemId]: currentQty - 1 };
      }
    });
  }

  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    getCartAmount,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
