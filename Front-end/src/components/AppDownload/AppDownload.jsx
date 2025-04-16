import React from "react";
import "./AppDown.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For better Experience Download <br /> Tomato App
      </p>
      <div class="app-download-platforms">
        <img src={assets.play_store} alt="playStore" />
        <img src={assets.app_store} alt="playStore" />
      </div>
    </div>
  );
};

export default AppDownload;
