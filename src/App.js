import { react, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import HeaderContainer from "./components/Header";
import Search from "./components/Search";
import Info from "./components/Info";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [data, setData] = useState({});
  const [coin, setCoin] = useState("bitcoin");
  const [mcap, setMcap] = useState(0);
  const [image, setImage] = useState("");

  const getData = () => {
    axios({
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/${coin}?localization=en`,
    })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setMcap(response.data.market_data.market_cap.usd);
        setImage(response.data.image.large);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(coin);
    setIsToggled(!isToggled);
  }, []);

  return (
    <div>
      <HeaderContainer />
      <Search getData={getData} coin={coin} setCoin={setCoin} />
      <Info mcap={mcap} data={data} image={image} />
    </div>
  );
}

export default App;
