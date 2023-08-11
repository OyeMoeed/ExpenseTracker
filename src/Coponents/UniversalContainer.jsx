import React from "react";

const UniversalContainer = ({ children }) => {
  return (
    <div className="flex items-center justify-center mx-[19em] mt-[1em] flex-col font-semibold font-normal ">
      {children}
    </div>
  );
};

export default UniversalContainer;
