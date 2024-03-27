import { useState } from "react";
import CalculatorRoundBtn from "./CalculatorRoundBtn";
import CalculatorScreen from "./CalculatorScreen";
import CalculatorSquareBtn from "./CalculatorSquareBtn";
import InsetBtn from "./InsetBtn";
import data from "../utils/data";
import { toLocaleString, removeSpaces } from "../utils/functions";
import {
  IoRefresh,
  IoSettingsOutline,
  IoCalculator,
  IoCloseCircleOutline,
} from "react-icons/io5";
import ButtonContainer from "./ButtonContainer";

const Calculator = () => {
  const [calculation, setCalculation] = useState({
    operation: "",
    number: 0,
    result: 0,
  });

  const handleNumberClick = (value) => {
    let sanitizedNumber = removeSpaces(calculation.number);
    if (sanitizedNumber.length < 16) {
      setCalculation({
        ...calculation,
        number:
          sanitizedNumber === 0 && value === "0"
            ? "0"
            : calculation.number % 1 === 0
              ? toLocaleString(Number(sanitizedNumber + value))
              : toLocaleString(calculation.number + value),
        result: !calculation.operation ? 0 : calculation.result,
      });
    }
  };

  const handleDecimalClick = (value) => {
    setCalculation({
      ...calculation,
      number: !calculation.number.toString().includes(".")
        ? calculation.number + value
        : calculation.number,
    });
  };

  const handleEqualsClick = () => {
    if (calculation.operation && calculation.number) {
      const math = (a, b, operation) => {
        switch (operation) {
          case "+":
            return a + b;
          case "-":
            return a - b;
          case "x":
            return a * b;
          default:
            return a / b;
        }
      };

      setCalculation({
        ...calculation,
        result:
          calculation.number === 0 && calculation.operation === "/"
            ? "Can't divide by 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calculation.result)),
                  Number(removeSpaces(calculation.number)),
                  calculation.operation,
                ),
              ),
        operation: "",
        number: 0,
      });
    }
  };

  const handlePercentClick = () => {
    let num = calculation.number
      ? parseFloat(removeSpaces(calculation.number))
      : 0;
    let res = calculation.result
      ? parseFloat(removeSpaces(calculation.result))
      : 0;

    setCalculation({
      ...calculation,
      number: (num /= Math.pow(100, 1)),
      result: (res /= Math.pow(100, 1)),
      operation: "",
    });
  };

  const handleResetClick = () => {
    setCalculation({
      ...calculation,
      operation: "",
      number: 0,
      result: 0,
    });
  };

  const handleArithmeticClick = (value) => {
    setCalculation({
      ...calculation,
      operation: value,
      result:
        !calculation.result && calculation.number
          ? calculation.number
          : calculation.result,
      number: 0,
    });
  };

  const handleHalfClick = () => {
    const num =
      calculation.result === 0 ? calculation.number : calculation.result;

    const math = (a, b) => {
      return a / b;
    };

    setCalculation({
      ...calculation,
      result:
        num === 0
          ? "Can't half 0"
          : toLocaleString(math(Number(removeSpaces(num)), 2)),
      operation: "",
      number: 0,
    });
  };

  const handleButtonClick = (value) => {
    switch (value) {
      case "C":
        handleResetClick();
        break;
      case "1/2":
        handleHalfClick();
        break;
      case "%":
        handlePercentClick();
        break;
      case "=":
        handleEqualsClick();
        break;
      case ".":
        handleDecimalClick(value);
        break;
      case "+":
      case "-":
      case "÷":
      case "x":
        handleArithmeticClick(value);
        break;
      default:
        handleNumberClick(value);
        break;
    }
  };

  return (
    <div className="h-[80%] rounded-xl border-2 border-slate-100 bg-[#EDEDF0] p-[20px] shadow-lg shadow-slate-300">
      <CalculatorScreen
        value={calculation.number ? calculation.number : calculation.result}
      />

      <ButtonContainer>
        {data.map((item, index) =>
          item.type === "round" ? (
            <CalculatorRoundBtn
              key={index}
              text={item.text}
              backgroundColor={item.backgroundColor}
              btnClass={item.btnClass}
              onClick={() => handleButtonClick(item.text)}
            />
          ) : (
            <CalculatorSquareBtn
              key={index}
              text={item.text}
              btnClass={item.btnClass}
              backgroundColor={item.backgroundColor}
              onClick={() => handleButtonClick(item.text)}
            />
          ),
        )}
      </ButtonContainer>
    </div>
  );
};

export default Calculator;
