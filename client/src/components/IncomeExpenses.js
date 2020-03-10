import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .reduce(
      (acc, transaction) =>
        transaction.amount > 0 ? (acc += transaction.amount) : acc,
      0
    )
    .toFixed(2);
  const expense = transactions
    .reduce(
      (acc, transaction) =>
        transaction.amount < 0 ? (acc -= transaction.amount) : acc,
      0
    )
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+€{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-€{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
