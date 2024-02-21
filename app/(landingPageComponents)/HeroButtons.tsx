import React from "react";

type Props = {};

function HeroButtons({}: Props) {
  return (
    <div
      className="absolute top-[82%] left-[70%]  lg:left-[70%]  w-[29%] lg:w-[28%] h-[11%] bg-white bg-opacity-[20%] text-start rounded-3xl flex flex-row items-center justify-between px-1 md:px-2"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <button className="bg-transparent text-white border-white border-[1px] rounded-3xl px-1 md:py-2 py-1 md:px-[0.4rem] lg:px-4 lg:py-2 lg:text-xxs md:text-xxs xl:text-xs text-[0.2rem] shadow-lg font-bold">
        ANRUFEN
      </button>
      <button className="bg-transparent text-white bg-[#8bcda6] rounded-3xl px-1 py-1  md:py-2 md:px-[0.4rem] lg:px-4 lg:py-2 lg:text-xxs xl:text-xs md:text-xxs text-[0.2rem] drop-shadow-2xl custom-shadow font-bold">
        FOODTRUCK BUCHEN
      </button>
    </div>
  );
}

export default HeroButtons;
