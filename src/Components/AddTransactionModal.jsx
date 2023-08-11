import React, { useState } from "react";
import UniversalContainer from "../Coponents/UniversalContainer";
const AddTransactionModal = ({
  isModalVisible,
  toggleModal,
  onTransactionAdded,
  addTransaction,
}) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("Income");

  const AddTransaction = () => {
    addTransaction({ amount: Number(amount), desc, type, id: Date.now() });
    onTransactionAdded();
    toggleModal();
  };
  if (!isModalVisible) {
    return;
  }
  return (
    <UniversalContainer>
      <div className="flex flex-col space-y-3 mt-[1em]">
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="w-[19em] border border-gray-800 p-2 rounded-xl"
        />
        <input
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Discription"
          className="w-[19em] border border-gray-800 p-2 rounded-xl"
        />
        <div className="space-x-2">
          <input
            type="radio"
            id="Income"
            name="type"
            value="Income"
            onChange={(e) => setType(e.target.value)}
            checked={type === "Income"}
          />
          <label htmlFor="Income"> Income</label>
          <input
            type="radio"
            id="Expense"
            name="type"
            value="Expense"
            checked={type === "Expense"}
            onChange={(e) => setType(e.target.value)}
          />
          <label htmlFor="Expense">Expense</label>
        </div>
        <button
          onClick={AddTransaction}
          className="border bg-gray-800 px-[2em] py-1 text-white hover:bg-gray-600"
        >
          ADD TRANSACTION
        </button>
      </div>
    </UniversalContainer>
  );
};

export default AddTransactionModal;
