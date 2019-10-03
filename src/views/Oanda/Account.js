import React, { Component } from "react";
import Axios from "axios";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from "reactstrap";

class OandaAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {}
    };
  }

  componentDidMount() {
    Axios.get("http://127.0.0.1:5000/matrix/api/oanda/account").then(res => {
      let account = res.data;
      console.log(account);
      this.setState({
        account: account
      });
    });
  }

  render() {
    let acc = this.state.account;
    if (acc) {
      return (
        <div>
          <Row>
            <Col xs="12" lg="6">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Account
                </CardHeader>
                <CardBody>
                  <Table responsive size="sm">
                    <tbody>
                      <tr>
                        <td>alias</td>
                        <td>{acc.alias}</td>
                      </tr>
                      <tr>
                        <td>balance</td>
                        <td>{acc.balance}</td>
                      </tr>
                      <tr>
                        <td>NAV</td>
                        <td>{acc.NAV}</td>
                      </tr>
                      <tr>
                        <td>pl</td>
                        <td>{acc.pl}</td>
                      </tr>
                      <tr>
                        <td>financing</td>
                        <td>{acc.financing}</td>
                      </tr>
                      <tr>
                        <td>commission</td>
                        <td>{acc.commission}</td>
                      </tr>
                      <tr>
                        <td>guaranteedExecutionFees</td>
                        <td>{acc.guaranteedExecutionFees}</td>
                      </tr>
                      <tr>
                        <td>commission</td>
                        <td>{acc.commission}</td>
                      </tr>
                      <tr>
                        <td>guaranteedStopLossOrderMode</td>
                        <td>{acc.guaranteedStopLossOrderMode}</td>
                      </tr>
                      <tr>
                        <td>hedgingEnabled</td>
                        <td>{acc.hedgingEnabled}</td>
                      </tr>
                      <tr>
                        <td>commission</td>
                        <td>{acc.commission}</td>
                      </tr>

                      <tr>
                        <td>withdrawalLimit</td>
                        <td>{acc.withdrawalLimit}</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" lg="6">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Margin
                </CardHeader>
                <CardBody>
                  <Table responsive size="sm">
                    <tbody>
                      <tr>
                        <td>marginRate</td>
                        <td>{acc.marginRate}</td>
                      </tr>
                      <tr>
                        <td>marginUsed</td>
                        <td>{acc.marginUsed}</td>
                      </tr>
                      <tr>
                        <td>marginAvailable</td>
                        <td>{acc.marginAvailable}</td>
                      </tr>
                      <tr>
                        <td>marginCloseoutUnrealizedPL</td>
                        <td>{acc.marginCloseoutUnrealizedPL}</td>
                      </tr>
                      <tr>
                        <td>marginCloseoutNAV</td>
                        <td>{acc.marginCloseoutNAV}</td>
                      </tr>
                      <tr>
                        <td>marginCloseoutMarginUsed</td>
                        <td>{acc.marginCloseoutMarginUsed}</td>
                      </tr>
                      <tr>
                        <td>marginCloseoutPercent</td>
                        <td>{acc.marginCloseoutPercent}</td>
                      </tr>
                      <tr>
                        <td>marginCloseoutPositionValue</td>
                        <td>{acc.marginCloseoutPositionValue}</td>
                      </tr>
                      <tr>
                        <td>marginCallMarginUsed</td>
                        <td>{acc.marginCallMarginUsed}</td>
                      </tr>
                      <tr>
                        <td>marginCallPercent</td>
                        <td>{acc.marginCallPercent}</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" lg="6">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Trading
                </CardHeader>
                <CardBody>
                  <Table responsive size="sm">
                    <tbody>
                      <tr>
                        <td>openTradeCount</td>
                        <td>{acc.openTradeCount}</td>
                      </tr>
                      <tr>
                        <td>openPositionCount</td>
                        <td>{acc.openPositionCount}</td>
                      </tr>
                      <tr>
                        <td>pendingOrderCount</td>
                        <td>{acc.pendingOrderCount}</td>
                      </tr>
                      <tr>
                        <td>unrealizedPL</td>
                        <td>{acc.unrealizedPL}</td>
                      </tr>
                      <tr>
                        <td>positionValue</td>
                        <td>{acc.positionValue}</td>
                      </tr>
                      <tr>
                        <td>marginUsed</td>
                        <td>{acc.marginUsed}</td>
                      </tr>
                      <tr>
                        <td>marginAvailable</td>
                        <td>{acc.marginAvailable}</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
  }
}

export default OandaAccount;
