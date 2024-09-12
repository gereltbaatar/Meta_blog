import MainLayout from "../layout/MainLayout";
import { BlogPost, Contents, Trending } from "../parts";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [filterValeu, setFilterValeu] = useState("");
  const [newsNumber, setNewsNumber] = useState(9);
  const fetchData = () => {
    fetch(
      `https://dev.to/api/articles?per_page=${newsNumber}&tag=${filterValeu}&top=5`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const handleLoadMore = () => {
    setNewsNumber(newsNumber + 3);
  };

  const handleFilter = (filtertag) => {
    setFilterValeu(filtertag);
  };

  useEffect(() => {
    fetchData();
  }, [newsNumber, filterValeu]);

  return (
    <main>
      <MainLayout>
        <Contents articles={articles} />
        <Trending />
        <BlogPost
          articles={articles}
          handleLoadMore={handleLoadMore}
          handleFilter={handleFilter}
        />
      </MainLayout>
    </main>
  );
};
