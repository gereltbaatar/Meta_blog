import Link from "next/link";
import { HeaderButton } from "../buttons";
import { HeaderIcon, HeaderSearchIcon, MenuIcon } from "../svg";
import { useState, useEffect } from "react";

export const Header = ({ handleClickMenu }) => {
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
                <div className="">
                  <div className="lg:flex items-center pl-4 py-2 pr-2 bg-[#F4F4F5] rounded-[5px] gap-3 hidden">
                    <input
                      type="text"
                      placeholder="Search"
                      onChange={(event) => handeledchanj(event.target.value)}
                      className="font-inter text-sm not-italic font-normal bg-[#F4F4F5] text-[#A1A1AA] w-[114px] outline-none"
                    />
                    <HeaderSearchIcon />
                  </div>
                  {searchQuery && data.length > 0 && (
                    <div className=" ">
                      <div className=" absolute flex flex-col  bg-[#F4F4F5] max-w-[166px] max-h-[400px] overflow-scroll gap-2 pl-4 p-2 mt-4 rounded-lg">
                        {data.map((article, index) => (
                          <Link href={`/blog/${article.id}`} key={index}>
                            <button
                              onClick={handeledchanj}
                              className="w-full border border-[#A1A1AA] font-workSans text-xs text-[#A1A1AA] h-auto rounded-md"
                            >
                              {article.title}
                            </button>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {searchQuery && data.length === 0 && (
                    <div className="absolute max-w-[166px] bg-[#F4F4F5] pl-4 p-2 mt-4 text-[#A1A1AA] rounded-lg">
                      Хайлт олдсонгүй.
                    </div>
                  )}
                </div>
                <MenuIcon handleClickMenu={handleClickMenu} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
