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
        className="absolute hidden md:block z-10 bottom-12 md:right-47 right-19 rounded-s-full -translate-y-1/2 bg-stone-300  hover:text-white text-black p-2  shadow-md cursor-pointer"
      >
        <ChevronLeft className="md:w-9 md:h-9" />
      </button>

      {/* Custom Next Button */}
      <button
        ref={nextRef}
        className="absolute hidden md:block z-10 bottom-12 md:right-34 right-12 rounded-r-full -translate-y-1/2 bg-stone-300  hover:text-white text-black p-2 cursor-pointer"
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
        className="md:h-[70vh] w-full"
      >
        {featuredHeroContent.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col relative">
              {/* Image Section */}
              <div className="relative md:h-[70vh] h-[40vh] w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Text Section */}
              <div className="bg-stone-400 text-white px-3 pt-6 pb-10 md:absolute md:inset-0 md:bg-black/50 md:text-white md:flex md:flex-col md:justify-center md:items-start md:px-28 md:pt-0 md:pb-0 md:h-[70vh] min-h-[40vh] ">
                <h2 className="text-2xl md:text-5xl font-bold mb-4 text-center md:text-left">
                  {item.title}
                </h2>
                <p className=" md:max-w-2xl text-base md:text-xl mb-4 text-center md:text-left">
                  {item.description}
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link href={item.link}>
                    <p className="md:text-black text-black bg-amber-200 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
                      Shop Now
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedHero;
