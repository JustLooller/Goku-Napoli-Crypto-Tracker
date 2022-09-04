import react from "react";
import "../App.css";

function HeaderContainer(props) {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img
          src="https://imgs.search.brave.com/fa6uaaf1Qf0MtIGxv5DLRlQIKKXwmlipGDUNic34PRE/rs:fit:1200:1200:1/g:ce/aHR0cDovL2kuaW1n/dXIuY29tLzdWYmU4/ejkuanBn"
          alt="Logo"
          width="125"
          height="125"
          className="logo"
        ></img>
      </div>
      <div className="titleContainer">
        <h1 className="titletext"> GOKU NAPOLI CRYPTO TRACKER </h1>
      </div>
    </div>
  );
}

export default HeaderContainer;
