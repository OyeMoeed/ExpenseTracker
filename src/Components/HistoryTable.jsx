import React from "react";
import UniversalContainer from "../Coponents/UniversalContainer";

const HistoryTable = (props) => {
  return (
    <div className="flex mt-4 border rounded-lg border-gray-800 p-2">
      <div className="flex space-x-[6.5em]">
        <p className="w-[10em]"> {props.payload.desc} </p>
        <p>{props.payload.amount}</p>
      </div>
    </div>
  );
};

export default HistoryTable;
