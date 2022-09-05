import "../App.css";

function Info({ data }) {

  function formatter(number) {
    let formatter = Intl.NumberFormat("us-US", {
      style: "currency",
      currency: "USD",
    });
    let million = formatter.format(number);
    return million;
  }

  const color = (data) => {
    if (Object.keys(data).length === 0) {
      return <></>;
    }
    if (data.market_data.price_change_percentage_24h_in_currency.usd > 0) {
      return (
        <div className="bottom-col-price-container-green">
          <p className="coin-price">{data.market_data.current_price.usd}$</p>
          <p className="coin-price-change-24h">
            24h: {data.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      );
    }
    return (
      <div className="bottom-col-price-container-red">
        <p className="coin-price">{data.market_data.current_price.usd}$</p>
        <p className="coin-price-change-24h">
          24h: {data.market_data.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
    );
  };

  return (
    <div className="info-container">
      <div className="left-column">
        <div className="top-row">
          <div className="coin-icon-container">
            <img
              className="coin-icon"
              src={data?.image?.large}
              alt="coin logo"
              width="40px"
              height="40px"
            ></img>
          </div>
          <div className="coin-name-container">
            <p className="coin-name">{data.name}</p>
            <p className="coin-abbr">{data?.symbol?.toUpperCase()}</p>
          </div>
          <div className="coin-MCAP-details">
            <p className="coin-position">#{data.market_cap_rank}</p>
            <p className="coin-MCAP">{formatter(data?.market_data?.market_cap?.usd)}</p>
          </div>
          <div className="social-icon-container">
            <a
              href="https://www.reddit.com/r/Bitcoin/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="coin-social-icon"
                src="https://cdn-icons-png.flaticon.com/512/1419/1419520.png"
                alt=""
                width="20px"
                height="20px"
              ></img>
            </a>
            <a
              href="https://github.com/bitcoin/bitcoin"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="coin-social-icon"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
                width="20px"
                height="20px"
              ></img>
            </a>
            <a href="http://www.bitcoin.org" target="_blank" rel="noreferrer">
              <img
                className="coin-social-icon"
                src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                alt=""
                width="20px"
                height="20px"
              ></img>
            </a>
          </div>
        </div>
        <div className="bottom-row">
          {color(data)}
          <div className="bottom-col-ath-container">
            <p className="coin-ath">ATH: XXXXX</p>
            <p className="coin-ath-change">xx%</p>
          </div>
          <div className="bottom-col-volume-container">
            <p className="coin-volume-24h">Volume : XXXX$</p>
          </div>
        </div>
      </div>
      <div className="widget"></div>
    </div>
  );
}

export default Info;
