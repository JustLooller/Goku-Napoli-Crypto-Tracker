import { react, useState } from "react";
import axios from "axios";
import "./App.css";
import HeaderContainer from "./components/Header";
import Search from "./components/Search";
import Info from "./components/Info";


function App() {
  const [data, setData] = useState({});
  const [coin, setCoin] = useState("bitcoin");

  return (
    <div>
      <HeaderContainer />
      <Search coin={coin} setCoin={setCoin} setData={setData} />
      <Info />
    </div>
  );
}

export default App;
