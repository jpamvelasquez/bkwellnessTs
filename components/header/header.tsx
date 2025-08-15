import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"; // adjust path as needed
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Menus from "./menu";
import Link from "next/link";

const menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Teas",
    link: "/teas",
  },
  {
    name: "Discover",
    link: "/discover",
    menu: [
      {
        list: "About Us",
        description:
          "We started BKWellness with a simple goal: to offer products that not only look good but feel good, last longer, and make life easier. Every item we create is inspired by real people, real needs, and real quality — because you deserve the best.",
      },
      {
        list: "Community",
        description:
          "At BKWellness, we are committed to delivering solutions that don’t just meet expectations — we exceed them. With a focus on quality, innovation, and integrity, we work tirelessly to empower our clients, create value, and make a lasting impact in everything we do.",
      },
    ],
  },
  {
    name: "Accessories",
    link: "/accessories",
  },
];

const Header = () => {
  return (
    <header className="shadow-2xl px-3">
      <div className="container mx-auto p-5 md:p-0">
        <nav className="md:flex justify-between items-center hidden">
          {/* Logo */}
          <div>
            <h3 className="font-bold lg:text-3xl text-2xl">BKWellness</h3>
          </div>

          {/* Menu List */}
          <div>
            <ul className="flex 2xl:gap-20 xl:gap-16 lg:gap-11 gap-5 md:text-lg font-medium cursor-pointer">
              {menu.map((nav, index) =>
                nav.menu ? (
                  // NavigationMenu for dropdown items like Discover
                  <NavigationMenu key={index}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger
                          style={{ backgroundColor: "transparent" }}
                          className="border-none shadow-none py-6 md:text-lg font-medium cursor-pointer"
                        >
                          {nav.name}
                        </NavigationMenuTrigger>

                        <NavigationMenuContent className="bg-white shadow-md p-4 rounded-md">
                          <ul className="grid gap-3 2xl:w-[400px] md:w-[300px]">
                            {nav.menu.map((item, i) => (
                              <li key={i} className="">
                                <Link href="#" className="block">
                                  <div className="group p-3 hover:bg-amber-50  ">
                                    <p className="font-semibold border-b-4 border-transparent group-hover:border-amber-400 transition max-w-fit ">
                                      {item.list}
                                    </p>
                                    <p className="text-sm text-gray-500 my-2">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                ) : (
                  // Regular nav item
                  <li
                    key={index}
                    className="border-b-4 py-6 border-transparent hover:border-amber-400 transition"
                  >
                    <a href={nav.link}>{nav.name}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Icons */}
          <div>
            <div className="flex gap-3">
              <Search className="cursor-pointer" />
              <Heart className="cursor-pointer" />
              <User className="cursor-pointer" />
              <ShoppingCart className="cursor-pointer" />
            </div>
          </div>
        </nav>

        {/* Mobile menu (if any) */}
        <Menus />
      </div>
    </header>
  );
};

export default Header;
