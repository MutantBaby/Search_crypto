import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volumn,
  priceChange,
  marketCap,
}) => {
  return (
    <div className="coin__container">
      <div className="coin__row">
        <div className="coin">
          <img src={image} alt="" />
          <h1>{name}</h1>
          <p className="coin__symbol">{symbol}</p>
        </div>
        <div className="coin__data">
          <p className="coin__price">${price} </p>
          <p className="coin__volumn">${volumn}</p>
          {priceChange > 0 ? (
            <p style={{ color: "green" }}> +{priceChange.toFixed(2)}%</p>
          ) : (
            <p style={{ color: "#ff0000" }}> {priceChange.toFixed(2)}%</p>
          )}
          <p className="coin__marketCap">
            MKT CAP: ${marketCap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
