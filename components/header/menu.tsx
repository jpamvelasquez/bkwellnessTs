"use client";

import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import Image from "next/image";

const Menus = () => {
  return (
    <nav className="md:hidden ">
      <div className="flex justify-between items-center  py-2">
        {/* Left Section */}
        <div className="flex gap-4 items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Open menu">
                <Menu />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-[350px] border-none bg-stone-200 focus-visible:outline-none focus-visible:ring-0  
           [&>button]:top-6 [&>button]:right-4 [&>button]:absolute 
           [&>button>svg]:w-6 [&>button>svg]:h-6"
            >
              <div className="p-6 flex flex-col gap-4 h-full overflow-y-auto justify-between hide-scrollbar">
                {/* Header */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="font-bold text-2xl">BKWellness</div>
                  </div>

                  {/* Menu Items */}
                  <div className="flex flex-col gap-0 divide-y divide-gray-300 text-gray-800 text-sm">
                    <p className="py-4">Home</p>
                    <p className="py-4">About Us</p>
                    <div className="">
                      <Accordion
                        type="multiple"
                        className="w-full !border-none !focus-visible:outline-none !focus-visible:ring-0"
                      >
                        <AccordionItem value="products" className="border-none">
                          <AccordionTrigger className=" font-medium text-left">
                            Products
                          </AccordionTrigger>
                          <AccordionContent className="pl-4 pb-4 pt-1 flex flex-col gap-4 text-gray-600">
                            <div>
                              <p className="uppercase mb-2">What we have</p>
                              <p className="mb-3">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quidem dolor doloremque, esse
                              </p>
                              <div className="flex gap-3 overflow-x-auto  hide-scrollbar">
                                <div>
                                  <div className="relative w-32 h-32 flex-shrink-0">
                                    <Image
                                      src="/products/honey.jpg"
                                      alt="Cup"
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <p className="mt-2">Honey</p>
                                </div>
                                <div>
                                  <div className="relative w-32 h-32 flex-shrink-0">
                                    <Image
                                      src="/products/jar.jpg"
                                      alt="Cup"
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <p className="mt-2">Tea</p>
                                </div>
                                <div className="">
                                  <div className="relative w-32 h-32 flex-shrink-0">
                                    <Image
                                      src="/products/juice.jpg"
                                      alt="Cup"
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <p className="mt-2">Juices</p>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>

                    <p className="py-4">Community</p>
                    {/* Discover Accordion */}

                    <div>
                      <Accordion
                        type="multiple"
                        className="w-full  border-none focus-visible:outline-none focus-visible:ring-0"
                      >
                        <AccordionItem value="discover" className="border-none">
                          <AccordionTrigger className=" font-medium text-left">
                            Discover
                          </AccordionTrigger>
                          <AccordionContent className="pl-4 pb-4 pt-1 flex flex-col gap-4 text-gray-600">
                            <div>
                              <p className="uppercase mb-2">Our story</p>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quidem dolor doloremque, esse
                              </p>
                              <div className="flex gap-3 overflow-x-auto  hide-scrollbar">
                                <div className="relative w-32 h-32 flex-shrink-0">
                                  <Image
                                    src="/products/cuppa.jpg"
                                    alt="Cup"
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="relative w-32 h-32 flex-shrink-0">
                                  <Image
                                    src="/products/cuppa.jpg"
                                    alt="Cup"
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="relative w-32 h-32 flex-shrink-0">
                                  <Image
                                    src="/products/cuppa.jpg"
                                    alt="Cup"
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              </div>
                            </div>
                            <Link href="/">Our Commitment</Link>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 border-t">
                  <div className="flex gap-2 items-center text-sm text-gray-700">
                    <User />
                    <p>My Account</p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Search />
        </div>

        {/* Center Logo */}
        <div>
          <h3 className="font-bold text-2xl">BKWellness</h3>
        </div>

        {/* Right Icons */}
        <div className="flex gap-3 items-center">
          <Heart />
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Menus;
