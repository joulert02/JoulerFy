import React from "react";
import './SinIngForm.scss'

const SinIngForm = () => {
  return (
    <div className="form-container">
      <form>
        <div className="input-container">
          <label>Enter your user name</label>
          <input type="text"></input>
          <label>Enter your password</label>
          <input type="password"></input>
        </div>
        <a href="register">Register</a>

      </form>
    </div>
  );
};

export default SinIngForm;
