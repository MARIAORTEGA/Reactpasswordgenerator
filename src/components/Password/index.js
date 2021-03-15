import React from "react";

function Password() {
  return (
    <h2>
      I can generate random numbers:
      {Math.floor(Math.random() * 10) + 1},{Math.floor(Math.random() * 10) + 1},
      {Math.floor(Math.random() * 10) + 1}.
    </h2>
  );
}
export default Password;
