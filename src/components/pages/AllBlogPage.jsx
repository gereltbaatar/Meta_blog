import { BlogAll, Footer, Header } from "../parts";
import { useEffect, useState } from "react";

export const AllBlogPage = () => {
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="flex flex-col gap-9">
      <Header />
      <BlogAll articles={articles} />
      <Footer />
    </main>
  );
};
