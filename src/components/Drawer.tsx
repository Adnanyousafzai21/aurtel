'use client'
import { CloseIcon, MenuIcon } from "@/icons";
import React from "react";
import Link from "next/link";
import { routes } from "@/route";

const Drawer = () => {
  const handleLinkClick = () => {
    const drawerToggle = document.getElementById("menu-drawer") as HTMLInputElement;;
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-end justify-center">
        <label htmlFor="menu-drawer" className="btn btn-ghost">
          <MenuIcon />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="menu-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <div className="flex justify-end">
            <label htmlFor="menu-drawer" className="btn btn-ghost">
              <CloseIcon />
            </label>
          </div>
          <div className="divider"></div>
          {routes.map((item, index) => (
            <li key={index} className="text-primary font-bold">
              <Link
                className="btn btn-ghost justify-start"
                href={item.href}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
