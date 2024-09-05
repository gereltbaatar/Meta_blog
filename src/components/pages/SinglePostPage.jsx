import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Footer, Header, SinglePost } from "../parts";

const SinglePostPage = () => {
  const router = useRouter();
  const [article, setArticle] = useState({});
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };

  useEffect(() => {
    fetchData();
  }, [article]);
  return (
    <main className="flex flex-col gap-[100px]">
      <Header />
      <SinglePost article={article} />
      <Footer />
    </main>
  );
};

export default SinglePostPage;
