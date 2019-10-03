import React from "react";
import TradingViewWidget, { Themes } from "./TradingViewWidgetX";

function Charts() {
  return (
    <div>
      <TradingViewWidget symbol="NASDAQ:AAPL" theme={Themes.DARK} height={700} />
    </div>
  );
}

export default Charts;
