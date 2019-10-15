import React, { Component } from "react";
import axios from "axios";
import { Badge } from "reactstrap";
import { Card, CardHeader, CardBody } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";

class Symbols extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.type);
    const apiUrl = process.env.REACT_APP_API_URL;
    this.state = {
      symbols: [],
      endpoint: apiUrl
    };

    this.options = {
      sortIndicator: true,
      hideSizePerPage: true,
      paginationSize: 8,
      hidePageListOnlyOnePage: true,
      clearSearch: true,
      alwaysShowAllBtns: false,
      withFirstAndLast: false
    };
  }

  componentDidMount() {
    (async () => {
      const apiUrl = process.env.REACT_APP_API_URL;
      let url = "";
      if (this.props.type === "CRYPTO") {
        url = `${apiUrl}/api/iexcloud/crypto`;
      } else {
        url = `${apiUrl}/api/iexcloud/stocksetf`;
      }
      const { data } = await axios.get(url);
      this.setState({
        symbols: data
      });
    })();
  }

  getSymbolsList() {
    return this.state.symbols.map((inst, i) => {
      return (
        <tr key={i}>
          <td>{inst.symbol}</td>
          <td>{inst.name}</td>
          <td>{inst.type}</td>
          <td align="right">{inst.exchange}</td>
          <td align="right">{inst.region}</td>
          <td align="right">{inst.currency}</td>
          <td align="right">{inst.date}</td>
          <td>
            <Badge color="success">Active</Badge>
          </td>
        </tr>
      );
    });
  }

  render() {
    if (this.state.symbols) {
      return (
        <div className="animated">
          <Card>
            <CardHeader>
              <i className="icon-menu"></i>Symbols
              <div className="card-header-actions">
                <a
                  href="https://github.com/AllenFang/react-bootstrap-table"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="card-header-action"
                >
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <BootstrapTable
                data={this.state.symbols}
                version="4"
                striped
                hover
                pagination
                search
                options={this.options}
              >
                <TableHeaderColumn isKey dataField="symbol" dataSort>
                  symbol
                </TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort>
                  name
                </TableHeaderColumn>
                <TableHeaderColumn dataField="exchange" dataSort>
                  exchange
                </TableHeaderColumn>
                <TableHeaderColumn dataField="type" dataSort>
                  type
                </TableHeaderColumn>

                <TableHeaderColumn dataField="region" dataSort>
                  region
                </TableHeaderColumn>
              </BootstrapTable>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Symbols;
