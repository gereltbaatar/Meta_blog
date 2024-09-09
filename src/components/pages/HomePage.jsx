import { BlogPost, Contents, Footer, Header, Menu, Trending } from "../parts";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [posRight, setPosRight] = useState(false);
  const [zIndex, setZIndex] = useState(false);
  const [menuHidden, setMenuHidden] = useState(false);
  const [articles, setArticles] = useState([]);
  const [filterV, setFilterV] = useState("");
  const [newsNumber, setNewsNumber] = useState(9);
  const fetchData = () => {
    fetch(
      `https://dev.to/api/articles?per_page=${newsNumber}&tag=${filterV}&top=5`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const handleLoadMore = () => {
    setNewsNumber(newsNumber + 3);
  };

  const handleFilter = (filtertag) => {
    setFilterV(filtertag);
  };

  useEffect(() => {
    fetchData();
  }, [newsNumber, filterV]);

  const handleClickMenu = () => {
    setPosRight(!posRight);
    setZIndex(!zIndex);
    setMenuHidden(!menuHidden);
  };

  return (
    <main className="flex flex-col gap-[100px]">
      <Header handleClickMenu={handleClickMenu} />
      <Contents articles={articles} />
      <Trending />
      <BlogPost
        articles={articles}
        handleLoadMore={handleLoadMore}
        handleFilter={handleFilter}
      />
      <Footer />
      <Menu
        posRight={posRight}
        zIndex={zIndex}
        menuHidden={menuHidden}
        handleClickMenu={handleClickMenu}
      />
    </main>
  );
};
