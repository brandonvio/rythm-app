import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { Badge, Table } from "reactstrap";

class Instruments extends Component {
  constructor() {
    super();
    const apiUrl = process.env.REACT_APP_API_URL;
    this.state = {
      data: [],
      endpoint: apiUrl
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
      <>
        <h5>More coming soon!</h5>
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
      </>
    );
  }
}

export default Instruments;
