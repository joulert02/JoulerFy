import React from "react";
import SessionContainer from "../../molecules/sessionContainer/sessionContainer";
import "./header.scss";

const Header = ({ isLoguerUser }) => {
  return (
    <header>
      <a className="header-logo" href="/">
        JoulerFY
      </a>
      {isLoguerUser === false ? <SessionContainer /> : <p>ESTOY LOGUEADO</p>}
    </header>
  );
};

export default Header;
