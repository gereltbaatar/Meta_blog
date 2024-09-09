import Link from "next/link";
import { HeaderButton, Xicon } from "../buttons";
import { HeaderIcon, HeaderSearchIcon } from "../svg";
import { useState, useEffect } from "react";

export const Menu = ({ posRight, zIndex, menuHidden, handleClickMenu }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  // const [dark, setDark] = useState(true);
  const handeledchanj = (value) => {
    setSearchQuery(value);
    const filteredArray = articles.filter((filter) =>
      filter.title.toLowerCase().includes(value)
    );

    setData(filteredArray);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main
      className={`w-full h-full drop-shadow-2xl filter fixed flex justify-end
      ${posRight ? "right-[0]" : "right-[-100%]"} 
      ${zIndex ? "z-[3] " : "z-[0]"}
      ${menuHidden ? "static" : "lg:fixed"} `}
    >
      <div className="w-[80%] h-full bg-white">
        <div className="flex flex-col px-4 items-start">
          <div className="flex   justify-between w-full py-4">
            <HeaderIcon />
            <button onClick={handleClickMenu}>
              <Xicon />
            </button>
          </div>
          <div className="py-4">
            <div className="flex items-center pl-4 py-2 pr-2 bg-[#F4F4F5] rounded-[5px] gap-3 ">
              <input
                type="text"
                placeholder="Search"
                className="font-inter text-sm not-italic font-normal bg-[#F4F4F5] text-[#A1A1AA] w-[114px] outline-none"
              />
              <HeaderSearchIcon />
            </div>
            <div className="">
              {searchQuery && data.length > 0 && (
                <div className="w-full h-auto overflow-scroll p-4 border border-gray-light-100">
                  <div className="flex flex-col text-clip text-[var(--secondary-600)] font-work-sans bg-transparent gap-2">
                    {data.map((article, index) => (
                      <Link href={`/blog/${article.id}`} key={index}>
                        <button
                          onClick={handleOpenMenu}
                          className="w-full h-auto border rounded-lg"
                        >
                          {article.title}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {searchQuery && data.length === 0 && (
                <div className="p-4 text-gray-500">Хайлт олдсонгүй.</div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3  items-start py-4">
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
        </div>
      </div>
    </main>
  );
};
