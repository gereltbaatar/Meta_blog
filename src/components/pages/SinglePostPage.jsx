import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Footer, Header, Menu, SinglePost } from "../parts";

const SinglePostPage = () => {
  const [posRight, setPosRight] = useState(false);
  const [zIndex, setZIndex] = useState(false);
  const [menuHidden, setMenuHidden] = useState(false);
  const router = useRouter();
  const [article, setArticle] = useState({});
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };

  const handleClickMenu = () => {
    setPosRight(!posRight);
    setZIndex(!zIndex);
    setMenuHidden(!menuHidden);
  };

  useEffect(() => {
    fetchData();
  }, [article]);
  return (
    <main className="flex flex-col gap-[100px]">
      <Header handleClickMenu={handleClickMenu} />
      <SinglePost article={article} />
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

export default SinglePostPage;
