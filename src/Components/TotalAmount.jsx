import React, { useState } from "react";
import AddTransactionModal from "./AddTransactionModal"; // Import your modal component
import UniversalContainer from "../Coponents/UniversalContainer";

const TotalAmount = (props) => {
  const [addButton, setCancleButton] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddButtonClick = () => {
    setIsModalVisible(true);
    setCancleButton(true);
  };

  const handleCancelButtonClick = () => {
    setIsModalVisible(false);
    setCancleButton(false);
  };

  const handleTransactionAdded = () => {
    setIsModalVisible(false);
    setCancleButton(false);
  };

  return (
    <UniversalContainer>
      <div className="flex items-center space-x-9">
        <div className="pr-3">
          <h1>Your Balance: PKR {props.income - props.expense}</h1>
        </div>
        <div className="">
          {!addButton ? (
            <button
              className="border bg-gray-800 px-[2em] text-white py-1 hover:bg-gray-600"
              onClick={handleAddButtonClick}
            >
              Add
            </button>
          ) : (
            <button
              className="border bg-gray-800 px-[2em] text-white py-1 hover:bg-gray-600"
              onClick={handleCancelButtonClick}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
      <div>
        <AddTransactionModal
          isModalVisible={isModalVisible}
          toggleModal={() => setIsModalVisible(!isModalVisible)}
          onTransactionAdded={handleTransactionAdded}
          addTransaction={props.addTransaction}
        />
      </div>
    </UniversalContainer>
  );
};

export default TotalAmount;
