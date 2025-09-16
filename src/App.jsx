import "./App.css";
import PartNumbers from "./components/PartNumbers";
import PartPrices from "./components/PartPrice";
import RefundPartPrices from "./components/RefundPartAmount";
import RefundSelector from "./components/RefundSelector";
import { useState, useEffect } from "react";
import tomb from "/src/tomb.png";
function App() {
  return (
    <div className="bg-black h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="text-white text-3xl">
        Your beloved Price matching sheet has resigned and it wishes that you
        work better
      </h1>
      <div></div>
    </div>
  );
}
//   const [partPriceTotal, setPartPriceTotal] = useState(Array(25).fill(0));
//   const [ratio, setRatio] = useState(1);
//   const [selectedIndices, setSelectedIndices] = useState([]);
//   const [refund, setRefund] = useState(0); // keep as number
//   const [deduction, setDeduction] = useState(0); // keep as number
//   const [kitPrice, setKitPrice] = useState(0);
//   const [message, setMessage] = useState("");

//   // ✅ Load counter once from localStorage
//   const [counter, setCounter] = useState(() => {
//     const saved = localStorage.getItem("counter");
//     return Number.isFinite(Number(saved)) ? Number(saved) : 0;
//   });

//   const handleChange = (index) => {
//     setSelectedIndices((prevSelected) =>
//       prevSelected.includes(index)
//         ? prevSelected.filter((i) => i !== index)
//         : [...prevSelected, index]
//     );
//   };

//   useEffect(() => {
//     handleRefundDeduct();
//   }, [selectedIndices, partPriceTotal, kitPrice]);

//   // ✅ derive message from refund without causing render loops
//   useEffect(() => {
//     const r = Number(refund) || 0;
//     if (r >= 200) {
//       setMessage(`Such a charitable work, ${r.toFixed(2)} ??`);
//     } else if (r >= 100) {
//       setMessage(`${r.toFixed(2)} ? A bit much don't you think?`);
//     } else if (r > 0 && r <= 50) {
//       setMessage(`Only ${r.toFixed(2)} ? How is the customer dealing with it?`);
//     } else if (r === 0) {
//       setMessage(``);
//     } else {
//       setMessage(`A refund of ${r.toFixed(2)}, are you sure about that?`);
//     }
//   }, [refund]);

//   const handleRefundDeduct = () => {
//     if (selectedIndices.length > 0) {
//       const refundTotal = selectedIndices.reduce((acc, idx) => {
//         return acc + Number(refundAmountRaw(idx));
//       }, 0);

//       const refundRounded = Number(refundTotal.toFixed(2));
//       setRefund(refundRounded);

//       if (kitPrice) {
//         const deductionVal = Number((kitPrice - refundTotal).toFixed(2));
//         setDeduction(deductionVal);
//       } else {
//         setDeduction(0);
//       }
//     } else {
//       setRefund(0);
//       setDeduction(0);
//     }
//   };

//   const handlePriceChange = (value, index) => {
//     const updated = [...partPriceTotal];
//     updated[index] = value;
//     setPartPriceTotal(updated);

//     const sum = updated.reduce((acc, cur) => acc + Number(cur), 0);
//     setRatio(sum !== 0 && kitPrice !== 0 ? kitPrice / sum : 0);
//   };

//   const handleKitPriceChange = (e) => {
//     const value = Number(e.target.value);
//     setKitPrice(value);

//     const sum = partPriceTotal.reduce((acc, cur) => acc + Number(cur), 0);
//     setRatio(sum !== 0 && value !== 0 ? value / sum : 0);
//   };

//   // raw numeric refund for an index
//   const refundAmountRaw = (index) => Number(partPriceTotal[index]) * ratio;

//   // formatted for display in the list
//   const refundAmount = (index) => refundAmountRaw(index).toFixed(2);

//   return (
//     <div className="bg-[#000] min-h-screen">
//       <div className="text-[#7f95d1] text-4xl">Price Match</div>
//       <div className="grid grid-cols-5 gap-8 mt-5">
//         {/* Kit Price */}
//         <div className="justify-self-center self-start">
//           <label className="flex flex-col">
//             <span className="text-[#7f95d1]">Kit Price</span>
//             <input
//               type="number"
//               onChange={handleKitPriceChange}
//               className="rounded-lg h-8 border-2 text-center border-[#7f95d1]"
//             />
//             <span className="text-[#7f95d1] mt-5">
//               Refund Amount is: ${refund.toFixed(2)}
//             </span>
//             <span className="text-[#7f95d1] mt-2">
//               Deduction Amount is: ${deduction.toFixed(2)}
//             </span>
//             <span className="text-[#7f95d1] mt-2">{message}</span>
//             <span className="text-[#7f95d1] mt-5">
//               Price Matches done = {counter}
//             </span>
//             <button
//               onClick={() => {
//                 const newValue = counter + 1;
//                 localStorage.setItem("counter", String(newValue));
//                 location.reload(); // keep the reload behavior
//               }}
//               className="bg-[#7f95d1] text-[#1E152A] rounded-full mt-5 w-16 self-center"
//             >
//               Clear
//             </button>
//           </label>
//         </div>

//         {/* Part Numbers */}
//         <div className="justify-self-center self-center">
//           <label className="flex flex-col">
//             <span className="text-[#7f95d1]">Part Number</span>
//             {Array.from({ length: 25 }).map((_, i) => (
//               <PartNumbers key={i} />
//             ))}
//           </label>
//         </div>

//         {/* Part Prices */}
//         <div className="justify-self-center self-center">
//           <label className="flex flex-col">
//             <span className="text-[#7f95d1]">Part Price</span>
//             {Array.from({ length: 25 }).map((_, i) => (
//               <PartPrices
//                 onPartPriceChange={handlePriceChange}
//                 index={i}
//                 key={i}
//               />
//             ))}
//           </label>
//         </div>

//         {/* Refund amounts */}
//         <div className="justify-self-center self-center">
//           <label className="flex flex-col">
//             <span className="text-[#7f95d1]">Amount to Refund</span>
//             {Array.from({ length: 25 }).map((_, i) => (
//               <RefundPartPrices value={refundAmount(i)} key={i} />
//             ))}
//           </label>
//         </div>

//         {/* Refund selector */}
//         <div className="flex flex-wrap justify-self-center self-center">
//           <label className="flex flex-col">
//             <span className="ml-2 text-[#7f95d1]">Refund?</span>
//             <div className="flex flex-col">
//               {Array.from({ length: 25 }).map((_, i) => (
//                 <RefundSelector
//                   check={selectedIndices.includes(i)}
//                   onCheck={() => handleChange(i)}
//                   key={i}
//                 />
//               ))}
//             </div>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
