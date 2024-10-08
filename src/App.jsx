import "./App.css";
import PartNumbers from "./components/PartNumbers";
import PartPrices from "./components/PartPrice";
import RefundPartPrices from "./components/RefundPartAmount";
import RefundSelector from "./components/RefundSelector";
import { useState, useEffect } from "react";

function App() {
  const [partPriceTotal, setPartPriceTotal] = useState(Array(25).fill(0));
  const [ratio, setRatio] = useState(1);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [refund, setRefund] = useState(0);
  const [deduction, setDeduction] = useState(0);
  const [kitPrice, setKitPrice] = useState(0);

  const handleChange = (index) => {
    setSelectedIndices((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

  useEffect(() => {
    handleRefundDeduct();
  }, [selectedIndices, partPriceTotal, kitPrice]);

  const handleRefundDeduct = () => {
    if (selectedIndices.length > 0) {
      const refundTotal = selectedIndices.reduce(
        (accumulator, currentValue) => {
          console.log(refundAmount(currentValue));

          return accumulator + Number(refundAmount(currentValue));
        },
        0
      );

      setRefund(refundTotal.toFixed(2));
      kitPrice
        ? setDeduction((kitPrice - refundTotal).toFixed(2))
        : setDeduction(0);
    } else {
      setRefund(0);
      setDeduction(0);
    }
  };

  const handlePriceChange = (value, index) => {
    const updatedPrices = [...partPriceTotal];
    updatedPrices[index] = value;
    setPartPriceTotal(updatedPrices);

    const sum = updatedPrices.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );
    setRatio(sum !== 0 && kitPrice !== 0 ? kitPrice / sum : 0);
  };

  const handleKitPriceChange = (e) => {
    const value = Number(e.target.value);
    setKitPrice(value);

    const sum = partPriceTotal.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );
    setRatio(sum !== 0 && value !== 0 ? value / sum : 0);
  };

  const refundAmount = (index) => {
    return (Number(partPriceTotal[index]) * ratio).toFixed(2);
  };

  return (
    <div className="bg-[#1E152A] min-h-screen">
      <div className="text-[#A5C882] text-4xl">Price Match</div>
      <div className="grid grid-cols-5 gap-8 mt-5">
        {/* Kit Price */}
        <div className="justify-self-center self-start">
          <label className="flex flex-col">
            <span className="text-[#A5C882]">Kit Price</span>
            <input
              onChange={handleKitPriceChange}
              className="rounded-lg h-8 border-2 text-center border-[#A5C882]"
            />
            <span className="text-[#A5C882] mt-5">
              Refund Amount is: ${refund}
            </span>
            <span className="text-[#A5C882] mt-5">
              Deduction Amount is: ${deduction}
            </span>
          </label>
        </div>

        {/* Part Numbers */}
        <div className="justify-self-center self-center">
          <label className="flex flex-col">
            <span className="text-[#A5C882]">Part Number</span>
            {Array.from({ length: 25 }).map((_, i) => (
              <PartNumbers key={i} />
            ))}
          </label>
        </div>

        {/* Part Prices */}
        <div className="justify-self-center self-center">
          <label className="flex flex-col">
            <span className="text-[#A5C882]">Part Price</span>
            {Array.from({ length: 25 }).map((_, i) => (
              <PartPrices
                onPartPriceChange={handlePriceChange}
                index={i}
                key={i}
              />
            ))}
          </label>
        </div>

        {/* Refund amounts */}
        <div className="justify-self-center self-center">
          <label className="flex flex-col">
            <span className="text-[#A5C882]">Amount to Refund</span>
            {Array.from({ length: 25 }).map((_, i) => (
              <RefundPartPrices value={refundAmount(i)} key={i} />
            ))}
          </label>
        </div>

        {/* Refund selector */}
        <div className="justify-self-center self-center">
          <label className="flex flex-col">
            <span className="ml-2 text-[#A5C882]">Refund?</span>
            {Array.from({ length: 25 }).map((_, i) => (
              <RefundSelector
                check={selectedIndices.includes(i)}
                onCheck={() => handleChange(i)}
                key={i}
              />
            ))}
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
