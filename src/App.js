import React, { Component } from "react";
import Title from "./components/Title";
import Password from "./components/Password";
import Options from "./components/Options";

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
    const passlength = window.prompt("Would you like uppercase letters?");
    window.prompt("Would you like lowercase letters?");
    window.prompt("Would you like numbers?");
    window.prompt("Would you like special characters (such as ! @ # ?)?");
    this.setState({ passlength: passlength });
  };

  render() {
    // run all the above methods to calculate the password before rendering

    return (
      <div className="password button">
        <Title getCriteria={this.getCriteria} /> <Password /> <Options />
      </div>
    );
  }
}
export default App;
