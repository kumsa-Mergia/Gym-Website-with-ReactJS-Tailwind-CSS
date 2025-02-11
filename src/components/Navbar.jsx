import React, { useState } from "react";
import { NavbarMenu } from "../Mockdata/data";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import ResponsiveMemu from "./ResponsiveMemu";

const Navbar = () => {
  const [open, setOpen] = useState(false); // ✅ Correctly defined state


  return (
    <>
      <nav>
        <div className="p-16 flex justify-between items-center py-8">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p className="text-cyan-500">ትልቅ</p>
            <p>Gym</p>
          </div>

          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-orange-600 font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons section */}
          <div className="flex">
            <button className="text-2xl hover:bg-cyan-500 hover:text-white rounded-full p-2 transition">
              <CiSearch className="text-current" />
            </button>

            <button className="text-2xl hover:bg-cyan-500 hover:text-white rounded-full p-2 transition">
              <CiShoppingCart className="text-current" />
            </button>

            <button className="hover:bg-cyan-500 text-cyan-300 font-semibold hover:text-white rounded-md border-2 border-cyan-300 px-6 py-2 transition duration-200 hidden md:block">
              Login
            </button>
          </div>

          {/* Mobile hamburger Menu section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      {/* Mobile sidebar section */}
      <ResponsiveMemu open={open} />
    </>
  );
};

export default Navbar;
