import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

function Charts(props) {
  const { symbol } = props;
  console.log(symbol);
  // console.log(props);
  // console.log(params);
  // console.log(location);
  return (
    <div>
      <TradingViewWidget
        symbol={symbol}
        theme={Themes.DARK}
        height={500}
        width="100%"
      />
    </div>
  );
}

export default Charts;
