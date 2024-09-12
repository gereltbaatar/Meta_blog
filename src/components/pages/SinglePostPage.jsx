import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SinglePost } from "../parts";
import MainLayout from "../layout/MainLayout";

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
      <MainLayout>
        <SinglePost article={article} />
      </MainLayout>
    </main>
  );
};

export default SinglePostPage;
