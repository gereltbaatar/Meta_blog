import { BlogAllPostCard } from "../component";

export const BlogAll = () => {
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
              <BlogAllPostCard text={"Design"} />
              <BlogAllPostCard text={"Design"} />
              <BlogAllPostCard text={"Design"} />
              <BlogAllPostCard text={"Design"} />
              <BlogAllPostCard text={"Design"} />
              <BlogAllPostCard text={"Design"} />
              <BlogAllPostCard text={"Design"} />
              <BlogAllPostCard text={"Design"} />
              <BlogAllPostCard text={"Design"} />
              <BlogAllPostCard text={"Design"} />
              <BlogAllPostCard text={"Design"} />
              <BlogAllPostCard text={"Design"} />
            </div>
            <button>
              <div className="px-5 py-3 border border-[#696a754d] rounded-md">
                <p className="font-workSans font-medium not-italic text-base text-[#696A75]">
                  Load More
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
