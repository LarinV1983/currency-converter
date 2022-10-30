import React from 'react';
import Block  from './Block';
import './index.scss';

function App() {
  const [fromCurrency, setFromCurrency] = React.useState('RUB');
  const [toCurrency, setToCurrency] = React.useState('USD');
  const [fromPrice, setFromPrice] = React.useState(0);
  const [toPrice, setToPrice] = React.useState(0);
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

  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency];
    const result = price * rates[toCurrency];
    setFromPrice(value);
    setToPrice(result);
  };

  const onChangeToPrice = (value) => {
    const priceСurrency = (rates[fromCurrency] / rates[toCurrency]) * value;
    setFromPrice(priceСurrency);
    setToPrice(value);
  };

  return (
    <div className="App">
    <Block 
    value={fromPrice} 
    currency={fromCurrency} 
    onChangeCurrency={setFromCurrency} 
    onChangeValue={onChangeFromPrice} 
    />
    <Block 
    value={toPrice} 
    currency={toCurrency} 
    onChangeCurrency={setToCurrency}
    onChangeValue={onChangeToPrice} 
    />
    </div>
  );
}

export default App;
