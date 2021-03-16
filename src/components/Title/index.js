import React from "react";

const styles = {
  jumbotronStyle: {
    background: "#85929E",
    color: "white",
  },
};

function Title(props) {
  return (
    <div className="container">
      <div className="jumbotron" align="center" style={styles.jumbotronStyle}>
        <h1>Password Generator</h1>
        <p>
          <button className="btn btn-info btn-lg" onClick={props.getCriteria}>
            Generate Password
          </button>
        </p>
      </div>
    </div>
  );
}

export default Title;
