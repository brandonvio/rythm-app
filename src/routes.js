import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const OandaAccount = React.lazy(() => import("./views/Oanda/Account"));
const BackTrader = React.lazy(() => import("./views/Trader/BackTrader"));
const LiveTrader = React.lazy(() => import("./views/Trader/LiveTrader"));
const Instruments = React.lazy(() => import("./views/Oanda/Instruments"));
const Symbols = React.lazy(() => import("./views/Iexcloud/Symbols"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/instruments", name: "Instruments", component: Instruments },
  { path: "/oanda/account", name: "Oanda Account", component: OandaAccount },
  { path: "/trader/backtrader", name: "Back Trader", component: BackTrader },
  { path: "/trader/livetrader", name: "Live Trader", component: LiveTrader },
  { path: "/iexcloud/symbols", name: "IEX Cloud Symbols", component: Symbols }
];

export default routes;
