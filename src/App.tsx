import { useEffect, useState } from 'react';
import './App.css';
import WebApi, { CoinInfoDto } from './components/api/WebApi'; // Import both WebApi and PersonDto

function App() {
  const [coins, setCoins] = useState<CoinInfoDto[]>([]);

  useEffect(() => {
    const requestParameters = {
      pageNo: 1,
      pageSize: 10,
    };

    WebApi.Coins.coinInfoGet(requestParameters)
      .then((response) => {
        console.log('API call successful:', response);
        setCoins(response.data || []);
      })
      .catch((error) => {
        console.error('API call failed:', error);
      });
  }, []);

  return (
    <div className="App">
      {coins.length }
    </div>
  );
}

export default App
