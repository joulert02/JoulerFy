import React from "react";
import "./genericButton.scss";
import { Link } from "react-router-dom";

const GenericButton = ({ content, className, type, onclickAction, redirect}) => {
  switch (type) {
    case "button":
      return (
        <button
          className={"generic-button ".concat(className !== undefined ? className : "")}
          onClick={onclickAction}
        >
          {content}
        </button>
      );
    case "link":
      return (
        <Link
          to={redirect}
          className={"generic-button ".concat(className !== undefined ? className : "")}
          onClick={onclickAction}
        >
          {content}
        </Link>
      );
    default:
      return null;
  }
};

export default GenericButton;
