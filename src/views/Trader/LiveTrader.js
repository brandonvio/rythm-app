import React, { useState } from "react";
import axios from "axios";

export default function LiveTrader() {
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
      const result = await axios.post("http://127.0.0.1:4000/api/trader/start", postData);
      console.log(result);
      // setAccountData(result.data);
    })();
  }

  function getTraderStatus() {
    console.log("START TRADER");

    (async () => {
      const result = await axios.get("http://127.0.0.1:4000/api/trader/status");
      console.log(result);
      setTraderStatus(result.data);
    })();
  }

  console.log(traderStatus);

  return (
    <div>
      <h1>Trader</h1>
      <div>
        <div>Start Trader</div>
        <div>
          <button onClick={startTrader}>Start Trader</button>
        </div>
      </div>
      <div>
        <div>Get Status</div>
        <div>
          <button onClick={getTraderStatus}>Get Status</button>
        </div>
      </div>
      <div>
        <div>Trader Status</div>
        <div>
          <span>Status:{traderStatus.status}</span>
          <span>Total Trades:{traderStatus.total_trades}</span>
        </div>
      </div>
    </div>
  );
}
