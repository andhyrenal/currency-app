import React from "react";
import Rates from "./Rates";

const AddRate = ({
  selectedCurrency,
  listRate,
  exchangeRate,
  setListRate,
  currencyOptions,
  setListExchangeRate,
  listExchangeRate,
  onChangeCurrency,
  setExchangeRate,
  usd,
}) => {
  // submit selected value
  const handleSubmit = (e) => {
    e.preventDefault();

    setListRate([
      ...listRate,
      { rate: selectedCurrency, value: exchangeRate * usd },
    ]);
  };

  // display the list from submit
  return (
    <>
      {listRate.map((list) => (
        <Rates
          key={list.rate}
          title={list.rate}
          value={list.value}
          listRate={listRate}
          setListRate={setListRate}
          list={list}
        />
      ))}
      {/* options for rate */}
      <div className="col p-1 mt-2">
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <select
              className="form-select"
              onChange={onChangeCurrency}
              value={selectedCurrency}
            >
              {currencyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button className="btn" type="submit">
              <strong>Add Currency </strong>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRate;
