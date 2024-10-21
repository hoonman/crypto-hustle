import React, {useEffect, useState} from 'react';
const CRYPTO_API_KEY = import.meta.env.CRYPTO_API_KEY;

const CoinInfo = ({ image, name, symbol }) => {
  const [price, setPrice] = useState(null);
  useEffect(() => {
    const getCoinPrice = async () => {
      const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=` + CRYPTO_API_KEY);
      const data = await response.json();
      setPrice(data);
    };
    getCoinPrice().catch(console.error);
  }, [symbol]);

  return (
    <div>
      {price ? (
        // extract imageURL, fullName, and symbol for the coin
        <li className="main-list" key={symbol}>
          <img className="icons" src={`https://www.cryptocompare.com${image}`} alt={`Small icon for ${name} crypto coin`}></img>
          {name}
          <span className="tab">${price.USD} USD</span>
        </li>
      ): null}
    </div>
  )
}

export default CoinInfo;