import React from "react";
import className from "classnames";
import Button from "./Button";
import { ECommerce, AIChatbot, LandingPage, EdgeFunction } from "./CodeContent";
import { useState } from "react";
import { FaShop } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FaRegWindowMaximize } from "react-icons/fa";
import { TbLambda } from "react-icons/tb";
import { Typewriter } from "react-simple-typewriter";

const CodeCard = (...rest) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [clicked, setClicked] = useState(false);
  const classes = className(
    "flex border border-[#5d8df5] flex-row w-fit h-fit rounded-xl",
    rest.className
  );

  return (
    <div className={classes}>
      <div className="flex flex-col w-[27rem] bg-[#2136A0] rounded-l-xl border border-[#5d8df5] p-8 gap-7">
        <h1 className="text-white text-4xl font-black">
          Ship your <br />
          <span className="text-[#32e6e2]">
            <Typewriter
              words={
                clicked
                  ? [
                      activeIndex === 1
                        ? "e-commerce"
                        : activeIndex === 2
                        ? "AI Chatbot"
                        : activeIndex === 3
                        ? "Landing Page"
                        : activeIndex === 4
                        ? "Edge Function"
                        : "",
                    ]
                  : [
                      "e-commerce site",
                      "AI chatbot",
                      "landing page",
                      "edge function",
                    ]
              }
              cursor
              cursorStyle="_"
              loop={!clicked}
            ></Typewriter>
          </span>
          <br />
          in just fey clicks.
        </h1>
        <p className="text-base text-white">
          Spin up a new project, or connect an existing, and explore rollbacks,
          CI/CD, edge functions, collaborative deploy previews, and more.
        </p>
        <div className="flex flex-row gap-5">
          <Button small outline>
            Read the docs
          </Button>
          <Button small outline>
            Developer Hub
          </Button>
        </div>
      </div>
      <div className="flex flex-col rounded-tr-xl">
        <div className="flex flex-row rounded-tr-xl">
          <NavButton
            icon={<FaShop />}
            isActive={activeIndex === 1}
            onClick={() => {
              setActiveIndex(1);
              setClicked(true);
            }}
          >
            E-Commerce
          </NavButton>
          <NavButton
            icon={<HiOutlineSparkles />}
            isActive={activeIndex === 2}
            onClick={() => {
              setActiveIndex(2);
              setClicked(true);
            }}
          >
            AI Chatbot
          </NavButton>
          <NavButton
            icon={<FaRegWindowMaximize />}
            isActive={activeIndex === 3}
            onClick={() => {
              setActiveIndex(3);
              setClicked(true);
            }}
          >
            Landing Page
          </NavButton>
          <NavButton
            icon={<TbLambda />}
            isActive={activeIndex === 4}
            onClick={() => {
              setActiveIndex(4);
              setClicked(true);
            }}
            className="rounded-tr-xl"
          >
            Edge Function
          </NavButton>
        </div>
        <Code activeIndex={activeIndex}></Code>
      </div>
    </div>
  );
};

const Code = ({ activeIndex }) => {
  return (
    <div className="overflow-hidden rounded-br-xl">
      <div className="w-[27rem] h-[20rem]">
        {activeIndex === 1 && <ECommerce />}
        {activeIndex === 2 && <AIChatbot />}
        {activeIndex === 3 && <LandingPage />}
        {activeIndex === 4 && <EdgeFunction />}
      </div>
      <div className="-mt-[4.5rem] rounded-br-xl p-2 flex flex-row border border-[#5d8df5] justify-end bg-[#1a205d]">
        <Button cyan small>
          Deploy
        </Button>
      </div>
    </div>
  );
};

const NavButton = ({ children, icon, isActive, onClick, ...rest }) => {
  const classes = className(
    rest.className,
    "flex items-center gap-2 px-4 py-3 border-[#5d8df5] font-bold text-white bg-[#1a205d]",
    { "flex-grow border-x border-t": isActive, "flex-none border": !isActive }
  );
  return (
    <button href="#" className={classes} onClick={onClick}>
      {icon}
      {isActive && children}
    </button>
  );
};

export default CodeCard;
