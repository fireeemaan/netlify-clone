import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="flex w-full h-[114dvh] bg-top bg-[#2B45CA] bg-[url('./assets/hexagon-bg.svg')] bg-no-repeat">
          <div className="absolute w-full h-[4.5rem] bg-white"></div>
          <div className="flex justify-center items-center w-full h-[119dvh] bg-gradient-to-b from-black/50 to-transparent">
            <div className="flex flex-col -mt-36 w-[44.5rem] justify-center items-center">
              <h1 className="text-center text-7xl font-black text-white">
                Connect everything. Build anything.
              </h1>
              <p className="text-center mt-10 font-normal text-xl text-white">
                Netlify is the essential platform for the delivery of
                exceptional and dynamic web experiences, without limitations.
              </p>
              <div className="flex flex-row btn-action mt-8 gap-3">
                <Button cyan wide>
                  Deploy to Netlify
                </Button>
                <Button outline wide>
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center -mt-40 h-full w-full pb-20">
          <iframe
            className=" rounded-xl border border-white"
            width="700"
            height="380"
            src="https://www.youtube.com/embed/tJ95Q2ETMA4"
            title="Netlify Composable Web Platform"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
          <div className="section flex flex-col justify-center items-center h-fit w-[50rem]">
            <h1 className="header text-5xl text-center font-extrabold my-10">
              Netlify Composable Web Platform
            </h1>
            <p className="text-base text-center">
              Streamlined orchestration, simplified and unified workflows, and
              real-time updates across infrastructure, workflows, websites and
              teams — all supported by Enterprise-grade security, services, and
              a world-class partner ecosystem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
