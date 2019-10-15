import React, { Component } from "react";
import axios from "axios";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import numeral from "numeral";

class OandaAccount extends Component {
  constructor() {
    super();
    this.state = {
      account: {}
    };
    numeral.defaultFormat("$0,0.00");
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
      <div className="animated fadeIn">
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
                      <td style={{ width: "50%" }}> alias</td>
                      <td style={{ width: "50%" }}>
                        <strong>{account.alias}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>balance</td>
                      <td style={{ color: "yellow" }}>
                        <strong>{numeral(account.balance).format()}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>NAV</td>
                      <td>{numeral(account.NAV).format()}</td>
                    </tr>
                    <tr>
                      <td>pl</td>
                      <td>{numeral(account.pl).format()}</td>
                    </tr>
                    <tr>
                      <td>financing</td>
                      <td>{numeral(account.financing).format()}</td>
                    </tr>
                    <tr>
                      <td>commission</td>
                      <td>{numeral(account.commission).format()}</td>
                    </tr>
                    <tr>
                      <td>guaranteedExecutionFees</td>
                      <td>
                        {numeral(account.guaranteedExecutionFees).format()}
                      </td>
                    </tr>
                    <tr>
                      <td>commission</td>
                      <td>{numeral(account.commission).format()}</td>
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
                      <td>{numeral(account.commission).format()}</td>
                    </tr>

                    <tr>
                      <td>withdrawalLimit</td>
                      <td>{numeral(account.withdrawalLimit).format()}</td>
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
                      <td style={{ width: "50%" }}>marginRate</td>
                      <td style={{ width: "50%" }}>{account.marginRate}</td>
                    </tr>
                    <tr>
                      <td>marginUsed</td>
                      <td>{numeral(account.marginUsed).format()}</td>
                    </tr>
                    <tr>
                      <td>marginAvailable</td>
                      <td>{numeral(account.marginAvailable).format()}</td>
                    </tr>
                    <tr>
                      <td>marginCloseoutUnrealizedPL</td>
                      <td>
                        {numeral(account.marginCloseoutUnrealizedPL).format()}
                      </td>
                    </tr>
                    <tr>
                      <td>marginCloseoutNAV</td>
                      <td>{numeral(account.marginCloseoutNAV).format()}</td>
                    </tr>
                    <tr>
                      <td>marginCloseoutMarginUsed</td>
                      <td>
                        {numeral(account.marginCloseoutMarginUsed).format()}
                      </td>
                    </tr>
                    <tr>
                      <td>marginCloseoutPercent</td>
                      <td>{numeral(account.marginCloseoutPercent).format()}</td>
                    </tr>
                    <tr>
                      <td>marginCloseoutPositionValue</td>
                      <td>
                        {numeral(account.marginCloseoutPositionValue).format()}
                      </td>
                    </tr>
                    <tr>
                      <td>marginCallMarginUsed</td>
                      <td>{numeral(account.marginCallMarginUsed).format()}</td>
                    </tr>
                    <tr>
                      <td>marginCallPercent</td>
                      <td>{numeral(account.marginCallPercent).format()}</td>
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
                      <td style={{ width: "50%" }}>openTradeCount</td>
                      <td style={{ width: "50%" }}>{account.openTradeCount}</td>
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
                      <td>{numeral(account.unrealizedPL).format()}</td>
                    </tr>
                    <tr>
                      <td>positionValue</td>
                      <td>{numeral(account.positionValue).format()}</td>
                    </tr>
                    <tr>
                      <td>marginUsed</td>
                      <td>{numeral(account.marginUsed).format()}</td>
                    </tr>
                    <tr>
                      <td>marginAvailable</td>
                      <td>{numeral(account.marginAvailable).format()}</td>
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
