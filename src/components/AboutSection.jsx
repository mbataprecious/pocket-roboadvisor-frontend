import React from "react";
import { Container } from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Alertcard from "./Alertcard";

//images
import image1 from "../images/boy-happy.png";
import image2 from "../images/girl-with-phone.png";
import image3 from "../images/girl-happy.png";

// Import Swiper styles
import "swiper/css";

const AboutSection = () => {
  return (
    <div className="overflow-hidden py-10 mb-16">
      <Container>
        <div className="flex flex-col  lg:flex-row">
          <div className="w-full lg:w-[60%]">
            <div className="mx-auto lg:ml-0 w-fit relative">
              <div className="absolute right-0  top-[20%] z-20 translate-x-1/2">
                <Alertcard message={"We saved you $78.11 on your taxes."} />
                <Alertcard
                  message={"We automatically invested your $500 deposit."}
                  className={"translate-x-4 translate-y-4"}
                />
              </div>

              <Swiper
                // spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="rounded-[2rem] h-[25rem] w-[30rem]"
              >
                <SwiperSlide>
                  <img src={image1} alt="slide1" className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image2} alt="slide2" className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image3} alt="slide3" className="w-full" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="w-full mx-auto md:w-[32rem] lg:w-[40%] mt-8 lg:mt-0">
            <h3 className="text-4xl font-black text-[42px] tracking-tight text-gray-900">
              Automation gives you a better return on your time.
            </h3>
            <p className="mt-4">
              Keep your eyes on the big picture, your other investments, or
              basically anything besides the busywork. We rebalance your
              portfolio, automatically diversify deposits, and can help save you
              taxes, all without you ever lifting a finger.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
