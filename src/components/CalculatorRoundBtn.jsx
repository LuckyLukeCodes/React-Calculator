import React from "react";

const CalculatorRoundBtn = ({ text, btnClass, backgroundColor, onClick }) => {
  return (
    <div
      className={`flex h-24 w-24 items-center justify-center rounded-full ${backgroundColor === undefined ? "bg-[#85869F]" : backgroundColor}`}
    >
      <button
        onClick={onClick}
        className={`${btnClass === undefined ? "operation-btn" : btnClass}  h-20 w-20 text-3xl font-semibold text-[var(--text-color)]`}
      >
        {text}
      </button>
    </div>
  );
};

export default CalculatorRoundBtn;
