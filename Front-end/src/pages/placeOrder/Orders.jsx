import React, { useContext } from "react";
import "./Orders.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const { getCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="street" />
        <div class="multi-fields">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="State" />
        </div>
        <div class="multi-fields">
          <input type="text" placeholder="zipcode" />
          <input type="text" placeholder="country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div classname="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>
                <b>Total</b>
              </p>
              <p>${getCartAmount() === 0 ? 0 : getCartAmount() + 2}</p>
            </div>
            <hr />
          </div>
          <button onClick={() => navigate("/payment")}>
            Proceed To Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default Orders;
