import { useRef, forwardRef } from "react";

const PartPrices = forwardRef(function ({ onPartPriceChange, index }, ref) {
  return (
    <input
      type="number"
      ref={ref}
      className="rounded-lg h-8 text-center border-2 border-[#7f95d1] mb-8 mt-1"
      onChange={(e) => onPartPriceChange(e.target.value, index)} // Call the handler on change
    ></input>
  );
});

export default PartPrices;
