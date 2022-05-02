import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Coin from "./Coin";

const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => setSearch(e.target.value);

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search)
  );

  console.log(coins);
  return (
    <div className="coin__app">
      <div className="coin__search">
        <h1 className="coin__text">Search Your Currency</h1>
        <form action="">
          <input
            type="text"
            placeholder="Search"
            className="coin__input"
            onChange={handleChange}
          />
        </form>
      </div>
      {filterCoins.map((coin) => (
        <Coin
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          volumn={coin.total_volume}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          marketCap={coin.market_cap}
        />
      ))}
    </div>
  );
}

export default App;
