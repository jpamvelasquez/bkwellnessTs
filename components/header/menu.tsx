"use client";

import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

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
            <SheetTrigger
              asChild
              className="focus-visible:outline-none focus-visible:ring-0"
            >
              <button>
                <Menu />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-[350px] border-none  focus-visible:outline-none focus-visible:ring-0  
           [&>button]:top-7 [&>button]:right-4 [&>button]:absolute 
           [&>button>svg]:w-6 [&>button>svg]:h-6 [&>button>svg]:bg-white [&>button>svg]:shadow-lg "
            >
              <div className="p-6 flex flex-col gap-4 h-full overflow-y-auto justify-between hide-scrollbar">
                {/* Header */}
                <div>
                  <SheetTitle className="text-2xl">BKWellness</SheetTitle>

                  {/* Menu Items */}
                  <div className="flex flex-col gap-0 divide-y divide-gray-300 text-gray-800 text-sm mt-5">
                    <Link href="/" className="py-4 hover:underline">
                      Home
                    </Link>
                    <Link href="/" className="py-4 hover:underline">
                      About Us
                    </Link>
                    <div className="">
                      <Accordion
                        type="multiple"
                        className="w-full !border-none !focus-visible:outline-none !focus-visible:ring-0"
                      >
                        <AccordionItem
                          value="products"
                          className="!border-none !shadow-none !ring-0 !focus:outline-none !focus-visible:ring-0 data-[state=open]:!border-none "
                        >
                          <AccordionTrigger className=" font-medium text-left !ring-0 !focus:outline-none !focus-visible:ring-0 ">
                            Products
                          </AccordionTrigger>
                          <AccordionContent className="pl-4 pb-4 pt-1 flex flex-col gap-4 text-gray-600">
                            <div className="group">
                              <p className="uppercase mb-2 font-bold group-hover:underline">
                                What we have
                              </p>
                              <p className="mb-3">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quidem dolor doloremque, esse
                              </p>
                              <div className="flex gap-3 overflow-x-auto  hide-scrollbar">
                                <div className="">
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

                    <Link href="/" className="py-4 hover:underline ">
                      Community
                    </Link>
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
                            <div className="group">
                              <Link href="/" className="cursor-pointer">
                                <p className="uppercase mb-2 group-hover:underline font-bold">
                                  Our story
                                </p>
                              </Link>
                              <p className="my-3">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quidem dolor doloremque, esse
                              </p>
                              <div className="flex gap-3 overflow-x-auto  hide-scrollbar">
                                <Link href="/" className="cursor-pointer">
                                  <div className="relative w-32 h-32 flex-shrink-0">
                                    <Image
                                      src="/featured/ourstory.jpg"
                                      alt="Cup"
                                      fill
                                      className="object-cover "
                                    />
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="group mt-6">
                              <Link href="/" className="cursor-pointer">
                                <p className="uppercase mb-2 group-hover:underline font-bold">
                                  Our Committment
                                </p>
                              </Link>
                              <p className="my-3">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quidem dolor doloremque, esse
                              </p>
                              <div className="flex gap-3 overflow-x-auto  hide-scrollbar">
                                <Link href="/" className="cursor-pointer">
                                  <div className="relative w-32 h-32 flex-shrink-0">
                                    <Image
                                      src="/featured/tea.jpg"
                                      alt="Cup"
                                      fill
                                      className="object-cover "
                                    />
                                  </div>
                                </Link>
                              </div>
                            </div>
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
              <SheetDescription></SheetDescription>
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
