"use client";

import { NavURL } from "@/constants/constant";
import { NavItem } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handler = () => setNavBg(window.scrollY >= 90);
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const getNavHeight = () => navRef.current?.offsetHeight ?? 0;

  const magneticScrollTo = (getTargetY: () => number) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);

    const maxMs = 4000;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;

      const targetY = getTargetY();
      const currentY = window.scrollY;
      const delta = targetY - currentY;

      const followStrength = 0.015;
      const nextY = currentY + delta * followStrength;

      window.scrollTo(0, nextY);

      const elapsed = timestamp - start;
      const closeEnough = Math.abs(delta) < 1;

      if (!closeEnough && elapsed < maxMs) {
        rafId.current = requestAnimationFrame(step);
      }
    };

    rafId.current = requestAnimationFrame(step);
  };

  const scrollToSection = (hashUrl: string, customOffset = 0) => {
    const id = hashUrl.startsWith("#") ? hashUrl.slice(1) : hashUrl;
    const el = document.getElementById(id);
    if (!el) return;

    const padding = 8;

    history.replaceState(null, "", `#${id}`);

    const getTargetY = () => {
      const navH = getNavHeight();
      return (
        el.getBoundingClientRect().top +
        window.scrollY -
        navH -
        customOffset -
        padding
      );
    };

    requestAnimationFrame(() => magneticScrollTo(getTargetY));
  };

  return (
    <div
      ref={navRef}
      className={`transition-all ${
        navBg ? "bg-[#0f142ed9] shadow-md" : ""
      } duration-200 h-[12vh] z-10000 fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaCode className="w-5 h-5 text-black" />
          </div>

          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold uppercase">
            Maruf
          </h1>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {(NavURL as NavItem[]).map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.url, link.offset ?? 0)}
              className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200 cursor-pointer"
            >
              {link.title}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="/Resume/Maruf Shahriar.pdf"
            download
            className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2"
          >
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </a>

          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
