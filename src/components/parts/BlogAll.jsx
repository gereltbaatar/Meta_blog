import Link from "next/link";
import { BlogAllPostCard } from "../component";

export const BlogAll = ({ articles, handleClickAllBlog }) => {
  return (
    <main>
      <div className="container m-auto mt-24">
        <div className="flex flex-col gap-8 lg-px-0 px-4 h-full">
          <div className="flex flex-col gap-8">
            <h1 className="font-workSans text-2xl not-italic font-bold text-[#181A2A]">
              All Blog Post
            </h1>
          </div>
          <div className="flex flex-col gap-6 items-center h-full">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-between items-center flex-wrap w-full h-full">
              {articles.map((article, index) => {
                return (
                  <Link href={`/blog/${article.id}`}>
                    <BlogAllPostCard
                      key={index}
                      title={article.description}
                      imgUrl={article.cover_image}
                      tag={article.tag_list[0]}
                      userName={article.user.name}
                      profile_image={article.user.profile_image}
                      date={article.created_at}
                    />
                  </Link>
                );
              })}
            </div>
            <button onClick={handleClickAllBlog}>
              <p className="px-5 py-3 border border-[#696a754d] rounded-md hover:border-[#4B6BFB] hover:text-[#4B6BFB] font-workSans font-medium not-italic text-base text-[#696A75]">
                Load More
              </p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
