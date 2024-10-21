import { useState } from 'react'
import './App.css'
const CRYPTO_API_KEY = import.meta.env.CRYPTO_API_KEY;

function App() {
  const [list, setList] = useState(null);
  useEffect(() => {
    const fetchAllCoinData = () => {
      
    }
  }, []);
  return (
    <div>
      <h1>My Crypto List</h1>
    </div>
  )
}

export default App
