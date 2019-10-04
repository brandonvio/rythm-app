import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { Badge, Card, CardBody, CardHeader, Table } from "reactstrap";

class Instruments extends Component {
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
          <td align="right">{value[0]}</td>
          <td align="right">{value[1]}</td>
          <td>
            <Badge color="success">Active</Badge>
          </td>
        </tr>
      );
    });
  }

  render() {
    const instrumentsDiv = this.getPriceList();
    return (
      <Table hover bordered striped responsive size="sm">
        <thead>
          <tr>
            <th>Instrument</th>
            <th align="right">Ask</th>
            <th align="right">Bid</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{instrumentsDiv}</tbody>
      </Table>
    );
  }
}

export default Instruments;
