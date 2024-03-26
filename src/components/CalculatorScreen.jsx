import { useCalculatorContext } from "../App";

const CalculatorScreen = () => {
  const { values } = useCalculatorContext();
  return (
    <div className="calculator-screen mx-6 my-6 flex h-32 flex-col-reverse items-end p-6 text-3xl text-[#585A60]">
      {values}
    </div>
  );
};

export default CalculatorScreen;
