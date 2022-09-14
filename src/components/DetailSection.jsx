import React from "react";
import { Container } from "./Container";
import busyImage from "../images/Businessman counting profit - 960x960.png";
import gold from "../images/ws-gold-twin-1.png";
import green from "../images/ws-green-twin-2.png";
import phone from "../images/3Dassets_Phone_Transparent.webp";

const DetailSection = () => {
  return (
    <div className="overflow-hidden py-10">
      <Container>
        <div className="flex flex-col">
          <div className="rounded-[3.2rem] md:rounded-[5.6rem] w-full pt-10 bg-[#f4eff5] min-h-[37rem] md:min-h-[27rem] overflow-hidden relative">
            <div className=" max-w-[50rem] px-10">
              <h3 className=" font-bold text-[2rem] sm:text-[2.6rem] leading-[3rem] tracking-tight text-gray-900">
                Put your money on autopilot
              </h3>
              <p className="text-gray-600 mt-6 leading-8 text-xl font-medium">
                Automatic deposits, rebalancing, and dividend reinvestment make
                sure your money is working hard, even when you’re not looking.
              </p>
            </div>
            <img
              src={busyImage}
              alt="business growth"
              className=" absolute bottom-[-4rem] right-[-4rem] w-[23rem] lg:w-[26rem]"
            />
          </div>
          <div className="my-[3rem] flex flex-col sm:flex-row justify-between sm:min-h-[37rem]">
            <div className="sm:w-[calc(50%-1.5rem)] mb-12 sm:mb-0  min-h-[37rem] sm:min-h-[100%] rounded-[3.2rem] md:rounded-[5.6rem] bg-[#ebf6cb] overflow-hidden relative">
              <div className=" max-w-[50rem] pt-10 px-12 sm:px-6 md:px-10">
                <h3 className=" font-bold text-[2rem] sm:text-[2.6rem] leading-[3rem] tracking-tight text-gray-900 ">
                  Diversify your investments
                </h3>
                <p className="text-gray-600 mt-6 leading-8 text-xl font-medium">
                  Automatic deposits, rebalancing, and dividend reinvestment
                  make sure your money is working hard, even when you’re not
                  looking.
                </p>
              </div>
              <img
                src={gold}
                alt="gold coin"
                className=" absolute bottom-[14rem] right-[-1rem] w-[8.2rem] sm:w-[7rem] md:w-[8rem] translate-y-[6.4rem] rotate-[24.53deg]"
              />
              <img
                src={green}
                alt="green"
                className=" absolute bottom-[12rem] right-[-1rem] w-[8.2rem] sm:w-[7rem] md:w-[7rem] translate-x-[-4.8rem] translate-y-[16rem] rotate-[-24.82deg]"
              />
            </div>
            <div className="sm:w-[calc(50%-1.5rem)] min-h-[37rem] sm:min-h-[100%] rounded-[3.2rem] md:rounded-[5.6rem] bg-[#faefe5] overflow-hidden relative">
              <div className=" max-w-[50rem] pt-10 px-12 sm:px-6 md:px-10">
                <h3 className=" font-bold text-[2rem] sm:text-[2.6rem] leading-[3rem] tracking-tight text-gray-900 ">
                  Talk to a human anytime
                </h3>
                <p className="text-gray-600 mt-6 leading-8 text-xl font-medium">
                  Automatic deposits, rebalancing, and dividend reinvestment
                  make sure your money is working hard, even when you’re not
                  looking.
                </p>
              </div>
              <img
                src={phone}
                alt="contact us"
                className=" absolute bottom-[-2rem] right-[-2rem] w-[18rem] lg:w-[21rem]"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailSection;
