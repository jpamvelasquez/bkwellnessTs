"use client";

import Marquee from "react-fast-marquee";

const items = [
  { name: "Free Shipping" },
  { name: "Eco-Friendly Packaging" },
  { name: "Premium Teas" },
  { name: "Natural Ingredients" },
];

export default function Banner() {
  return (
    <div className="bg-orange-600 py-2 text-white uppercase">
      <Marquee speed={50} gradient={false} pauseOnHover={true} loop={0}>
        {items.map((item, index) => (
          <div key={index} className="mr-52 w-64 text-center">
            <p className=" font-medium">{item.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
