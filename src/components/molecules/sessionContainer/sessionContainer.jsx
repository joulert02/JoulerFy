import React from "react";
import ButtonGeneric from "../../atoms/sessionButton/sessionButton";
import "./sessionContainer.scss";

const SessionContainer = () => {
  return (
    <div className="sessionContainer">
      <div className="logoutContainer">
        <ButtonGeneric
          type="button button-session"
          text={"Sign In"}
          redirect="singin"
        />
        <ButtonGeneric
          type="button button-session"
          text={"Sign Out"}
          redirect="signout"
        />
      </div>
    </div>
  );
};

export default SessionContainer;
