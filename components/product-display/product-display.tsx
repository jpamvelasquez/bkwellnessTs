import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const product = [
  {
    name: "Mangosteen Juice",
    imageUrl: "/products/juice.jpg",
    slug: "juices",
  },
  {
    name: "Turmeric 14in1",
    imageUrl: "/products/teaspouch.jpg",
    slug: "teas",
  },
  {
    name: "Honey",
    imageUrl: "/products/honey.jpg",
    slug: "honey",
  },
];

const ProductDisplay = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center max-w-7xl mx-auto my-8 gap-7 pl-3">
        <div className="text-4xl font-bold whitespace-nowrap">What We Have</div>
        <div className="flex-1 bg-orange-600 h-[2px]" />
      </div>
      <div className="flex flex-col md:flex-row px-3 justify-evenly  items-center gap-4">
        {product.map((p, i) => (
          <div key={i} className="group">
            <div className="relative xl:h-[400px] xl:w-80 group overflow-hidden md:h-[300px] md:w-52 h-[350px] w-80 lg:h-[370px] lg:w-80">
              <Image
                alt={p.name}
                src={p.imageUrl}
                fill
                className="object-cover object-center rounded  transition-transform duration-300 ease-in-out group-hover:scale-125"
              />
            </div>
            <div className="  gap-2 py-3">
              <h4 className="font-bold text-md">{p.name}</h4>
              <Link href={`products/${p.slug}`}>
                <Button
                  variant="link"
                  className=" text-sm  text-black transition-all duration-500 ease-in-out p-0 group-hover:underline"
                >
                  More Info
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
