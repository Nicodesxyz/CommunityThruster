"use client"; // <===== REQUIRED

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Image from "next/image";

const JoinUs = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 30, // Reduced to make it subtler
        stretch: -30, // Negative value brings slides closer
        depth: 120, // Adjust depth for smaller effect
        modifier: 1.5, // Increases the intensity of the effect
        slideShadows: true,
      }}
      pagination={true}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      className="mySwiper"
      style={{ width: "100%", maxWidth: "250px" }} // Limits Swiper container width
    >
      <SwiperSlide>
        <div className="slider flex flex-col items-center">
          <Image
            src="https://cdn.thrustertitans.com/landing/community.svg"
            width={100} // Smaller icon for compact effect
            height={100}
            alt="Community Icon"
          />
          <h4 className="burial text-center mt-2">COMMUNITY</h4>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slider flex flex-col items-center">
          <Image
            src="https://cdn.thrustertitans.com/landing/governance.svg"
            width={100}
            height={100}
            alt="Governance Icon"
          />
          <h4 className="burial text-center mt-2">GOVERNANCE</h4>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slider flex flex-col items-center">
          <Image
            src="https://cdn.thrustertitans.com/landing/dev.svg"
            width={100}
            height={100}
            alt="Web3 Dev Icon"
          />
          <h4 className="burial text-center mt-2">WEB3 DEV</h4>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slider flex flex-col items-center">
          <Image
            src="https://cdn.thrustertitans.com/landing/ops.svg"
            width={100}
            height={100}
            alt="Operations Icon"
          />
          <h4 className="burial text-center mt-2">OPERATIONS</h4>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default JoinUs;
