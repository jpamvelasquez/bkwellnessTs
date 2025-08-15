import Image from "next/image";
import { Button } from "../ui/button";

const ProductAdd = () => {
  return (
    <div className="md:h-[60vh] bg-amber-100 w-full lg:h-[70vh] xl:h-[60vh] ">
      <div className="flex flex-col relative">
        <div className="relative md:h-[60vh] h-[50vh] w-full lg:h-[70vh] xl:h-[60vh] ">
          <Image
            src="/products/cuppa.jpg"
            alt="tea"
            fill
            className="object-cover md:object-[left_50%] object-[center_50%]"
          />
        </div>
        <div className="bg-stone text-white md:inset-0 md:absolute  lg:flex lg:flex-col  lg:px-3 xl:px-20 2xl:px-28 container mx-auto ">
          <div className="md:max-w-2xl  w-full flex flex-col h-full  justify-center lg:px-3 md:px-3 lg:max-w-xl xl:max-w-2xl ">
            <div className="2xl:bg-stone-300 md:bg-stone-300/40 md:text-white 2xl:text-black p-6 flex flex-col gap-4 md:gap-8 rounded-md text-black bg-stone-300">
              <h2 className="md:text-4xl lg:text-2xl font-bold text-2xl">
                Extreme and everyday adventures
              </h2>
              <h3 className="font-bold lg:text-md xl:text-lg text-md ">
                With a Mous backpack, you&apos;re prepared for every journey.
              </h3>
              <p className="lg:text-sm md:text-lg xl:text-lg text-md">
                Whether you need extreme tech protection with a highly organised
                design or prefer flexibility and easy access, we&apos;ve got
                your back. Every Mous backpack is engineered for performance,
                offering water resistance, thoughtful design features, comfort
                and ample packing capacity to gear you up for the day ahead.
              </p>
              <Button className="rounded-full text-sm lg:text-sm max-w-fit bg-amber-200 text-black">
                Explore Tea
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
