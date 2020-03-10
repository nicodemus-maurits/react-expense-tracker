import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = transactions
    .reduce((acc, transaction) => (acc += transaction.amount), 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>€{numberWithCommas(total)}</h1>
    </>
  );
};

export default Balance;
