import React from "react";
import "./SinIngForm.scss";
import IconSpotify from "../../../assets/images/spotiryicon.png";

const SinIngForm = () => {
  return (
    <>
      <header className="Header-login">
        <img src={IconSpotify}></img>
        <h1>JoulerFy</h1>
      </header>
      <div className="form-container">
        <form>
          <span>Para continuar, inicia sesión en Spotify.</span>
          <button className="spotify-button">Continuar con Sporify</button>
          <div class="divider">
            <strong class="divider-title ng-binding">o</strong>
          </div>
          <div className="input-container">
            <label>Enter your user name</label>
            <input type="text"></input>
            <label>Enter your password</label>
            <input type="password"></input>
          </div>
          <a href="vIconSpotify">Register</a>
        </form>
      </div>
    </>
  );
};

export default SinIngForm;
