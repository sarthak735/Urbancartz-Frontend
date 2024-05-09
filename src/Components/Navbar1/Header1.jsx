import React from "react";
import { PiPackage } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <>
      <header className="  shadow-md w-full h-12 bg-black px-12 md:px-10">
        <div className=" flex items-center h-full justify-between ">
          <div className=" flex flex-row">
            <PiPackage color="white" size="25" />
            <h2 className=" text-white px-4 text-sm font-mono">
              Free Shipping for orders above Rs1000
            </h2>
          </div>
          <div className=" text-white flex items-center gap-4 md:gap-7">
            <nav className=" flex underline gap-2 md:gap-12 text-base md:text-sm">
              <Link to={"about"}>About</Link>
              <Link to={"contact"}>Contact</Link>
              <Link to={"help"}>Help Center</Link>
              <Link to={"mobile"}>
                {" "}
                <h2>Call Us</h2>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header1;
