import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";

function OandaAccount() {
  const [accountData, setAccountData] = useState({ accountData: [] });

  useEffect(() => {
    (async () => {
      const result = await axios.get("http://127.0.0.1:5000/matrix/api/oanda/account");
      setAccountData(result.data);
    })();
  });

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
                    <td>{accountData.alias}</td>
                  </tr>
                  <tr>
                    <td>balance</td>
                    <td>{accountData.balance}</td>
                  </tr>
                  <tr>
                    <td>NAV</td>
                    <td>{accountData.NAV}</td>
                  </tr>
                  <tr>
                    <td>pl</td>
                    <td>{accountData.pl}</td>
                  </tr>
                  <tr>
                    <td>financing</td>
                    <td>{accountData.financing}</td>
                  </tr>
                  <tr>
                    <td>commission</td>
                    <td>{accountData.commission}</td>
                  </tr>
                  <tr>
                    <td>guaranteedExecutionFees</td>
                    <td>{accountData.guaranteedExecutionFees}</td>
                  </tr>
                  <tr>
                    <td>commission</td>
                    <td>{accountData.commission}</td>
                  </tr>
                  <tr>
                    <td>guaranteedStopLossOrderMode</td>
                    <td>{accountData.guaranteedStopLossOrderMode}</td>
                  </tr>
                  <tr>
                    <td>hedgingEnabled</td>
                    <td>{accountData.hedgingEnabled}</td>
                  </tr>
                  <tr>
                    <td>commission</td>
                    <td>{accountData.commission}</td>
                  </tr>

                  <tr>
                    <td>withdrawalLimit</td>
                    <td>{accountData.withdrawalLimit}</td>
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
                    <td>{accountData.marginRate}</td>
                  </tr>
                  <tr>
                    <td>marginUsed</td>
                    <td>{accountData.marginUsed}</td>
                  </tr>
                  <tr>
                    <td>marginAvailable</td>
                    <td>{accountData.marginAvailable}</td>
                  </tr>
                  <tr>
                    <td>marginCloseoutUnrealizedPL</td>
                    <td>{accountData.marginCloseoutUnrealizedPL}</td>
                  </tr>
                  <tr>
                    <td>marginCloseoutNAV</td>
                    <td>{accountData.marginCloseoutNAV}</td>
                  </tr>
                  <tr>
                    <td>marginCloseoutMarginUsed</td>
                    <td>{accountData.marginCloseoutMarginUsed}</td>
                  </tr>
                  <tr>
                    <td>marginCloseoutPercent</td>
                    <td>{accountData.marginCloseoutPercent}</td>
                  </tr>
                  <tr>
                    <td>marginCloseoutPositionValue</td>
                    <td>{accountData.marginCloseoutPositionValue}</td>
                  </tr>
                  <tr>
                    <td>marginCallMarginUsed</td>
                    <td>{accountData.marginCallMarginUsed}</td>
                  </tr>
                  <tr>
                    <td>marginCallPercent</td>
                    <td>{accountData.marginCallPercent}</td>
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
                    <td>{accountData.openTradeCount}</td>
                  </tr>
                  <tr>
                    <td>openPositionCount</td>
                    <td>{accountData.openPositionCount}</td>
                  </tr>
                  <tr>
                    <td>pendingOrderCount</td>
                    <td>{accountData.pendingOrderCount}</td>
                  </tr>
                  <tr>
                    <td>unrealizedPL</td>
                    <td>{accountData.unrealizedPL}</td>
                  </tr>
                  <tr>
                    <td>positionValue</td>
                    <td>{accountData.positionValue}</td>
                  </tr>
                  <tr>
                    <td>marginUsed</td>
                    <td>{accountData.marginUsed}</td>
                  </tr>
                  <tr>
                    <td>marginAvailable</td>
                    <td>{accountData.marginAvailable}</td>
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

export default OandaAccount;
