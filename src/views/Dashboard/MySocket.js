import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class MySocket extends Component {
  constructor() {
    super();
    this.state = {
      data: false,
      endpoint: "http://127.0.0.1:4000"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    if (response) {
      return (
        <div>
          <p>The temperature in Florence is: {response.temperature} °F</p>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default MySocket;
