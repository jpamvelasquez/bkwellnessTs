"use client";

import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";

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
    <nav className="md:hidden">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Left Section */}
        <div className="flex gap-2 items-center">
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
              <div className="p-6 flex flex-col gap-4 h-full justify-between">
                {/* Header */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="font-bold text-2xl">BKWellness</div>
                  </div>

                  {/* Menu Items */}
                  <div className="flex flex-col gap-0 divide-y divide-gray-300 text-gray-800 text-sm">
                    <p className="py-4">Home</p>
                    <p className="py-4">About Us</p>
                    <p className="py-4">Teas</p>
                    <p className="py-4">Community</p>

                    {/* Discover Accordion */}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="discover">
                        <AccordionTrigger className="py-4 font-medium text-left">
                          Discover
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 pb-4 pt-1 flex flex-col gap-4 text-gray-600">
                          <div>
                            <p className="uppercase mb-2">Our story</p>
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Quidem dolor doloremque, esse
                            </p>
                            <div className="flex gap-3 overflow-x-auto whitespace-nowrap">
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
        <div className="flex gap-2 items-center">
          <Heart />
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Menus;
