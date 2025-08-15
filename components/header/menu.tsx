"use client";

import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useState } from "react";

const Menus = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="md:hidden  ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button onClick={() => setOpen(!open)}>
                <Menu />
              </button>
            </SheetTrigger>

            <SheetContent
              className=" w-[350px] [&_button]:hidden border-none bg-stone-200 "
              side="left"
            >
              <div className="p-6 flex flex-col gap-4 ">
                <div className="flex justify-between mb-6">
                  <div className="font-bold text-2xl">BKWellness</div>
                  <div onClick={() => setOpen(!open)}>
                    <X />
                  </div>
                </div>
                <p>Home</p>
                <p>About Us</p>
                <p>Teas</p>
                <p>Community</p>
                <p>Accessories</p>
                <p>Sale</p>
                <div className="mt-16">
                  <div className="flex gap-2">
                    <User />
                    <p>My Account</p>
                  </div>
                </div>
              </div>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
          <Search />
        </div>
        <div>
          <h3 className="font-bold text-2xl">BKWellness</h3>
        </div>
        <div className="flex gap-2">
          <Heart />
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Menus;
