import { BlogAll, Footer, Header, Menu } from "../parts";
import { useEffect, useState } from "react";

export const AllBlogPage = () => {
  const [posRight, setPosRight] = useState(false);
  const [zIndex, setZIndex] = useState(false);
  const [menuHidden, setMenuHidden] = useState(false);
  const [articles, setArticles] = useState([]);
  const [newsNumber, setNewsNumber] = useState(12);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${newsNumber}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const handleClickAllBlog = () => {
    setNewsNumber(newsNumber + 3);
  };

  useEffect(() => {
    fetchData();
  }, [newsNumber]);

  const handleClickMenu = () => {
    setPosRight(!posRight);
    setZIndex(!zIndex);
    setMenuHidden(!menuHidden);
  };

  return (
    <main className="flex flex-col gap-9">
      <Header handleClickMenu={handleClickMenu} />
      <BlogAll articles={articles} handleClickAllBlog={handleClickAllBlog} />
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
