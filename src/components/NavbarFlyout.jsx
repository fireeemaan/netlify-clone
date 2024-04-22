import React from "react";
import { useState } from "react";
import PlatformContent from "./PlatformContent";
import { IoIosArrowDown } from "react-icons/io";

const NavbarFlyout = ({ children, href, Content, Icon }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open && Content;
  // const showFlyout = true;

  return (
    <div
      className="relative w-fit h-fit p-2 rounded-md border-2 border-transparent hover:border-[#2036A1]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href="#"
        className="relative flex flex-row justify-center items-center group font-semibold box-border"
      >
        {children} {Content && <IoIosArrowDown />} {Icon && Icon}
      </a>
      <div className="absolute w-full h-4 bg-transparent"></div>
      {showFlyout && <Content />}
    </div>
  );
};

export default NavbarFlyout;
