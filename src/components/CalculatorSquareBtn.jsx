import { useCalculatorContext } from "../App";

const CalculatorSquareBtn = ({ text, btnClass, backgroundColor, width }) => {
  const { values, setValues } = useCalculatorContext();
  return (
    <div
      className={`flex h-24 ${width !== undefined ? width : "w-24"} items-center justify-center rounded-[22px] ${backgroundColor === undefined ? "bg-[#d7d3d3]" : "bg-[#85869F]"}`}
    >
      <button
        onClick={() => {
          setValues([...values, { value: text }]);
        }}
        className={`${btnClass === undefined ? "square-btn" : btnClass} ${width !== undefined ? "w-40" : "w-20"} h-20 text-3xl font-semibold text-[var(--text-color)]`}
      >
        {text}
      </button>
    </div>
  );
};

export default CalculatorSquareBtn;
