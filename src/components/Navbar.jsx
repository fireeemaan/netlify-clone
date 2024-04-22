import React from "react";
import NavbarFlyout from "./NavbarFlyout";
import PlatformContent from "./PlatformContent";
import SolutionContent from "./SolutionContent";
import StartBuildingContent from "./StartBuildingContent";
import NetlifyLogo from "../assets/netlify-logo.svg";
import { FiSearch } from "react-icons/fi";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="fixed flex w-full bg-white bg-opacity-75 backdrop-blur-sm h-[4.5rem] shadow-lg items-center pl-3 pr-6 gap-6">
      <img src={NetlifyLogo} className="w-32"></img>
      <nav className="flex w-full justify-between">
        <div className="navbar-menu flex items-center">
          <NavbarFlyout Content={PlatformContent}> Platform </NavbarFlyout>
          <NavbarFlyout Content={SolutionContent}> Solutions </NavbarFlyout>
          <NavbarFlyout> Integrations </NavbarFlyout>
          <NavbarFlyout Content={StartBuildingContent}>
            Start Building
          </NavbarFlyout>
          <NavbarFlyout> Docs </NavbarFlyout>
          <NavbarFlyout> Pricing </NavbarFlyout>
        </div>
        <div className="flex items-center gap-1">
          <NavbarFlyout Icon={<FiSearch />}></NavbarFlyout>
          <NavbarFlyout> Contact</NavbarFlyout>
          <NavbarFlyout> Log In </NavbarFlyout>
          <Button small blue>
            Sign Up
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
