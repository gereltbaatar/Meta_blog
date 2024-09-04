import Link from "next/link";
import { BlogAllPostCard } from "../component";

export const BlogAll = ({ articles, handleClickAllBlog }) => {
  return (
    <main className="">
      <div className="container m-auto">
        <div className="flex flex-col gap-8 px-20">
          <div className="flex flex-col gap-8">
            <h1 className="font-workSans text-2xl not-italic font-bold text-[#181A2A]">
              All Blog Post
            </h1>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="flex justify-between gap-5 flex-wrap w-full">
              {articles.map((article) => {
                return (
                  <Link href={`/blog/${article.id}`}>
                    <BlogAllPostCard
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
