import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoCart, IoHeart } from "react-icons/io5";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const userSelecter = useSelector((state) => state.user);
  const counterSelector = useSelector((state) => state.counter);

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
            <Button size="icon" variant="ghost" className="relative">
              <IoCart className="h-6 w-6" />
              <span className="absolute z-10 top-1 right-1 text-red-500 bg-white px-1 rounded-full text-xs">
                {counterSelector.count}
              </span>
            </Button>
          </Link>
          <Button size="icon" variant="ghost">
            <IoHeart className="h-6 w-6" />
          </Button>
        </div>
        <Separator orientation="vertical" className="h-full" />
        {userSelecter.id ? (
          <p>Helloo {userSelecter.username}👋 </p>
        ) : (
          <>
            <div className="flex items-center space-x-2">
              <Link to={"/login"}>
                <Button>Log In</Button>
              </Link>
              <Link to={"/register"}>
                <Button variant="outline">Sign Up</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
