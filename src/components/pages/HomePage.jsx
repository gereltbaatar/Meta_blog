import { BlogPost, Contents, Footer, Header, Trending } from "../parts";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [filteredValue, setFilteredValue] = useState("");
  const [newsNumber, setNewsNumber] = useState(9);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${newsNumber}&`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const handleClickLoadMore = () => {
    setNewsNumber(newsNumber + 3);
  };

  // console.log(filteredValue, "ajilah");

  console.log(articles, "ajilah");

  useEffect(() => {
    fetchData();
  }, [newsNumber, filteredValue]);

  return (
    <main className="flex flex-col gap-[100px]">
      <Header />
      <Contents />
      <Trending />
      <BlogPost articles={articles} handleClickLoadMore={handleClickLoadMore} />
      <Footer />
    </main>
  );
};
