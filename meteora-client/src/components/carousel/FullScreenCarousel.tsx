import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "../../styles/swipper.css";

import carousel1 from "../../assets/images/carousel/carousel1.png";
import carousel2 from "../../assets/images/carousel/carousel3.png";
import carousel3 from "../../assets/images/carousel/carousel2.png";

type Slide = {
  id: number;
  image: string;
  alt: string;
};

const FullScreenCarousel: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      image: carousel1,
      alt: "Slide 1",
    },
    {
      id: 2,
      image: carousel2,
      alt: "Slide 2",
    },
    {
      id: 3,
      image: carousel3,
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
            src={slide.image}
            alt={slide.alt}
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FullScreenCarousel;
