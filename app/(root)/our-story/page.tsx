import Image from "next/image";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const OurStory = () => {
  return (
    <div className="">
      <div className="md:h-[60vh] w-full lg:h-[500px] xl:h-[60vh] 2xl:h-[60vh]">
        <div className="flex flex-col relative">
          <div className="relative md:h-[60vh] h-[50vh] w-full lg:h-[500px] xl:h-[60vh] 2xl:h-[60vh]">
            <Image
              src="/featured/ourstory.jpg"
              alt="tea"
              fill
              className="object-cover md:object-[left_50%] object-[center_50%]"
            />
          </div>
          <div className=" text-white md:inset-0 md:absolute  lg:flex lg:flex-col  container mx-auto z-10">
            <div className="md:max-w-2xl  w-full flex flex-col h-full  justify-center lg:px-3 md:px-3 lg:max-w-md xl:max-w-2xl 2xl:max-w-xl">
              <div className="2xl:bg-stone-300/20 backdrop-blur-md md:bg-stone-300/40 md:text-white 2xl:text-black lg:text-black p-6 flex flex-col gap-4 md:gap-8  text-black bg-stone-300">
                <h2 className="md:text-xl lg:text-xl font-bold text-xl">
                  The Golden Heart
                </h2>
                <h3 className="font-bold lg:text-md xl:text-2xl text-md ">
                  Sharing Our Story
                </h3>
                <p className="lg:text-sm md:text-lg xl:text-lg text-md">
                  Whether you need extreme tech protection with a highly
                  organised design or prefer flexibility and easy access,
                  we&apos;ve got your back. Every Mous backpack is engineered
                  for performance, offering water resistance, thoughtful design
                  features, comfort and ample packing capacity to gear you up
                  for the day ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className="container mx-auto  px-5">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>Our Story</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="container mx-auto px-5">
          <h3 className="text-center font-bold my-6 text-4xl">
            The BKWellness Heart
          </h3>
          <div className="flex justify-center">
            <div className="relative h-56 w-56">
              <Image
                src="/logos/heart.png"
                alt="Heart"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="max-w-6xl mx-auto my-6">
            <p className="my-6">
              BKWellness was born out of a simple yet powerful idea: that true
              well-being begins with balance — in mind, body, and soul.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              repellat cum nemo quod ea quisquam praesentium accusamus quam
              omnis laudantium? Incidunt asperiores ipsam doloremque soluta,
              dignissimos, odio facere porro quisquam ad delectus eum magni
              aperiam consequatur minima aliquam esse quae ullam aliquid dolore
              sequi inventore. Sunt cumque illum id assumenda.
            </p>
            <p className="my-6">
              From our first handcrafted essential oil blends to our now
              expansive line of self-care tools and educational resources,
              we&apos;ve remained committed to authenticity, sustainability, and
              the belief that wellness should be accessible to everyone.
            </p>
            <p>
              From our first handcrafted essential oil blends to our now
              expansive line of self-care tools and educational resources,
              we&apos;ve remained committed to authenticity, sustainability, and
              the belief that wellness should be accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
