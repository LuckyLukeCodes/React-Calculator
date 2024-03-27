const CalculatorContainer = ({ children }) => {
  return (
    <div
      className="h-[80%] rounded-2xl border-2 border-slate-100 bg-[#EDEDF0] 
            p-[20px] shadow-lg shadow-slate-900/30"
    >
      {children}
    </div>
  );
};

export default CalculatorContainer;
