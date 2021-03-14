import React, { Component } from "react";
import Password from "./components/Password";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {}
    state = {
        ///:///
  };

  /// = id => {
    
    const // = this.state.//.filter(// => ////.id !== id);
    // Set this.state.// equal to the new friends array
    this.setState({ // });
  };

  render() {
    return (
      <Wrapper>
        <Title>Password Generator</Title>
        {this.state.friends.map(friend => (
          <Password
            removeFriend={this.removeFriend}
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
