import Link from "next/link";
import { BolgButtons, BlogButtonsYellow } from "../buttons";
import { BlogPostCard } from "../component";

export const BlogPost = () => {
  return (
    <main className="">
      <div className="container m-auto">
        <div className="flex flex-col gap-8 px-20">
          <div className="flex flex-col gap-8">
            <h1 className="font-workSans text-2xl not-italic font-bold text-[#181A2A]">
              All Blog Post
            </h1>
            <div className="flex justify-between">
              <div className="flex  items-center gap-5">
                <BlogButtonsYellow text={"All"} />
                <BolgButtons text={"Design"} />
                <BolgButtons text={"Travel"} />
                <BolgButtons text={"Fashion"} />
                <BolgButtons text={"Technology"} />
                <BolgButtons text={"Branding"} />
              </div>
              <Link href={"blog"}>
                <BolgButtons text={"See all"} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="flex gap-5 justify-between items-center flex-wrap w-full">
              <BlogPostCard text={"Design"} />
              <BlogPostCard text={"Design"} />
              <BlogPostCard text={"Design"} />
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
