import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const MainPage = () => {
  return (
    <div className=" min-h-screen flex">
      <div className=" mt-28 flex-col justify-center gap-5 pl-44 leading-tight">
        <h2 className=" text-black font-semibold text-2xl">NEW ARRIVALS</h2>
        <div className="">
          <div className=" flex items-center gap-5">
            <p className=" text-black font-bold text-8xl">new</p>
            <img src={hand_icon} alt="" className=" w-28" />
          </div>
          <p className=" text-black font-bold text-8xl">collections</p>
          <p className=" text-black font-bold text-8xl">for everyone</p>
        </div>
        <div className=" flex justify-center items-center gap-4 w-80 mt-8 h-16 rounded-[75px] bg-red-500 text-2xl font-medium text-white">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className=" object-scale-down flex-1 flex items-center justify-center">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default MainPage;
