import React, { useState } from "react";
import axios from "axios";
import { Button, Card, CardBody, CardHeader } from "reactstrap";

export default function BackTrader() {
  const [traderStatus, setTraderStatus] = useState({ status: "NA" });

  function startTrader() {
    console.log("START TRADER");
    (async () => {
      const postData = {
        instrument: "EUR_USD",
        runMode: "RUN_MODE_TESTING",
        startDate: "2019-09-17T06:00:00Z",
        endDate: "2019-09-17T14:00:00Z",
        recordCount: 1000
      };
      const apiUrl = process.env.REACT_APP_API_URL;
      const result = await axios.post(`${apiUrl}/api/trader/start`, postData);
      console.log(result);
      // setAccountData(result.data);
    })();
  }

  function getTraderStatus() {
    console.log("START TRADER");
    (async () => {
      const apiUrl = process.env.REACT_APP_API_URL;
      const result = await axios.get(`${apiUrl}/api/trader/status`);
      console.log(result);
      setTraderStatus(result.data);
    })();
  }

  return (
    <Card>
      <CardHeader>
        <i className="fa fa-align-justify"></i> Back Trader
      </CardHeader>
      <CardBody>
        <div>
          <div>Start Trader</div>
          <div>
            <Button block color="primary" onClick={startTrader}>
              Start Trader
            </Button>
          </div>
        </div>
        <div>
          <div>Get Status</div>
          <div>
            <Button block color="primary" onClick={getTraderStatus}>
              Get Status
            </Button>
          </div>
        </div>
        <div>
          <div>Trader Status</div>
          <div>
            <span>Status:{traderStatus.status}</span>
            <span>Total Trades:{traderStatus.total_trades}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
