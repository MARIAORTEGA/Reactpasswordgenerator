import React, { Component } from "react";
import Password from "./components/Password";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {}
    state = {
        choices: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=?",
        password: ""
      };

  createPassword = () => {

var passwordCriteria = confirm("Would you like uppercase letters?"); 
var passwordCriteria1 = confirm("Would you like lowercase letters?"); 
var passwordCriteria2 = confirm("Would you like numbers?"); 
var passwordCriteria3 = confirm("Would you like special characters (such as ! @ # ?) ]?"); 
var passwordCriteria4 = prompt("For password lenght, please choose between 8-128 characters.")
    
    const choices = this.state.choices.filter(criteria => criteria === criteria);
    // Set this.state.// equal to the new friends array
    this.setState({ choices });
  };

  render() {
    //render methods for generating password from the above state
    return (
      <Wrapper>
        <Title>Password Generator</Title>
        {this.state.choices.map(criteria) => (
          <Password
            createPassword={this.createPassword}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
