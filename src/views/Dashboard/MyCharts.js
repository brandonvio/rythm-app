import React, { Component, useEffect } from "react";
import { createChart } from "lightweight-charts";

function MyCharts() {
  useEffect(loadData);

  function loadData() {
    console.log("Load data!");
    var element = document.getElementById("td_chart");
    const chart = createChart(element, { width: 400, height: 300 });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 }
    ]);
  }

  return (
    <div>
      <h1>Charts!</h1>
      <div id="td_chart"></div>
    </div>
  );
}

export default MyCharts;
