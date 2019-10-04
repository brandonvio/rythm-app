import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class MySocket extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      endpoint: "http://127.0.0.1:4000"
    };
    this.prices = {};
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("prices", data => {
      const price = JSON.parse(data);
      const prices = Object.assign({}, this.state.data);
      prices[price.instrument] = [price.ask, price.bid];
      this.setState({ data: prices });
    });
  }

  getPriceList() {
    return Object.entries(this.state.data).map((price, i) => {
      const [key, value] = price;
      return (
        <tr key={key}>
          <td>{key}</td>
          <td>{value[0]}</td>
          <td>{value[1]}</td>
        </tr>
      );
    });
  }

  render() {
    // const { price } = this.state;
    // const prices = {};
    // console.log(price.instrument);
    // prices[price.instrument] = [price.ask, price.bid];
    const instrumentsDiv = this.getPriceList();
    return (
      <table style={{ padding: "10px" }}>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Ask</th>
            <th>Bid</th>
          </tr>
        </thead>
        <tbody>{instrumentsDiv}</tbody>
      </table>
    );
  }
}

export default MySocket;
