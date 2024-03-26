import { createContext, useContext, useState } from "react";
import CalculatorRoundBtn from "./CalculatorRoundBtn";
import CalculatorScreen from "./CalculatorScreen";
import CalculatorSquareBtn from "./CalculatorSquareBtn";
import InsetBtn from "./InsetBtn";
import {
  IoRefresh,
  IoSettingsOutline,
  IoCalculator,
  IoCloseCircleOutline,
} from "react-icons/io5";
import ButtonContainer from "./ButtonContainer";

const data = [
  { text: "C", btnClass: "square-btn-purple", backgroundColor: "#85869F" },
  { text: "1/2", btnClass: "square-btn-purple", backgroundColor: "#85869F" },
  { text: "%", btnClass: "square-btn-purple", backgroundColor: "#85869F" },
  { type: "round", text: "÷" },
  { text: "7" },
  { text: "8" },
  { text: "9" },
  { type: "round", text: "X" },
  { text: "4" },
  { text: "5" },
  { text: "6" },
  { type: "round", text: "-" },
  { text: "1" },
  { text: "2" },
  { text: "3" },
  { type: "round", text: "+" },
];

const Calculator = () => {
  return (
    <div className="h-[80%] w-auto rounded-xl border-2 border-slate-100 bg-[#EDEDF0] shadow-lg shadow-slate-300 md:w-[28%]">
      <CalculatorScreen />
      <ButtonContainer></ButtonContainer>
      <div className="mx-8 my-3 flex items-center justify-between">
        <div className="flex gap-4">
          <InsetBtn icon={<IoRefresh />} />
          <InsetBtn icon={<IoCalculator />} />
          <InsetBtn icon={<IoSettingsOutline />} />
        </div>
        <InsetBtn icon={<IoCloseCircleOutline />} />
      </div>
      <div className="flex items-center justify-evenly">
        <div className="grid grid-cols-4 gap-4">
          {data.map((item, index) =>
            item.type === "round" ? (
              <CalculatorRoundBtn key={index} text={item.text} />
            ) : (
              <CalculatorSquareBtn
                key={index}
                text={item.text}
                btnClass={item.btnClass}
                backgroundColor={item.backgroundColor}
              />
            ),
          )}
        </div>
      </div>
      <div className="grid grid-cols-2">
        <CalculatorSquareBtn
          text="0"
          width="w-[13.3rem]"
          btnClass="square-btn"
        />
        <div className="flex">
          <CalculatorSquareBtn text="." btnClass="square-btn" />
          <CalculatorRoundBtn
            text="="
            btnClass="operation-btn-orange"
            backgroundColor="bg-[#D16D2D]"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
