import { useState } from 'react'
import './App.css'
const CRYPTO_API_KEY = import.meta.env.CRYPTO_API_KEY;

function App() {
  const [list, setList] = useState(null);
  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch("https://min-api.cryptocompare.com/data/all/coinlist?&api_key" + CRYPTO_API_KEY);
      const data = await response.json();
      setList(data.Data);
    }

    fetchAllCoinData().catch(console.error);
  }, []);
  return (
    <div>
      <h1>My Crypto List</h1>
    </div>
  )
}

export default App
