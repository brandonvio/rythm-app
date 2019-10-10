import React, { Component } from "react";
import axios from "axios";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";

class OandaAccount extends Component {
  constructor() {
    super();
    this.state = {
      account: {}
    };
  }

  componentDidMount() {
    (async () => {
      try {
        const accountUrl = `${process.env.REACT_APP_API_URL}/api/account`;
        console.log(accountUrl);
        const { data } = await axios.get(accountUrl);
        this.setState({
          account: data
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }

  render() {
    const account = this.state.account;
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
                      <td>
                        <strong>{account.alias}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>balance</td>
                      <td style={{ color: "yellow" }}>
                        <strong>{account.balance}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>NAV</td>
                      <td>{account.NAV}</td>
                    </tr>
                    <tr>
                      <td>pl</td>
                      <td>{account.pl}</td>
                    </tr>
                    <tr>
                      <td>financing</td>
                      <td>{account.financing}</td>
                    </tr>
                    <tr>
                      <td>commission</td>
                      <td>{account.commission}</td>
                    </tr>
                    <tr>
                      <td>guaranteedExecutionFees</td>
                      <td>{account.guaranteedExecutionFees}</td>
                    </tr>
                    <tr>
                      <td>commission</td>
                      <td>{account.commission}</td>
                    </tr>
                    <tr>
                      <td>guaranteedStopLossOrderMode</td>
                      <td>{account.guaranteedStopLossOrderMode}</td>
                    </tr>
                    <tr>
                      <td>hedgingEnabled</td>
                      <td>{account.hedgingEnabled}</td>
                    </tr>
                    <tr>
                      <td>commission</td>
                      <td>{account.commission}</td>
                    </tr>

                    <tr>
                      <td>withdrawalLimit</td>
                      <td>{account.withdrawalLimit}</td>
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
                      <td>{account.marginRate}</td>
                    </tr>
                    <tr>
                      <td>marginUsed</td>
                      <td>{account.marginUsed}</td>
                    </tr>
                    <tr>
                      <td>marginAvailable</td>
                      <td>{account.marginAvailable}</td>
                    </tr>
                    <tr>
                      <td>marginCloseoutUnrealizedPL</td>
                      <td>{account.marginCloseoutUnrealizedPL}</td>
                    </tr>
                    <tr>
                      <td>marginCloseoutNAV</td>
                      <td>{account.marginCloseoutNAV}</td>
                    </tr>
                    <tr>
                      <td>marginCloseoutMarginUsed</td>
                      <td>{account.marginCloseoutMarginUsed}</td>
                    </tr>
                    <tr>
                      <td>marginCloseoutPercent</td>
                      <td>{account.marginCloseoutPercent}</td>
                    </tr>
                    <tr>
                      <td>marginCloseoutPositionValue</td>
                      <td>{account.marginCloseoutPositionValue}</td>
                    </tr>
                    <tr>
                      <td>marginCallMarginUsed</td>
                      <td>{account.marginCallMarginUsed}</td>
                    </tr>
                    <tr>
                      <td>marginCallPercent</td>
                      <td>{account.marginCallPercent}</td>
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
                      <td>{account.openTradeCount}</td>
                    </tr>
                    <tr>
                      <td>openPositionCount</td>
                      <td>{account.openPositionCount}</td>
                    </tr>
                    <tr>
                      <td>pendingOrderCount</td>
                      <td>{account.pendingOrderCount}</td>
                    </tr>
                    <tr>
                      <td>unrealizedPL</td>
                      <td>{account.unrealizedPL}</td>
                    </tr>
                    <tr>
                      <td>positionValue</td>
                      <td>{account.positionValue}</td>
                    </tr>
                    <tr>
                      <td>marginUsed</td>
                      <td>{account.marginUsed}</td>
                    </tr>
                    <tr>
                      <td>marginAvailable</td>
                      <td>{account.marginAvailable}</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default OandaAccount;
