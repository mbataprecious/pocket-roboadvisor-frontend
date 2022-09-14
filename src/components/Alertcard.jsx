import React from "react";
import logoIcon from "../images/logo-colored.svg";

const Alertcard = ({ message, className }) => {
  return (
    <div
      className={
        "bg-[rgba(255,255,255,0.85)] scale-75 drop-shadow-[-14.4442px_17.1565px_0.72222px_rgba(0,0,0,.1)] p-3 rounded-xl leading-4 space-y-2 2xl:space-y-4 pb-5 3xl:w-[400px] 2xl:w-[350px] w-[250px] " +
        className
      }
    >
      <div className="flex justify-between text-indigo 3xl:text-[17px] 2xl:text-[14px] text-[12px]">
        <div className="uppercase">
          <div className="flex items-center space-x-1">
            <img width="20" height="20" alt="" loading="eager" src={logoIcon} />
            <span>pocket</span>
          </div>
        </div>
        <div>now</div>
      </div>
      <div className="2xl:text-[20px] lg:text-[16px] text-[14px] leading-none">
        {message}
      </div>
    </div>
  );
};

export default Alertcard;
