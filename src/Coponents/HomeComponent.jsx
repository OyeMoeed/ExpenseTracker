import { useEffect, useState } from "react";
import Expenses from "../Components/Expenses";
import Header from "../Components/Header";
import TotalAmount from "../Components/TotalAmount";
import History from "../Components/History";

const HomeComponent = () => {
  const [transactions, updateTransaction] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
  const [expense, updateExpnse] = useState(0);
  const [income, updateIncome] = useState(0);

  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };
  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload) => {
      payload.type === "Expense"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount);
    });
    updateExpnse(exp);
    updateIncome(inc);
  };

  useEffect(() => calculateBalance(), [transactions]);

  return (
    <div>
      <Header />
      <TotalAmount
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        addTransaction={addTransaction}
        expense={expense}
        income={income}
      />
      <Expenses expense={expense} income={income} />
      <History transactions={transactions} />
    </div>
  );
};
export default HomeComponent;
