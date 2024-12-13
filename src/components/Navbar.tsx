import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
import Drawer from "./Drawer";
import { routes } from "../route";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar px-2 md:px-10 py-5 h-20 md:h-36 bg-base-100">
      <div className="navbar-start flex">
        <a className="btn btn-ghost text-xl flex h-full">
          <Image className="w-16 md:w-28 lg:w-40"src={Logo} alt="Logo" />
          <p className="text-xs md:text-sm lg:text-lg">
            Aurtel Consulting Group
          </p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {routes.map((item, index) => (
            <li key={index} className="text-primary font-bold">
              <Link href={item.href} className="btn btn-ghost">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex lg:hidden">
        <Drawer />
      </div>
    </div>
  );
};

export default Navbar;
