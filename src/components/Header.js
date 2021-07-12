import React from "react";
import "./Header.css";

const Header = ({ listRate, setListRate, usd, setUsd, listExchangeRate }) => {
  // change usd value
  const changeUsd = (e, oldUsd) => {
    if (e.target.value >= 1) {
      setUsd(e.target.value);
      const newUsd = e.target.value;
      console.log(newUsd);
      const newlist = listRate.map((list) => {
        return {
          ...list,
          value: (list.value / oldUsd) * newUsd,
        };
      });
      setListRate(newlist);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-dark mb-3 header">
        <div className="card-body">
          <h6 className="card-subtitle mb-2 fst-italic">Unites State Dollar</h6>
          <div className="justify-content-between d-flex">
            <h5 className="card-title">USD</h5>
            <input
              value={usd}
              type="number"
              onChange={(e) => {
                changeUsd(e, usd);
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
