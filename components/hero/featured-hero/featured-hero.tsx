// components/FeaturedHero.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import featuredHeroContent from "@/data/featured-data";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedHero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative mx-auto">
      <button
        ref={prevRef}
        className="absolute z-10 bottom-12 md:right-47 right-19 rounded-s-full -translate-y-1/2 bg-stone-300  hover:text-white text-black p-2  shadow-md cursor-pointer"
      >
        <ChevronLeft className="md:w-9 md:h-9" />
      </button>

      {/* Custom Next Button */}
      <button
        ref={nextRef}
        className="absolute z-10 bottom-12 md:right-34 right-12 rounded-r-full -translate-y-1/2 bg-stone-300  hover:text-white text-black p-2 cursor-pointer"
      >
        <ChevronRight className="md:w-9 md:h-9" />
      </button>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          const navigation = swiper.params.navigation;

          if (navigation && typeof navigation !== "boolean") {
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }
        }}
        className="h-[70vh] w-full"
      >
        {featuredHeroContent.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[70vh] w-full ">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-8 md:px-28 text-white">
                <h2 className="text-5xl font-bold mb-2">{item.title}</h2>
                <p className="mb-4 max-w-2xl text-xl my-4">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className=" text-black px-8 mt-10 py-3 rounded-full font-bold  hover:bg-gray-200 bg-amber-200 transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedHero;
