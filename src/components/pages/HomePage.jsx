import { BlogPost, Contents, Footer, Header, Trending } from "../parts";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(articles);

  return (
    <main className="flex flex-col gap-[100px]">
      <Header />
      <Contents />
      <Trending />
      <BlogPost articles={articles} />
      <Footer />
    </main>
  );
};
