import React from "react";

function Card() {
  return (
    <div className="card bg-light mb-3">
      <div className="card-body">
        <h5 className="card-title" align="center">
          {Math.floor(Math.random() * 10) + 1},
          {Math.floor(Math.random() * 10) + 1},
          {Math.floor(Math.random() * 10) + 1}
        </h5>
      </div>
    </div>
  );
}

export default Card;

//https://www.codegrepper.com/code-examples/javascript/how+to+generate+random+alphabet+in+javascript
