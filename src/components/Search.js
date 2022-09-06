import "../App.css";

function Search({getChart, getData, coin, setCoin}) {

  const handleChange = (e) => {
    setCoin(e.target.value.toLowerCase());
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
        type="submit"
        className="btn-search"
        onClick={() => {
          getData(coin);
          getChart(coin);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
