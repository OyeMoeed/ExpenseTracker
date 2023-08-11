import React from "react";
import UniversalContainer from "../Coponents/UniversalContainer";

const Expenses = ({ expense, income }) => {
  return (
    <UniversalContainer>
      <table className="border rounded-xl table-auto w-[20em] ">
        <thead>
          <tr>
            <th className="p-3 text-left ">Income</th>
            <th className="p-3 text-left ">Expense</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 text-left text-[1.5em] ">PKR {income}</td>
            <td className="p-3 text-left text-[1.5em] ">PKR {expense}</td>
          </tr>
        </tbody>
      </table>
    </UniversalContainer>
  );
};

export default Expenses;
