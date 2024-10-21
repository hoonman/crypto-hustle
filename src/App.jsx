import { useState, useEffect } from 'react'
import './App.css'
import CoinInfo from './components/CoinInfo'
const CRYPTO_API_KEY = import.meta.env.CRYPTO_API_KEY;

function App() {
  const [list, setList] = useState(null);
  const [filteredResults, setFilteredResults] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = Object.keys(list.Data).filter((item) =>
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFilteredResults(filteredData);
      console.log("filteredData", filteredData);
    } else {
      setFilteredResults(Object.keys(list.Data));
    }
  };
  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch("https://min-api.cryptocompare.com/data/all/coinlist");
      const data = await response.json();
      setList(data);
      console.log("data: ", data);
    }

    fetchAllCoinData().catch(console.error);
  }, []);


  return (
    <div className="whole-page">
      <h1>My Crypto List</h1>
      <input type="text" placeholder="Search..." onChange={(inputString) => searchItems(inputString.target.value)}></input>
      {searchInput.length > 0
        ? filteredResults.map((coin) =>
          list.Data[coin].PlatformType === "blockchain" ?
            <CoinInfo
              image={list.Data[coin].ImageUrl}
              name={list.Data[coin].FullName}
              symbol={list.Data[coin].Symbol}
            />
            : null
        )
        : list && Object.entries(list.Data).map(([coin]) =>
          list.Data[coin].PlatformType === "blockchain" ?
            <CoinInfo
              image={list.Data[coin].ImageUrl}
              name={list.Data[coin].FullName}
              symbol={list.Data[coin].Symbol}
            />
            : null
        )}
      <ul>
        {list && Object.entries(list.Data).map(([coin]) =>
          list.Data[coin].PlatformType === "blockchain" ? (
            // <li key={list.Data[coin].FullName}>{list.Data[coin].FullName}</li>
            <CoinInfo image={list.Data[coin].ImageUrl} name={list.Data[coin].FullName} symbol={list.Data[coin].Symbol} ></CoinInfo>
          ) : null
        )}
      </ul>
    </div>
  )
}

export default App;
