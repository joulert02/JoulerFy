import React from "react";
import IconSpotify from "../../../assets/images/spotiryicon.png";
import LoginForm from '../../molecules/loginForm/loginForm'
import GenericButton from '../../atoms/genericButton/genericButton'
import "./SinIngForm.scss";

const SinIngForm = () => {
  return (
    <>
      <header className="Header-login">
        <img src={IconSpotify}></img>
        <h1>JoulerFy</h1>
      </header>
      <div className="form-container">
        <span>Para continuar, inicia sesión en Spotify.</span>
        <GenericButton
          type="button"
          content="continue with spotify"
          className="green"
        />
        <div class="divider">
          <strong class="divider-title">o</strong>
        </div>
        <LoginForm />
        <a className="forgot-password">¿Forget your password?</a>
        <div className="divider"></div>
        <span className="register-text">¿Do not count?</span>
        <GenericButton
          type="link"
          content="Register in JoulerFi"
          redirect="register"
          className="white"
        />
        <div className="divider"></div>
        <p className="terms-conditions">
          Si haces clic en iniciar sesión con Facebook y no eres usuario de Spotify, pasarás a estar registrado y aceptas los
            <a href="#" target="_blank">Términos y Condiciones</a> y la 
            <a href="#" target="_blank">Política de Privacidad</a> de Spotify.
          </p>
      </div>
    </>
  );
};

export default SinIngForm;
