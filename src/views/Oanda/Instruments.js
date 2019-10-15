import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import axios from "axios";
import { Badge, Table } from "reactstrap";

class Instruments extends Component {
  constructor() {
    super();
    const apiUrl = process.env.REACT_APP_API_URL;
    this.state = {
      instruments: [],
      endpoint: apiUrl
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);

    socket.on("prices", data => {
      const price = JSON.parse(data);
      // console.log(price);
      const instruments = [...this.state.instruments];
      const instrumentIndex = instruments.findIndex(
        inst => inst.name === price.instrument
      );
      if (instrumentIndex >= 0) {
        instruments[instrumentIndex].ask = price.ask;
        instruments[instrumentIndex].bid = price.bid;
        instruments[instrumentIndex].spread = price.spread;
        this.setState({ data: instruments });
      }
    });

    (async () => {
      const apiUrl = process.env.REACT_APP_API_URL;
      const { data } = await axios.get(`${apiUrl}/api/instrumentr`);
      this.setState({
        instruments: data
      });
    })();
  }

  getPriceList() {
    return this.state.instruments.map((inst, i) => {
      return (
        <tr key={inst.name}>
          <td>{inst.displayName}</td>
          <td>{inst.type}</td>
          <td align="right">{inst.marginRate}</td>
          <td align="right">{inst.spread}</td>
          <td align="right">{inst.ask}</td>
          <td align="right">{inst.bid}</td>
          <td>
            <Badge color="success">Active</Badge>
          </td>
        </tr>
      );
    });
  }

  render() {
    if (this.state.instruments) {
      const instrumentsDiv = this.getPriceList();
      return (
        <div className="animated fadeIn">
          <Table hover bordered striped responsive size="sm">
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Type</th>
                <th>Margin Rate</th>
                <th>Spread</th>
                <th>Ask</th>
                <th>Bid</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{instrumentsDiv}</tbody>
          </Table>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Instruments;
