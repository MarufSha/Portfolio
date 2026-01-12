"use client";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const opneNavHandler = () => {
    setShowNav(true);
  };
  const closeNavHandler = () => {
    setShowNav(false);
  };

  return (
    <div>
      <Navbar openNav={opneNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};
export default ResponsiveNav;
