import React from "react";
import { useState } from "react";
import { navLinks } from "../constants";
import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const click = () => {
    const show = (prev) => !prev;
    setToggle(show);
  };
  return (
    <div>
      <nav className="w-full flex py-6 justify-between items-center navbar ">
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[white]  ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-[16px]  `}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu "
            className="h-[28px] w-[28px] object-contain cursor-pointer"
            onClick={() => click()}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] sidebar rounded-xl`}
          >
                    <ul className="list-none flex  flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[white]  ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              } text-[16px]`}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
