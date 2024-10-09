import { forwardRef } from "react";

const RefundSelector = forwardRef(function ({ onCheck, check }, ref) {
  const handleCheck = (e) => {
    e.stopPropagation(); // Prevent bubbling
    onCheck();
  };

  const handleMarginClick = (e) => {
    e.stopPropagation(); // Prevent clicking on margin from selecting checkbox
  };

  return (
    <label className="flex flex-col justfy-center items-center cursor-auto p-0 disabled">
      <input
        onClick={handleMarginClick}
        type="checkbox"
        ref={ref}
        checked={check}
        onChange={handleCheck}
        className="mb-8 mt-1 appearance-none h-8 w-8 border-2 border-[#A5C882] rounded-md checked:bg-[#A5C882] focus:outline-none focus:ring-2 cursor-pointer"
      />
    </label>
  );
});

export default RefundSelector;
