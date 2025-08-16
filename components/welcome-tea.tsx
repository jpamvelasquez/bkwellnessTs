import Image from "next/image";
import { Button } from "./ui/button";

const WelcomeTea = () => {
  return (
    <div className="container mx-auto md:mt-7 px-3">
      <h3 className="font-bold md:text-4xl text-3xl text-center my-9">
        Welcome to our tea family — brewed with love, shared with joy.
      </h3>
      <div className="lg:grid grid-cols-5  gap-8 max-w-6xl mx-auto mt-8 px-3">
        <div className="col-span-2 ">
          <div className="relative h-[50vh] md:h-[40vh] lg:h-[300px] 2xl:h-[40vh] xl:h-[40vh]">
            <Image
              src="/teas/plant.jpg"
              alt="teas"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col col-span-3 justify-center mt-3">
          <h3 className="md:text-2xl text-xl font-bold ">
            Glad you&apos;re here. Let&apos;s brew something special.
          </h3>
          <p className="italic my-1 font-extralight">
            Pure ingredients. Thoughtful hands. Tea that speaks for itself
          </p>
          <p className="my-5">
            Our tea is made with premium ingredients and a whole lot of heart —
            by people who care about what goes into your cup.
          </p>
          <p>
            Because every blend is crafted with care — using only high-quality,
            natural ingredients — and made by people who genuinely love what
            they do. Behind every cup is a team passionate about wellness,
            flavor, and making your daily ritual something to look forward to.
          </p>
          <Button
            className="max-w-fit p-5 rounded-full my-5"
            variant="secondary"
          >
            See More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTea;
