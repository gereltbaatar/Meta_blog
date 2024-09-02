import Link from "next/link";
import { HeaderButton } from "../buttons";
import { HeaderIcon, HeaderSearchIcon } from "../svg";

export const Header = () => {
  return (
    <main className="bg-white w-full">
      <div className="flex justify-center">
        <div className="lg:container lg:m-auto w-full">
          <div className="py-5 px-20">
            <div className="flex justify-between">
              <HeaderIcon />
              <div className="flex justify-center items-center gap-10">
                <Link href={"home"}>
                  <HeaderButton text={"Home"} />
                </Link>
                <Link href={"blog"}>
                  <HeaderButton text={"Blog"} />
                </Link>
                <Link href={"contact"}>
                  <HeaderButton text={"Contact"} />
                </Link>
              </div>
              <div className="flex items-center pl-4 py-2 pr-2 bg-[#F4F4F5] rounded-[5px] gap-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="font-inter text-sm not-italic font-normal bg-[#F4F4F5] text-[#A1A1AA] w-[114px] outline-none"
                />
                <HeaderSearchIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
