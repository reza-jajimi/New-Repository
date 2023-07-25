import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { NavbarItems } from "@/src/core/data/NavbarItems";
import Link from "next/link";
import NavbarDrawer from "./NavbarDrawer";
import { useCartContext } from "@/src/context/CartContext";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { state } = useCartContext();
  const [darkMode, setDarkMode] = useState<any>();
  const [cartItemCount, setCartItemCount] = useState(0);
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const { cart } = state;

  useEffect(() => {
    setDarkMode(theme);
  }, [theme]);

  useEffect(() => {
    setCartItemCount(
      cart.cartItems.reduce((acc: number, cur: any) => acc + cur.qty, 0)
    );
  }, [cart.cartItems]);

  return (
    <nav className="shadow-lg bg-white dark:bg-blue-gray-300">
      <div className=" h-16 px-5 flex justify-between items-center container mx-auto">
        <Link
          href="/"
          className=" dark:text-white font-bold text-xl text-slate-800"
        >
          LOGO
        </Link>

        <div className=" dark:text-white text-slate-800 hidden md:block">
          {NavbarItems.map((items, index) => (
            <Link key={index} href={items.path} className="mx-2 md:mx-4">
              {items.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <div className="mr-5">
            {darkMode === "light" ? (
              <MoonIcon
                className="w-6 h-6 text-gray-400 hover:text-gray-500 cursor-pointer"
                onClick={() => setTheme("dark")}
              />
            ) : (
              <SunIcon
                className="w-6 h-6 text-yellow-300 hover:text-yellow-500 cursor-pointer"
                onClick={() => setTheme("light")}
              />
            )}
          </div>
          <div className="hidden md:block">
            <Link
              href="/cart"
              className=" dark:text-white text-slate-800 px-2 relative"
            >
              Cart
              {cartItemCount > 0 && (
                <span className="bg-red-400 text-white w-5 h-5 rounded-full absolute text-xs -left-1 -bottom-3 text-center pt-[2px]">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <Link href="/login" className=" dark:text-white text-slate-800 px-2">
              Login
            </Link>
          </div>

          <div onClick={openDrawer} className="block md:hidden">
            menu
          </div>
          <NavbarDrawer closeDrawer={closeDrawer} open={open} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
