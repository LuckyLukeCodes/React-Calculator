const CalculatorSquareBtn = ({ text, btnClass, backgroundColor, onClick }) => {
  return (
    <div
      className={`flex h-24 ${text === "0" ? "col-span-2 w-full" : "w-[6rem]"} items-center 
      justify-center rounded-[22px] ${backgroundColor === undefined ? "bg-[#d7d3d3]" : "bg-[#85869F]"}`}
    >
      <button
        onClick={onClick}
        className={`${btnClass} hover:opacity-60
        ${text === "0" ? "w-[93%]" : "w-[5rem]"} h-20 text-3xl font-semibold text-[var(--text-color)]`}
      >
        {text}
      </button>
    </div>
  );
};

export default CalculatorSquareBtn;
