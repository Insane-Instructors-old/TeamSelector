import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    message: "Front end message"
  }

  componentDidMount() {
    axios.get("/testing")
      .then(response => {
        console.log(response)
        this.setState({message: response.data});
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-Express</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
