import React from "react";

const ButtonContainer = ({ children }) => {
  return (
    <div className="h-[calc(100% - 110px)] grid w-full grid-cols-4 grid-rows-5 gap-3 pt-4">
      {children}
    </div>
  );
};

export default ButtonContainer;
