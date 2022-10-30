import React from 'react';
import Block  from './Block';
import './index.scss';

function App() {
  const [fromCurrency, setFromCurrency] = React.useState('RUB');
  const [toCurrency, setToCurrency] = React.useState('USD');
  const [rates, setRates] = React.useState({});

  React.useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
    .then((res) => res.json())
    .then((json) => {
      setRates(json.rates);
      console.log(json.rates);
    })
    .catch((err) => {
      console.warn(err);
      alert('НЕ УДАЛОСЬ ПОЛУЧИТЬ ДАННЫЕ');
    });
  }, []);

  return (
    <div className="App">
    <Block value={0} currency={fromCurrency} onChangeCurrency={setFromCurrency} />
    <Block value={0} currency={toCurrency} onChangeCurrency={setToCurrency} />
    </div>
  );
}

export default App;
