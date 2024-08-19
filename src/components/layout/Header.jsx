import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoCart, IoHeart } from "react-icons/io5";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 flex bg-neutral-400 items-center justify-between px-8">
      {/* brand */}

      <p className="text-xl font-bold hover:cursor-pointer">SaturnPhonsel</p>
      {/* search bar */}

      <Input className="max-w-[500px]" placeholder="searchh" />

      {/* buttons */}
      <div className="flex space-x-4 h-5 items-center">
        <div className="flex space-x-2">
          <Link to={"/cart"}>
            <Button size="icon" variant="ghost">
              <IoCart className="h-6 w-6" />
            </Button>
          </Link>
          <Button size="icon" variant="ghost">
            <IoHeart className="h-6 w-6" />
          </Button>
        </div>
        <Separator orientation="vertical" className="h-full" />
        <div className="flex space-x-2">
          <Button>Log In</Button>
          <Button variant="outline">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
