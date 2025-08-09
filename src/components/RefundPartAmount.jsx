import { forwardRef } from "react";

const RefundPartPrices = forwardRef(function ({ value }, ref) {
  return (
    <input
      ref={ref}
      value={value}
      className="rounded-lg h-8 text-center border-2 border-[#7f95d1] mb-8 mt-1"
      readOnly
    ></input>
  );
});

export default RefundPartPrices;
