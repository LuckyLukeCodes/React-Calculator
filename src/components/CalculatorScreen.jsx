const CalculatorScreen = ({ value }) => {
  return (
    <div className="calculator-screen my-4 flex h-32 flex-col-reverse items-end p-6 text-3xl text-[#585A60]">
      {value}
    </div>
  );
};

export default CalculatorScreen;
