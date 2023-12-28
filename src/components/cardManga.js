import React from "react";
import { NavLink } from "react-router-dom";

const CardManga = ({ poster, title, rate, update }) => {
  const slug = title.toLowerCase().replace(/ /g, "-");
  return (
    <NavLink to={`/chapter/${slug}`}>
      <div className=" cursor-pointer">
        <div className="ease-in-out duration-300 hover:scale-105 transition">
          <img
            className="w-[255px] h-[383px] rounded-[12px]"
            src={poster}
            alt=""
          ></img>
        </div>
        <div className="text-[#FFFFFF]">
          <div className="mt-5">
            <h3 className="text-[#FFFFFF] lg:text-[26px] 2xl:text-[28px] leading-10 font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-[200px]">
              {title}
            </h3>
            <p className="lg:text-[18px] 2xl:text-[20px] leading-8 font-semibold mt-3">
              Chapter 247:The dark of sky
            </p>
          </div>
          <div className="flex items-center gap-[16px]">
            <img className="w-5 h-5" src="/images/star.png" alt="" />
            <div className="text-[20px]">
              <span className="">{rate}</span>
              <span className="">/5</span>
            </div>
          </div>

          <div className="px-[10px] py-[5px] bg-[#363636] w-max rounded-[33px] mt-3">
            <p className="lg:text-[20px] 2xl:text-[22px] leading-8 font-semibold">
              Update: {update}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CardManga;
