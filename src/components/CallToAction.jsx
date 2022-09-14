import React from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { CircleBackground } from "./CircleBackground";
import { AiFillCaretUp } from "react-icons/ai";
//import marker from "../images/marker.svg";

// content: "";
//     width: 125px;
//     height: 30px;
//     position: absolute;
//     bottom: -25px;
//     right: -30px;
//     background-image: url(../images/marker.svg);
//     background-repeat: no-repeat;

const CallToAction = () => {
  return (
    <div className="w-full text-center flex flex-col items-center bg-black mt-4 lg:mt-16 mb-16 py-16 md:py-20 px-8 text-lavender overflow-hidden text-white relative">
      <div className="absolute top-1/2 -translate-y-1/2">
        <CircleBackground
          width={600}
          height={600}
          color="#fff"
          className="animate-spin-slower"
        />
      </div>
      <Container>
        <h2 className="text-[1.4rem]">
          Our fee is small,
          <br />
          <span className="font-serif text-[1.6rem] after:content-[''] relative after:w-[125px] after:h-[30px] after:absolute after:bottom-[-25px] after:right-[-30px] after:bg-no-repeat after:bg-[url(https://preshypreshfolio.netlify.app/images/marker.svg)]">
            but we think it’s a really big deal.
          </span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center max-w-[40rem]">
          <h5 className="text-[100px] md:text-[120px] lg:text-[125px] tracking-tighter font-bold mt-2 mb-4 relative">
            <AiFillCaretUp
              // width={40}
              // height={40}
              className="text-[#4caf50] absolute left-[-60px] top-1/2 w-[60px] h-[60px] translate-y-[-50%]"
            />{" "}
            0.25%
          </h5>
          <p className="md:text-left pt-10  md:pl-4 text-center text-[1.4rem] font-serif font-light">
            Average boost to your after-tax returns from Tax-Loss Harvesting.
          </p>
        </div>

        <Button
          variant="outline"
          color="white"
          className=" relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3  border border-lavender text-lavender inline-flex whitespace-nowrap"
          href="/pricing"
        >
          See how much it costs
        </Button>
      </Container>
    </div>
  );
};

export default CallToAction;
