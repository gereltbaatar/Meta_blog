import Link from "next/link";
import { BlogButtonsYellow } from "../buttons";
import { BlogPostCard } from "../component";
import {
  BlogButtonsBranding,
  BlogButtonsDesign,
  BlogButtonsFashion,
  BlogButtonsSeeAll,
  BlogButtonsTechnology,
  BlogButtonsTravel,
} from "../buttons/BlogButtons1";

export const BlogPost = ({ articles, handleLoadMore, handleFilter }) => {
  return (
    <main className="">
      <div className="container m-auto">
        <div className="flex flex-col gap-8 lg:px-20 px-4">
          <div className="flex flex-col gap-8">
            <h1 className="font-workSans text-2xl not-italic font-bold text-[#181A2A]">
              All Blog Post
            </h1>
            <div className="flex flex-wrap lg:justify-between items-center md:gap-5 gap-2  lg:w-full lg:h-full overflow-auto">
              <div className="flex  items-center gap-5">
                <BlogButtonsYellow handleFilter={handleFilter} />
                <BlogButtonsDesign handleFilter={handleFilter} />
                <BlogButtonsTravel handleFilter={handleFilter} />
                <BlogButtonsFashion handleFilter={handleFilter} />
                <BlogButtonsTechnology handleFilter={handleFilter} />
                <BlogButtonsBranding handleFilter={handleFilter} />
              </div>
              <Link href={"blog"}>
                <BlogButtonsSeeAll />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="flex gap-5 justify-between items-center flex-wrap w-full">
              {articles.map((article, index) => {
                return (
                  <Link href={`/blog/${article.id}`} key={index}>
                    <BlogPostCard
                      title={article.description}
                      imgUrl={article.cover_image}
                      tag={article.tag_list[0]}
                    />
                  </Link>
                );
              })}
            </div>
            <button onClick={handleLoadMore}>
              <p className="px-5 py-3 border border-[#696a754d] hover:border-[#4B6BFB] hover:text-[#4B6BFB] rounded-md font-workSans font-medium not-italic text-base text-[#696A75]">
                Load More
              </p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
