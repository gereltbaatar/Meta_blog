import MainLayout from "../layout/MainLayout";
import { BlogAll } from "../parts";
import { useEffect, useState } from "react";

export const AllBlogPage = () => {
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

  return (
    <main>
      <MainLayout>
        <BlogAll articles={articles} handleClickAllBlog={handleClickAllBlog} />
      </MainLayout>
    </main>
  );
};
