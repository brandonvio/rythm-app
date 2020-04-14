import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const OandaAccount = React.lazy(() => import("./views/Oanda/Account"));
const BackTrader = React.lazy(() => import("./views/Trader/BackTrader"));
const LiveTrader = React.lazy(() => import("./views/Trader/LiveTrader"));
const Instruments = React.lazy(() => import("./views/Oanda/Instruments"));
const StocksETF = React.lazy(() => import("./views/Iexcloud/StocksETF"));
const Crypto = React.lazy(() => import("./views/Iexcloud/Crypto"));
const Symbols = React.lazy(() => import("./views/Symbols/Index"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/currencies", name: "Instruments", component: Instruments },
  { path: "/oanda/account", name: "Oanda Account", component: OandaAccount },
  { path: "/trader/backtrader", name: "Back Trader", component: BackTrader },
  { path: "/trader/livetrader", name: "Live Trader", component: LiveTrader },
  { path: "/symbols/:id", name: "Instrument", component: Symbols },
  {
    path: "/iexcloud/stocksetf",
    name: "IEX Cloud - Stocks and ETFs",
    component: StocksETF,
  },
  {
    path: "/iexcloud/crypto",
    name: "IEX Cloud - Crypto Currencies",
    component: Crypto,
  },
];

export default routes;
