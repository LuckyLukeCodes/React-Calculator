import InsetBtn from "./InsetBtn";

const InsetButtonContainer = ({ children }) => {
  return (
    <div className="mx-8 my-3 flex items-center justify-between">
      <div className="flex gap-4">
        <InsetBtn icon={<IoRefresh />} />
        <InsetBtn icon={<IoCalculator />} />
        <InsetBtn icon={<IoSettingsOutline />} />
      </div>
      <InsetBtn icon={<IoCloseCircleOutline />} />
    </div>
  );
};

export default InsetButtonContainer;
