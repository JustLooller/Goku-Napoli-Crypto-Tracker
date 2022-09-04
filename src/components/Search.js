import react from "react";
import "../App.css";
import { useState } from "react";
import axios from "axios";

function Search({coin, setCoin, setData }) {
  const handleChange = (e) => {
    setCoin(e.target.value.toLowerCase());
  };

  const getData = () => {
    axios({
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/${coin}?localization=en`,
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="BTC"
        onChange={handleChange}
      ></input>
      <button
        className="btn"
        onClick={(coin) => {
          getData(coin);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
