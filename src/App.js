import { react, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import HeaderContainer from "./components/Header";
import Search from "./components/Search";
import Info from "./components/Info";

function App() {
  const [data, setData] = useState({});
  const [coin, setCoin] = useState("bitcoin");

  const getData = () => {
    axios({
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/${coin}?localization=en`,
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data);  
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(coin);
  }, []);

  return (
    <div>
      <HeaderContainer />
      <Search getData={getData} coin={coin} setCoin={setCoin} />
      <Info data={data} />
    </div>
  );
}

export default App;
