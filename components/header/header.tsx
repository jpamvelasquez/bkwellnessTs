import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Menus from "./menu";

const Header = () => {
  return (
    <header className=" shadow-2xl ">
      <div className="container mx-auto p-5">
        <nav className="md:flex justify-between items-center hidden">
          <div>
            <h3 className="font-bold text-3xl">BKWellnesss</h3>
          </div>
          <div>
            <ul className="flex gap-5 text-xl font-medium cursor-pointer">
              <li>Home</li>
              <li>About Us</li>
              <li>Teas</li>
              <li>Community</li>
              <li>Accessories</li>
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
