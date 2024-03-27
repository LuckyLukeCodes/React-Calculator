const CalculatorScreen = ({ value }) => {
  return (
    <div
      className="calculator-screen my-3 flex h-32 flex-col-reverse 
                    items-end px-6 pb-2 text-[3rem] text-slate-500"
    >
      {value}
    </div>
  );
};

export default CalculatorScreen;
