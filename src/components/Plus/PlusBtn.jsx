import React from "react";

const PlusBtn = ({ title, price, discount }) => {
  return (
    <div>
      <a
        className="flex items-center justify-center text-center uppercase w-60 h-14 border-2 border-white hover:-translate-y-0.5 rounded-md select-none"
        href="https://www.dota2.com/plus"
      >
        <p className="uppercase text-[#f0fc95]">{title}</p>
      </a>
      <p className="text-center opacity-80 text-sm mt-1">
        {" "}
        <span className="text-[#f0fc95]"> {price} </span>
        {discount}{" "}
      </p>
    </div>
  );
};

export default PlusBtn;
