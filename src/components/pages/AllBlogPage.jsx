import { BlogAll, Footer, Header } from "../parts";
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
  }, []);

  return (
    <main className="flex flex-col gap-9">
      <Header />
      <BlogAll articles={articles} handleClickAllBlog={handleClickAllBlog} />
      <Footer />
    </main>
  );
};
