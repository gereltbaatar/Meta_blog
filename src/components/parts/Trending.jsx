import Link from "next/link";
import { TrendingPost } from "../component";
import { useEffect, useState } from "react";

export const Trending = () => {
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=4&&top=1`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div className="container m-auto">
        <div className="lg-px-0 px-4">
          <div className="flex flex-col gap-8">
            <h1 className="font-workSans text-2xl not-italic font-bold text-[#181A2A]">
              Trending
            </h1>
            <div className="overflow-scroll">
              <div className="flex lg:justify-between justify-start md:w-full max-w-[1400px] xl:gap-12 gap-4">
                {articles.map((article, index) => {
                  return (
                    <Link href={`/blog/${article.id}`}>
                      <TrendingPost
                        key={index}
                        imgUrl={article.cover_image}
                        description={article.description}
                        tag={article.tag_list[0]}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
