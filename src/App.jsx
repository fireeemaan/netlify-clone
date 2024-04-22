import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="flex w-full h-[115dvh] bg-top bg-[#2B45CA] bg-[url('./assets/hexagon-bg.svg')] bg-no-repeat">
          <div className="w-full h-[100dvh] mt-[4.5rem] bg-gradient-to-b from-black/30 to-transparent">
            <h1 className="mt-36 text-center text-6xl font-[Pacaembu]">
              Connect Everything.<br></br>Build Everything.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
