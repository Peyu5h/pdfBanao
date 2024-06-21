import Image from "next/image";
import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div>
      <div className="flex item-center justify-between mt-2 font-khand px-0 xl:px-36">
        <div className="pointer-events-none select-none">
          <Image src="/images/logo.png" alt="logo" width={124} height={124} />
        </div>
        <div className="text-xl  cursor-pointer">
          <HiOutlineMenuAlt2 />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
