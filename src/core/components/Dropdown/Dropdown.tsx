import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Item {
  name: string;
  url: string;
}

interface Props {
  items: Item[];
}

export default function Dropdown({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div
      className="relative inline-block text-left md:mr-20 mr-4"
      onMouseOver={openDropdown}
      onMouseOut={closeDropdown}
    >
      {/* Trigger */}
      <div
        className={`${
          isOpen && "rounded-bl-none rounded-br-none"
        } bg-slate-200 py-2 px-4 rounded-2xl flex items-center cursor-pointer select-none`}
      >
        <div className="w-full min-w-[200px]">
          <p>All Categories</p>
        </div>
        <FaAngleDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 rounded-b-2xl bg-slate-200 shadow-lg border z-10">
          <ul className="py-2 text-sm text-gray-700">
            {items.map((item, idx) => (
              <Link to={item.url}>
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-gray-100 hover:font-bold cursor-pointer"
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
