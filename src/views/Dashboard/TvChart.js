import React, { Component } from "react";
import { createChart } from "lightweight-charts";

class TvChart extends Component {
  constructor(props) {
    super(props);
    this.chartDiv = React.createRef();

    this.chartConfig = {
      width: 400,
      height: 200,
      layout: {
        backgroundColor: "#ffffff",
        textColor: "rgba(33, 56, 77, 1)"
      },
      grid: {
        vertLines: {
          color: "rgba(197, 203, 206, 0.7)"
        },
        horzLines: {
          color: "rgba(197, 203, 206, 0.7)"
        }
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false
      }
    };

    this.chartData = [
      { time: 1556877600, value: 230.12 },
      { time: 1556881200, value: 230.24 },
      { time: 1556884800, value: 230.63 },
      { time: 1556888400, value: 231.35 },
      { time: 1556892000, value: 232.24 },
      { time: 1556895600, value: 232.52 },
      { time: 1557126000, value: 228.71 },
      { time: 1557129600, value: 228.88 },
      { time: 1557133200, value: 228.18 },
      { time: 1557136800, value: 228.89 },
      { time: 1557140400, value: 229.05 },
      { time: 1557144000, value: 229.46 },
      { time: 1557147600, value: 230.98 },
      { time: 1557151200, value: 231.71 },
      { time: 1557154800, value: 232.8 },
      { time: 1557212400, value: 233.1 },
      { time: 1557216000, value: 232.9 },
      { time: 1557219600, value: 232.9 },
      { time: 1557223200, value: 232.76 },
      { time: 1557226800, value: 232.41 },
      { time: 1557230400, value: 231.2 },
      { time: 1557234000, value: 230.83 },
      { time: 1557237600, value: 230.57 },
      { time: 1557241200, value: 231.49 },
      { time: 1557298800, value: 231.5 },
      { time: 1557302400, value: 230.87 },
      { time: 1557306000, value: 229.79 },
      { time: 1557309600, value: 230.06 },
      { time: 1557313200, value: 230.53 },
      { time: 1557316800, value: 231.04 },
      { time: 1557320400, value: 230.63 },
      { time: 1557324000, value: 230.83 },
      { time: 1557327600, value: 230 },
      { time: 1557471600, value: 228.8 },
      { time: 1557475200, value: 227.73 },
      { time: 1557478800, value: 227.73 },
      { time: 1557482400, value: 227.84 },
      { time: 1557486000, value: 228.2 },
      { time: 1557489600, value: 228.33 },
      { time: 1557493200, value: 228.6 },
      { time: 1557496800, value: 227.11 },
      { time: 1557500400, value: 227 },
      { time: 1557730800, value: 226.29 },
      { time: 1557734400, value: 227.04 },
      { time: 1557738000, value: 227.97 },
      { time: 1557741600, value: 227.85 },
      { time: 1557745200, value: 227.13 },
      { time: 1557748800, value: 225.64 },
      { time: 1557752400, value: 224.46 },
      { time: 1557756000, value: 225.22 },
      { time: 1557759600, value: 224.22 },
      { time: 1557817200, value: 225.9 },
      { time: 1557820800, value: 226.15 },
      { time: 1557824400, value: 227.9 },
      { time: 1557828000, value: 228.86 },
      { time: 1557831600, value: 228.83 },
      { time: 1557835200, value: 228.17 },
      { time: 1557838800, value: 228.71 },
      { time: 1557842400, value: 227.68 },
      { time: 1557846000, value: 227.88 },
      { time: 1557903600, value: 227.67 },
      { time: 1557907200, value: 227.52 },
      { time: 1557910800, value: 226.05 },
      { time: 1557914400, value: 224.54 },
      { time: 1557918000, value: 225.96 },
      { time: 1557921600, value: 224.88 },
      { time: 1557925200, value: 226.78 },
      { time: 1557928800, value: 229.09 },
      { time: 1557932400, value: 228.69 },
      { time: 1557990000, value: 230.22 },
      { time: 1557993600, value: 231.12 },
      { time: 1557997200, value: 229.67 },
      { time: 1558000800, value: 229.44 },
      { time: 1558004400, value: 229.72 },
      { time: 1558008000, value: 229.57 },
      { time: 1558011600, value: 229.42 },
      { time: 1558015200, value: 229.23 },
      { time: 1558018800, value: 228.19 },
      { time: 1558076400, value: 227.72 },
      { time: 1558080000, value: 227.31 },
      { time: 1558083600, value: 226.93 },
      { time: 1558087200, value: 227.15 },
      { time: 1558090800, value: 226.75 },
      { time: 1558094400, value: 226.5 },
      { time: 1558098000, value: 227.4 },
      { time: 1558101600, value: 227.96 },
      { time: 1558105200, value: 226.94 },
      { time: 1558335600, value: 227.64 },
      { time: 1558339200, value: 226.39 },
      { time: 1558342800, value: 226.03 },
      { time: 1558346400, value: 225.91 },
      { time: 1558350000, value: 226.21 },
      { time: 1558353600, value: 225.52 },
      { time: 1558357200, value: 225.71 },
      { time: 1558360800, value: 226.18 },
      { time: 1558364400, value: 226 },
      { time: 1558422000, value: 226.81 },
      { time: 1558425600, value: 226.52 },
      { time: 1558429200, value: 226.98 },
      { time: 1558432800, value: 229.19 },
      { time: 1558436400, value: 229.65 },
      { time: 1558440000, value: 229.8 },
      { time: 1558443600, value: 229.37 },
      { time: 1558447200, value: 231.13 },
      { time: 1558450800, value: 232.71 },
      { time: 1558508400, value: 231.06 },
      { time: 1558512000, value: 231.93 },
      { time: 1558515600, value: 236.04 },
      { time: 1558519200, value: 235.81 },
      { time: 1558522800, value: 237.09 },
      { time: 1558526400, value: 236.79 },
      { time: 1558530000, value: 236.6 },
      { time: 1558533600, value: 235.73 },
      { time: 1558537200, value: 235.86 },
      { time: 1558594800, value: 233.31 },
      { time: 1558598400, value: 232.46 },
      { time: 1558602000, value: 233.03 },
      { time: 1558605600, value: 233.2 },
      { time: 1558609200, value: 232.8 },
      { time: 1558612800, value: 231.67 },
      { time: 1558616400, value: 230.71 },
      { time: 1558620000, value: 229.05 },
      { time: 1558623600, value: 229.3 },
      { time: 1558681200, value: 234.3 },
      { time: 1558684800, value: 233.85 },
      { time: 1558688400, value: 233.68 },
      { time: 1558692000, value: 234.95 },
      { time: 1558695600, value: 235.34 },
      { time: 1558699200, value: 235.34 },
      { time: 1558702800, value: 234.76 },
      { time: 1558706400, value: 233.3 },
      { time: 1558710000, value: 234.45 },
      { time: 1558940400, value: 235.6 },
      { time: 1558944000, value: 235.7 },
      { time: 1558947600, value: 234.95 },
      { time: 1558951200, value: 235.03 },
      { time: 1558954800, value: 234.93 },
      { time: 1558958400, value: 234.33 },
      { time: 1558962000, value: 234.25 },
      { time: 1558965600, value: 234.98 },
      { time: 1558969200, value: 236 },
      { time: 1559026800, value: 236.11 },
      { time: 1559030400, value: 235.83 },
      { time: 1559034000, value: 235.98 },
      { time: 1559037600, value: 235.94 },
      { time: 1559041200, value: 236.36 },
      { time: 1559044800, value: 236.07 },
      { time: 1559048400, value: 235.69 },
      { time: 1559052000, value: 232.94 },
      { time: 1559055600, value: 233.79 }
    ];
  }

  componentDidMount() {
    var element = this.chartDiv.current;
    // const chart = createChart(element, { width: 400, height: 300 });
    const chart = createChart(element, this.chartConfig);
    const lineSeries = chart.addLineSeries();
    lineSeries.setData(this.chartData);
    // lineSeries.setData([
    //   { time: "2019-04-11", value: 80.01 },
    //   { time: "2019-04-12", value: 96.63 },
    //   { time: "2019-04-13", value: 76.64 },
    //   { time: "2019-04-14", value: 81.89 },
    //   { time: "2019-04-15", value: 74.43 },
    //   { time: "2019-04-16", value: 80.01 },
    //   { time: "2019-04-17", value: 96.63 },
    //   { time: "2019-04-18", value: 76.64 },
    //   { time: "2019-04-19", value: 81.89 },
    //   { time: "2019-04-20", value: 74.43 }
    // ]);
    chart.timeScale().fitContent();
  }

  render() {
    return <div ref={this.chartDiv}></div>;
  }
}

export default TvChart;
