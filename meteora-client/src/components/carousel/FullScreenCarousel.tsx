import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "../../styles/swipper.css";

import carousel1 from "../../assets/images/carousel/carousel1.png";
import carousel2 from "../../assets/images/carousel/carousel3.png";
import carousel3 from "../../assets/images/carousel/carousel2.png";
import tabletCarousel from "../../assets/images/carousel/tablet_carrousel.png";
import tabletCarousel2 from "../../assets/images/carousel/tablet_carrousel2.png";
import tabletCarousel3 from "../../assets/images/carousel/tablet_carrousel3.png";
import phoneCarousel from "../../assets/images/carousel/phone_carrousel.png";
import phoneCarousel2 from "../../assets/images/carousel/phone_carrousel2.png";
import phoneCarousel3 from "../../assets/images/carousel/phone_carrousel3.png";

type Slide = {
  id: number;
  alt: string;
  pcImage: string;
  tabletImage: string;
  phoneImage: string;
};

const FullScreenCarousel: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      pcImage: carousel1,
      tabletImage: tabletCarousel,
      phoneImage: phoneCarousel,
      alt: "Slide 1",
    },
    {
      id: 2,
      pcImage: carousel2,
      tabletImage: tabletCarousel2,
      phoneImage: phoneCarousel2,
      alt: "Slide 2",
    },
    {
      id: 3,
      pcImage: carousel3,
      tabletImage: tabletCarousel3,
      phoneImage: phoneCarousel3,
      alt: "Slide 3",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img
            src={slide.pcImage}
            alt={slide.alt}
            className="hidden md:block object-cover w-full h-[400px]"
          />
          <img
            src={slide.tabletImage}
            alt={slide.alt}
            className="hidden sm:block md:hidden object-cover w-full h-[400px]"
          />
          <img
            src={slide.phoneImage}
            alt={slide.alt}
            className="block sm:hidden  object-cover w-full h-[350px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FullScreenCarousel;
