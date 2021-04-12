import React from "react";

function Password(props) {
  console.log(props);
  return (
    // <div className="card bg-light mb-3">
    //   <div className="card-body">
    //     <h5 className="card-title" align="center">
    //       {Math.floor(Math.random() * 10) + 1},
    //       {Math.floor(Math.random() * 10) + 1},
    //       {Math.floor(Math.random() * 10) + 1}
    //     </h5>
    //   </div>
    // </div>
    <textarea value={props.password}></textarea>
  );
}

export default Password;

//https://www.codegrepper.com/code-examples/javascript/how+to+generate+random+alphabet+in+javascript
