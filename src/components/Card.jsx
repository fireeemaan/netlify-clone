import React from "react";
import className from "classnames";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./Button";

const Card = ({
  children,
  tag,
  title,
  linkContent,
  greenTag,
  blueTag,
  yellowTag,
}) => {
  const classes = className(
    "w-fit h-fit py-0.5 px-3 rounded-full font-bold text-sm",
    {
      "bg-[#DEFFFF] text-[#014847]": greenTag,
      "bg-[#ECF4FE] text-[#2036a1]": blueTag,
      "bg-[#FFF5D9] text-[#603408]": yellowTag,
    }
  );
  return (
    <div className="flex flex-col gap-3 w-96 h-72 p-6 bg-white shadow-lg border border-black/10 rounded-xl">
      <div className={classes}>{tag}</div>
      <div className="flex flex-col gap-3 justify-between h-full">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-extrabold">{title}</h1>
          <p>{children}</p>
        </div>
        <a
          href="#"
          className="group transition duration-300 ease-in-out underline underline-offset-4 flex flex-row items-center hover:decoration-cyan-400"
        >
          {linkContent}{" "}
          <IoIosArrowRoundForward className="transition duration-300 ease-in-out group-hover:text-cyan-400 group-hover:ml-0.5" />
        </a>
      </div>
    </div>
  );
};

export default Card;
