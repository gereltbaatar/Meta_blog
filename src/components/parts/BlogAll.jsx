import { BlogAllPostCard } from "../component";

export const BlogAll = ({ articles }) => {
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
              {articles.map((articl) => {
                return (
                  <BlogAllPostCard
                    title={articl.description}
                    imgUrl={articl.cover_image}
                    tag={articl.tag_list[0]}
                    userName={articl.user.name}
                    profile_image={articl.user.profile_image}
                    date={articl.created_at}
                  />
                );
              })}
            </div>
            <button>
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
