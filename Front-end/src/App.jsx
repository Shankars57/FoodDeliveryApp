import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home/Home";
import Orders from "./pages/placeOrder/Orders";
import Cart from "./pages/cart/Cart";
import Payment from "./pages/Payment/Payment";
import Footer from "./components/Footer/Footer";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import { useState } from "react";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
