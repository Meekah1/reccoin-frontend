import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { FiArrowDown } from "react-icons/fi";

let companies = [
  "AMX Global Enterprise",
  "AMX Global Enterprise",
  "AMX Global Enterprise",
  "AMX Global Enterprise",
  "AMX Global Enterprise",
  "AMX Global Enterprise",
  "AMX Global Enterprise",
  "AMX Global Enterprise",
  "AMX Global Enterprise",
  "AMX Global Enterprise",
  "AMX Global Enterprise",
  "AMX Global Enterprise",
];

function Partners() {
  return (
    <div className="mt-[100px] py-[84px] px-[58px]">
      <div className="bg-customBrown p-5 max-w-[1228px] rounded-[12px]">
        <p className="text-white font-bold text-[36px] font-openSans">
          Our Partner Companies
        </p>
        <div className="mt-5 bg-white py-5 px-9 rounded-[12px] text-customBrown">
          {companies.map((value, index) => (
            <div key={index} className="flex items-center gap-4 py-[14px]">
              <GoPrimitiveDot color="#6E5E00" size={28} />
              <p className="text-primary40 font-bold text-[28px] leading-7 md:text-[36px] font-openSans">
                {value}
              </p>
            </div>
          ))}
          <div className="w-full flex justify-center">
            <FiArrowDown color="#404943" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
