import Link from "next/link";
import { HeaderButton } from "../buttons";
import { HeaderIcon, HeaderSearchIcon, MenuIcon } from "../svg";
import { useState } from "react";

export const Header = () => {
  // const [dark, setDark] = useState(true);

  return (
    <main className="w-full fixed z-[1] ">
      <div className=" background filter">
        <div className="flex justify-center static z-[1]">
          <div className="lg:container lg:m-auto w-full">
            <div className="py-5 lg:px-20 px-4">
              <div className="flex justify-between ">
                <Link href={"/"}>
                  <HeaderIcon />
                </Link>
                <div className="lg:flex justify-center items-center gap-10 hidden">
                  <Link href={"/"}>
                    <HeaderButton text={"Home"} />
                  </Link>
                  <Link href={"/blog"}>
                    <HeaderButton text={"Blog"} />
                  </Link>
                  <Link href={"/contact"}>
                    <HeaderButton text={"Contact"} />
                  </Link>
                </div>
                <div className="lg:flex items-center pl-4 py-2 pr-2 bg-[#F4F4F5] rounded-[5px] gap-3 hidden">
                  <input
                    type="text"
                    placeholder="Search"
                    className="font-inter text-sm not-italic font-normal bg-[#F4F4F5] text-[#A1A1AA] w-[114px] outline-none"
                  />
                  <HeaderSearchIcon />
                </div>
                <MenuIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
