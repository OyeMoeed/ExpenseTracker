import React, { useState, useEffect } from "react";
import UniversalContainer from "../Coponents/UniversalContainer";
import HistoryTable from "./HistoryTable";

const History = (props) => {
  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updateTransaction] = useState();

  const filterData = () => {
    if (!searchText || !searchText.trim().length) {
      updateTransaction(props.transactions);
      return;
    }
    let txn = [...props.transactions];
    txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    updateTransaction(txn);
  };
  useEffect(() => {
    filterData(searchText);
  }, [props.transactions]);

  return (
    <UniversalContainer>
      <div className="space-y-2">
        <div>
          <h1>Transactions</h1>
        </div>
        <div className="w-[20em]">
          <input
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              updateSearchText(e.target.value);
              filterData(e.target.value);
            }}
            className="w-[20em] p-2 border border-gray-800 bg-gray-200  text-white rounded-xl drop-shadow-lg"
          />
          <div className="flex-row">
            {filteredTransaction?.map((payload) => (
              <HistoryTable payload={payload} />
            ))}
          </div>
        </div>
      </div>
    </UniversalContainer>
  );
};

export default History;
