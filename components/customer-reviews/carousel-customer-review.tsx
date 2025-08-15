"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const customer = [
  {
    name: "Kahel",
    position: "Student",
    imageUrl: "/customer/c1.jpg",
    review:
      "It takes milk and sugar well and also works great in spiced chai. I especially enjoyed its bold aroma and deep amber color.",
    product: "Turmeric 14in1",
  },
  {
    name: "Miel",
    position: "Student",
    imageUrl: "/customer/c2.jpg",
    review:
      "It takes milk and sugar well and also works great in spiced chai. I especially enjoyed its bold aroma and deep amber color.",
    product: "Turmeric 14in1",
  },
  {
    name: "Keith",
    position: "Student",
    imageUrl: "/customer/c3.jpg",
    review:
      "It takes milk and sugar well and also works great in spiced chai. I especially enjoyed its bold aroma and deep amber color.",
    product: "Honey",
  },
  {
    name: "Wednesday",
    position: "Student",
    imageUrl: "/customer/c4.jpg",
    review:
      "It takes milk and sugar well and also works great in spiced chai. I especially enjoyed its bold aroma and deep amber color.",
    product: "Mangosteen Juice",
  },
  {
    name: "Nebuchadnezar",
    position: "Student",
    imageUrl: "/customer/c5.jpg",
    review:
      "After consistently drinking this tea for 3 weeks, my digestion has improved and I feel less sluggish in the mornings. It's become a staple in my wellness routine..",
    product: "Turmeric 14in1",
  },
  {
    name: "Ezekiel",
    position: "Student",
    imageUrl: "/customer/c6.jpg",
    review:
      "I was a bit skeptical at first, but this tea surprised me! After a week of drinking it daily, I noticed reduced bloating and better sleep. It has a pleasant earthy taste — I now look forward to my evening cup.",
    product: "Calamansi Juice",
  },
];

const CarouselCustomerReview = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      className="relative 
    "
    >
      {/* Prev Button */}
      <button
        ref={prevRef}
        className="absolute z-10 top-1/2 -translate-y-1/2 md:hidden lg:block -left-8 hidden  text-black p-2 "
      >
        <ChevronLeft className="w-6 h-6 md:w-6 md:h-6" />
      </button>

      {/* Next Button */}
      <button
        ref={nextRef}
        className="absolute z-10 top-1/2 -translate-y-1/2 -right-8 hidden md:hidden lg:block   text-black p-2 "
      >
        <ChevronRight className="w-6 h-6 md:w-6 md:h-6" />
      </button>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000 }}
        loop
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          // Fix: Update navigation elements after swiper instance is ready
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;

            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
      >
        {customer.map((c, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col  min-h-[300px] gap-2 p-4  rounded  justify-between">
              {/* Top - Image and Name */}
              <div className="flex flex-col md:flex-row items-center md:gap-3">
                <div className="relative w-[80px] h-[80px]">
                  <Image
                    src={c.imageUrl}
                    alt={c.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="md:my-3">
                  <p className="font-bold">{c.name}</p>
                  <p className="font-light italic text-center md:text-left">
                    {c.position}
                  </p>
                </div>
              </div>

              {/* Middle - Review */}
              <p className="text-sm">{c.review}</p>

              {/* Bottom - Product */}
              <p className="font-medium italic self-end">{c.product}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCustomerReview;
