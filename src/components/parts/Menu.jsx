import { HeaderButton } from "../buttons";
import { HeaderIcon, HeaderSearchIcon } from "../svg";

export const Menu = () => {
  return (
    <main className=" ">
      <div className=" pt-20 px-4 py-16 w-[80%]">
        <div className="flex flex-col gap-5 items-start">
          <div className="flex items-center pl-4 py-2 pr-2 bg-[#F4F4F5] rounded-[5px] gap-3 ">
            <input
              type="text"
              placeholder="Search"
              className="font-inter text-sm not-italic font-normal bg-[#F4F4F5] text-[#A1A1AA] w-[114px] outline-none"
            />
            <HeaderSearchIcon />
          </div>
          <HeaderIcon />
          <div className="flex flex-col gap-3  items-start">
            <HeaderButton text={"Home"} />
            <HeaderButton text={"Blog"} />
            <HeaderButton text={"Contact"} />
          </div>
        </div>
      </div>
    </main>
  );
};
