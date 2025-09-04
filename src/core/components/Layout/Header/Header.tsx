import { FC, useState } from "react";
import MobileMenu from "./MobileMenu";
import { Flayout } from "../../Cart/Flayout";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import Dropdown from "../../Dropdown/Dropdown";

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const navLinks = [
    { name: "Category 1", url: "/shop/category-1" },
    { name: "Category 2", url: "/shop/category-2" },
    { name: "Category 3", url: "/shop/category-3" },
    { name: "Category 4", url: "/shop/category-4" },
  ];

  return (
    <header className="relative max-w-[1440px] mx-auto">
      <div className="hidden gap-x-10 md:flex justify-between items-center mx-auto px-4 md:px-7 lg:px-14 py-4">
        <div className="flex items-center">
          <Link to="/">
            <img src="/images/logo.svg" alt="Logo" className="h-6 w-auto" />
          </Link>
        </div>

        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-l-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-black"
          />
          <button className="rounded-r-full bg-black px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black">
            <IoMdSearch size={20} />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <a href="/profile">
            <img
              src="/images/user-circle.svg"
              alt="Search Icon"
              className="h-6 w-6"
            />
          </a>
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="flex items-center gap-1.5"
          >
            <img
              src="/images/shopping bag.svg"
              alt="Search Icon"
              className="h-6 w-6"
            />
            <div className="bg-app-black h-5 w-5 rounded-full flex justify-center items-center">
              <p className="text-white text-center font-inter text-xs font-bold leading-[10px]">
                2
              </p>
            </div>
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center md:hidden py-4 px-8">
        <div className="flex items-center gap-1">
          <button onClick={() => setOpen(!open)}>
            <img src="/images/menu.svg" alt="" />
          </button>
          <img src="/images/logo.svg" alt="Logo" className="h-6 w-auto" />
        </div>
        <div className="px-[1px] py-0.5">
          <button
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-1.5"
          >
            <img
              src="/images/shopping bag.svg"
              alt="Search Icon"
              className="h-6 w-6"
            />
            <div className="bg-app-black h-5 w-5 rounded-full flex justify-center items-center">
              <p className="text-white text-center font-inter text-xs font-bold leading-[10px]">
                2
              </p>
            </div>
          </button>
        </div>
      </div>
      {open && <MobileMenu setOpen={setOpen} />}
      <div
        className={`cart-transition ${
          cartOpen ? "cart-open absolute top-0 right-0 z-50" : ""
        }`}
      >
        {cartOpen && <Flayout setOpen={setCartOpen} />}
      </div>
      <nav className="flex-grow flex px-8 lg:px-14  text-center py-4 ">
        <Dropdown items={navLinks} />
        <ul className="md:flex justify-center items-center space-x-10 hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="text-app-black font-inter text-sm font-semibold"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
