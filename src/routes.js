import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const OandaAccount = React.lazy(() => import("./views/Oanda/AccountF"));
const BackTrader = React.lazy(() => import("./views/Trader/BackTrader"));
const LiveTrader = React.lazy(() => import("./views/Trader/LiveTrader"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/oanda/account", name: "Oanda Account", component: OandaAccount },
  { path: "/trader/backtrader", name: "Back Trader", component: BackTrader },
  { path: "/trader/livetrader", name: "Live Trader", component: LiveTrader }
];

export default routes;
