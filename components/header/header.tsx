import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Menus from "./menu";

const menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/",
  },
  {
    name: "Teas",
    link: "/",
  },
  {
    name: "Community",
    link: "/",
  },
  {
    name: "Accessories",
    link: "/",
  },
];

const Header = () => {
  return (
    <header className=" shadow-2xl px-3 ">
      <div className="container mx-auto p-5 md:p-0">
        <nav className="md:flex justify-between items-center hidden">
          <div>
            <h3 className="font-bold lg:text-3xl text-2xl">BKWellnesss</h3>
          </div>
          <div>
            <ul className="flex 2xl:gap-20 xl:gap-16 lg:gap-11 gap-5 md:text-lg font-medium cursor-pointer ">
              {menu.map((nav, index) => (
                <li
                  key={index}
                  className="border-b-4 py-6 border-transparent hover:border-amber-400 duration-500"
                >
                  {nav.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex gap-3">
              <Search />
              <Heart />
              <User />
              <ShoppingCart />
            </div>
          </div>
        </nav>
        <Menus />
      </div>
    </header>
  );
};

export default Header;
