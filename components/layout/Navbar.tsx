"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaCross,
  FaSearch,
  FaSignInAlt,
  FaTimes,
  FaUserPlus,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import ButtonLink from "../ButtonLink";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

function Navbar(): JSX.Element {
  const [opened, setOpened] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <nav className="px-4 py-4 flex flex-col relative">
      <div className="flex justify-between gap-4 mb-4 md:items-center">
        <Image
          src="/img/home/logo.png"
          height={60}
          width={120}
          alt="MyCourse Logo"
          priority
        />
        <form className="w-96 relative hidden md:block">
          <input
            type="text"
            placeholder="Search for course"
            className="pl-2 pr-8 py-2 w-full bg-neutral-200 placeholder:text-sm outline-none focus:outline-none"
          />
          <button className="absolute top-1/2 -translate-y-1/2 right-2">
            <FaSearch />
          </button>
        </form>
        <ul className=" md:gap-3 md:items-center items-start py-6 md:py-0   absolute md:relative flex-col md:flex-row h-screen md:h-auto w-[50vw] md:w-auto z-10 top-0 md:top-auto right-0 md:right-auto bg-neutral-200 md:bg-transparent hidden md:flex">
          <li className="md:hidden ml-4" onClick={() => setOpened(!opened)}>
            <button>
              <FaTimes className="text-2xl" />
            </button>
          </li>
          <li className="w-full md:w-auto hover:bg-neutral-300 py-2 px-4 md:px-0 md:py-0 transition-all duration-300">
            <Link href="/">Become an Instructor</Link>
          </li>
          <li className="w-full md:w-auto hover:bg-neutral-300 py-2 px-4 md:px-0 md:py-0 transition-all duration-300">
            <Link href="/" className="flex gap-1 items-center">
              <FaCartShopping />
              <span className="md:hidden">Shopping Cart</span>
            </Link>
          </li>
          <li className="w-full md:w-auto hover:bg-neutral-300 py-2 px-4 md:px-0 md:py-0 transition-all duration-300">
            <Link href="/" className="flex gap-1 items-center md:hidden">
              <FaSignInAlt />
              <span className="md:hidden">Login</span>
            </Link>
            <ButtonLink
              href="/"
              className="border-2 border-neutral-950 text-neutral-900  hover:text-neutral-600 hover:border-neutral-600 hidden md:block"
            >
              Login
            </ButtonLink>
          </li>
          <li className="w-full md:w-auto hover:bg-neutral-300 py-2 px-4 md:px-0 md:py-0 transition-all duration-300">
            <Link href="/" className="flex gap-1 items-center md:hidden">
              <FaUserPlus />
              <span className="md:hidden">Sign Up</span>
            </Link>
            <ButtonLink
              href="/"
              className="bg-teal-500 text-neutral-100 font-semibold hover:bg-teal-700 hidden md:block"
            >
              Sign Up
            </ButtonLink>
          </li>
          {/* Theme toggler */}
          <li className="flex gap-1 items-center">
            <label
              htmlFor="theme_light"
              className={`text-xl cursor-pointer ${
                resolvedTheme === "light"
                  ? "text-teal-700"
                  : "text-neutral-500 "
              }`}
            >
              <IoSunnyOutline />
            </label>
            <div
              className={`w-12 h-6 border-2 border-teal-500 rounded-full relative transition-all duration-300 ${
                resolvedTheme === "dark" ? "bg-teal-500" : ""
              }`}
            >
              <figure
                className={`h-[1.3rem] w-[1.3rem] border-2  border-white  bg-teal-500 rounded-full absolute -translate-y-1/2 top-1/2 transition-all duration-300  ${
                  resolvedTheme === "light"
                    ? "translate-x-0"
                    : "translate-x-full"
                }`}
              ></figure>
            </div>
            <label
              htmlFor="theme_dark"
              className={`text-xl cursor-pointer ${
                resolvedTheme === "dark" ? "text-teal-700" : "text-neutral-500"
              }`}
            >
              <IoMoonOutline />
            </label>
            <input
              id="theme_light"
              type="radio"
              value={"light"}
              name="theme"
              hidden
              onChange={(e) => setTheme(e.target.value)}
            />
            <input
              id="theme_dark"
              type="radio"
              value={"dark"}
              name="theme"
              hidden
              onChange={(e) => setTheme(e.target.value)}
            />
          </li>
        </ul>
        {opened && (
          <ul className="flex md:gap-3 md:items-center items-start py-6 md:py-0   absolute md:relative flex-col md:flex-row h-screen md:h-auto w-[50vw] md:w-auto z-10 top-0 md:top-auto right-0 md:right-auto bg-neutral-200 md:bg-transparent">
            <li className="md:hidden ml-4" onClick={() => setOpened(!opened)}>
              <button>
                <FaTimes className="text-2xl" />
              </button>
            </li>
            <li className="w-full md:w-auto hover:bg-neutral-300 py-2 px-4 md:px-0 md:py-0 transition-all duration-300">
              <Link href="/">Become an Instructor</Link>
            </li>
            <li className="w-full md:w-auto hover:bg-neutral-300 py-2 px-4 md:px-0 md:py-0 transition-all duration-300">
              <Link href="/" className="flex gap-1 items-center">
                <FaCartShopping />
                <span className="md:hidden">Shopping Cart</span>
              </Link>
            </li>
            <li className="w-full md:w-auto hover:bg-neutral-300 py-2 px-4 md:px-0 md:py-0 transition-all duration-300">
              <Link href="/" className="flex gap-1 items-center md:hidden">
                <FaSignInAlt />
                <span className="md:hidden">Login</span>
              </Link>
              <ButtonLink
                href="/"
                className="border-2 border-neutral-950 text-neutral-900  hover:text-neutral-600 hover:border-neutral-600 hidden md:block"
              >
                Login
              </ButtonLink>
            </li>
            <li className="w-full md:w-auto hover:bg-neutral-300 py-2 px-4 md:px-0 md:py-0 transition-all duration-300">
              <Link href="/" className="flex gap-1 items-center md:hidden">
                <FaUserPlus />
                <span className="md:hidden">Sign Up</span>
              </Link>
              <ButtonLink
                href="/"
                className="bg-teal-500 text-neutral-100 font-semibold hover:bg-teal-700 hidden md:block"
              >
                Sign Up
              </ButtonLink>
            </li>
            {/* Theme toggler */}
            <li className="flex gap-1 items-center pl-2 py-2">
              <label
                htmlFor="theme_light"
                className={`text-xl cursor-pointer ${
                  resolvedTheme === "light"
                    ? "text-teal-700"
                    : "text-neutral-500 "
                }`}
              >
                <IoSunnyOutline />
              </label>
              <div
                className={`w-12 h-6 border-2 border-teal-500 rounded-full relative transition-all duration-300 ${
                  resolvedTheme === "dark" ? "bg-teal-500" : ""
                }`}
              >
                <figure
                  className={`h-[1.3rem] w-[1.3rem] border-2  border-white  bg-teal-500 rounded-full absolute -translate-y-1/2 top-1/2 transition-all duration-300  ${
                    resolvedTheme === "light"
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                ></figure>
              </div>
              <label
                htmlFor="theme_dark"
                className={`text-xl cursor-pointer ${
                  resolvedTheme === "dark"
                    ? "text-teal-700"
                    : "text-neutral-500"
                }`}
              >
                <IoMoonOutline />
              </label>
              <input
                id="theme_light"
                type="radio"
                value={"light"}
                name="theme"
                hidden
                onChange={(e) => setTheme(e.target.value)}
              />
              <input
                id="theme_dark"
                type="radio"
                value={"dark"}
                name="theme"
                hidden
                onChange={(e) => setTheme(e.target.value)}
              />
            </li>
          </ul>
        )}
        <button
          className="text-4xl md:hidden"
          onClick={() => setOpened(!opened)}
        >
          <IoIosMenu />
        </button>
      </div>
      <form className="w-full relative md:hidden">
        <input
          type="text"
          placeholder="Search for course"
          className="pl-2 pr-8 py-2 w-full bg-neutral-200 placeholder:text-sm outline-none focus:outline-none"
        />
        <button className="absolute top-1/2 -translate-y-1/2 right-2">
          <FaSearch />
        </button>
      </form>
    </nav>
  );
}
export default Navbar;
