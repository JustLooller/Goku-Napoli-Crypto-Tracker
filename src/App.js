import { react, useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";
import HeaderContainer from "./components/Header";
import Search from "./components/Search";
import Info from "./components/Info";
import Spinner from "./components/Spinner";
import Plotly from "plotly.js-dist";

function App() {
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({});
  const [data, setData] = useState({});
  const [coin, setCoin] = useState("bitcoin");

  const getData = (updatedCoin) => {
    axios({
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/${updatedCoin}?localization=en`,
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getChart = (updatedCoin) => {
    axios({
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/${updatedCoin}/market_chart?vs_currency=usd&days=30`,
    })
      .then((response) => {
        let result = response.data;
        let chartdata = { index: [], price: [], volumes: [] };
        for (const item of result.prices) {
          chartdata.index.push(item[0]);
          chartdata.price.push(item[1]);
        }
        for (const item of result.total_volumes)
          chartdata.volumes.push(item[1]);
        setChartData(chartdata);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    initChart(chartData);
  }, [chartData]);

  useEffect(() => {
    setLoading(true);
    try {
      getData(coin);
      getChart(coin);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const initChart = (data) => {
    let trace_price = {
      name: "Price ($)",
      x: data?.index?.map((t) => new Date(t)),
      y: data?.price,
      xaxis: "x",
      yaxis: "y1",
      type: "scatter",
      mode: "lines+marker",
      marker: { color: "blue", size: 3 },

    };
    let trace_volumes = {
      name: "Volumne ($B)",
      x: data?.index?.map((t) => new Date(t)),
      y: data?.volumes,
      xaxis: "x",
      yaxis: "y2",
      type: "bar",
      barmode: "relative",
      marker: {
        color: "rgb(49,130,189)",
        opacity: 0.7,
      },
    };
    let layout = {
      title: "Price ($)",
      width: "100%",
      height: "100%",
      margin: {
        l: 50,
        r: 20,
        t: 35,
        pad: 3,
      },
      showlegend: false,
      xaxis: {
        domain: [1, 1],
        anchor: "y2",
      },
      yaxis: {
        domain: [0.1, 1],
        anchor: "x",
      },
      yaxis2: {
        showticklabels: false,
        domain: [0, 0.1],
        anchor: "x",
      },
      grid: {
        roworder: "bottom to top",
      },
    };
    let config = { responsive: true };
    let series = [trace_price, trace_volumes];
    Plotly.react("chart", series, layout, config);
  };

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <HeaderContainer />
      <Search
        getChart={getChart}
        getData={getData}
        coin={coin}
        setCoin={setCoin}
      />
      <Info data={data} />
      <div id="chart" className="chart-container"></div>
    </div>
  );
}

export default App;
