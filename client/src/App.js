import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";

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

        <MDBContainer>
          <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
            <MDBCardTitle>Panel Title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the panel title and make up the
              bulk of the panel's content.
            </MDBCardText>
            <div className="flex-row">
              <a href="#!">MDBCard link</a>
              <a href="#!" style={{ marginLeft: "1.25rem" }}>Another link</a>
            </div>
          </MDBCard>
        </MDBContainer>

      </div>
    );
  }
}

export default App;
