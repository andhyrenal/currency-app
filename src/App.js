import { useEffect, useState } from "react";
import AddRate from "./components/AddRate";
import Header from "./components/Header";
import axios from "axios";
import "./App.css";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [exchangeRate, setExchangeRate] = useState();
  const [listRate, setListRate] = useState([]);
  const [listExchangeRate, setListExchangeRate] = useState([]);
  const [usd, setUsd] = useState(1);
  const [defaultCurrency, setDefaultCurrency] = useState();

  // get currency value from API
  useEffect(() => {
    async function getData() {
      const request = await axios.get(
        "https://api.exchangerate.host/latest?base=USD&symbols=CAD,IDR,GBP,CHF,SGD,INR,MYR,JPY,KRW"
      );
      const firstCurrency = Object.keys(request.data.rates)[0];
      setCurrencyOptions(Object.keys(request.data.rates));
      setListExchangeRate(request.data.rates);
      setDefaultCurrency(firstCurrency);
    }
    getData();
  }, []);

  // get value from each rate
  useEffect(() => {
    async function getRate() {
      const request = await axios.get(
        `https://api.exchangerate.host/convert?from=USD&to=${defaultCurrency}`
      );
      setExchangeRate(request.data.result);
    }
    getRate();
  }, [defaultCurrency]);

  return (
    <div className="App container mt-3 p-3 col-4">
      <Header
        listRate={listRate}
        setListRate={setListRate}
        listExchangeRate={listExchangeRate}
        usd={usd}
        setUsd={setUsd}
      />

      <AddRate
        selectedCurrency={defaultCurrency}
        currencyOptions={currencyOptions}
        exchangeRate={exchangeRate}
        listRate={listRate}
        setListRate={setListRate}
        setListExchangeRate={setListExchangeRate}
        listExchangeRate={listExchangeRate}
        onChangeCurrency={(e) => setDefaultCurrency(e.target.value)}
        usd={usd}
      />
    </div>
  );
}

export default App;
