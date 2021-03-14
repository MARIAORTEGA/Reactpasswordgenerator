import React from "react";

function Password(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Generate a Password</h2>
      </div>
      <div className="card-body">
        <textarea
          readonly
          id="password"
          placeholder="Your Secure Password"
          aria-label="Generated Password"
        ></textarea>
      </div>
      <div className="card-footer">
        <span onClick={() => props.createPassword(props)} className="generate">
          Generate Password
        </span>
      </div>
    </div>
  );
}
export default Password;
