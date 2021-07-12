import React from "react";
import "./Content.css";
import { FaTrash } from "react-icons/fa";
import "./List.css";

const Rates = (props) => {
  // delete rate from the list
  const deleteHandler = () => {
    props.setListRate(
      props.listRate.filter((list) => list.rate !== props.list.rate)
    );
  };

  return (
    <>
      <div className="p-2">
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">
            <h5>{props.title}</h5>
          </li>
          <li className="list-group-item">
            <h5>{props.value}</h5>
          </li>
          <li className="list-group-item trash">
            <h5>
              <FaTrash onClick={deleteHandler} />
            </h5>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Rates;
