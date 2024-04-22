import React from "react";
import className from "classnames";

const Button = ({ children, href, outline, cyan, blue, wide, small }) => {
  const classes = className(
    "w-fit h-fit p-2 rounded-md font-extrabold border-transparent",
    {
      "text-white bg-transparent border border-white": outline,
      "text-white bg-[#2E51ED] hover:bg-[#2136A0] border": blue,
      "text-[#014847] bg-[#30E7E3] hover:bg-[#8DFBF7] border": cyan,
      "py-2 px-5": small,
      "py-2 px-12": wide,
    }
  );
  return (
    <a className={classes} href="#">
      {children}
    </a>
  );
};

export default Button;
