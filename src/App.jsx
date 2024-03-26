import { createContext, useContext, useState } from "react";
import Calculator from "./components/Calculator";
const CalculatorContext = createContext();
function App() {
  const [values, setValues] = useState([]);
  return (
    <CalculatorContext.Provider value={{ values, setValues }}>
      <div className="flex h-screen items-center justify-center">
        <Calculator />
      </div>
    </CalculatorContext.Provider>
  );
}

export const useCalculatorContext = () => useContext(CalculatorContext);
export default App;
