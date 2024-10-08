import { useRef, forwardRef } from "react";

const RefundSelector = forwardRef(function ({ onCheck, check }, ref) {
  return (
    <input
      type="checkbox"
      ref={ref}
      checked={check}
      onChange={onCheck}
      className="self-center appearance-none h-8 w-8 mt-1 mb-8 border-2 border-[#A5C882] rounded-md checked:bg-[#A5C882] focus:outline-none focus:ring-2"
    ></input>
  );
});

export default RefundSelector;
