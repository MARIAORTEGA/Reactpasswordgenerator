import React, { Component } from "react";
import Title from "./components/Title";
import Password from "./components/Password";
//import Options from "./components/Options";

// function App() {
//   return (

//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initial state for pwd length and all char bools
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      characters: "!@#$%^&*()_+=?",

      password: "",
    };
  }
  getCriteria = () => {
    var passlength = Number(window.prompt("How long should password be?"));
    var upper = window.confirm("Would you like uppercase letters?");
    var lower = window.confirm("Would you like lowercase letters?");
    var number = window.confirm("Would you like numbers?");
    var special = window.confirm(
      "Would you like special characters (such as ! @ # ?)?"
    );
    var choices = "";
    if (upper) {
      choices += this.state.uppercase;
    }

    if (lower) {
      choices += this.state.lowercase;
    }

    if (number) {
      choices += this.state.numbers;
    }

    if (special) {
      choices += this.state.characters;
    }
    console.log(choices, passlength);
    var password = "";
    for (var i = 0; i < passlength; i++) {
      var randomcharacterpos = Math.floor(Math.random() * choices.length);
      password += choices.charAt(randomcharacterpos);
    }
    console.log(password);
    this.setState({ password: password });
  };

  render() {
    // run all the above methods to calculate the password before rendering

    return (
      <div className="password button">
        <Title getCriteria={this.getCriteria} />{" "}
        <Password password={this.state.password} />
      </div>
    );
  }
}
export default App;
