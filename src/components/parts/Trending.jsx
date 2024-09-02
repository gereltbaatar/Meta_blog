import { TrendingPost } from "../component";

export const Trending = () => {
  return (
    <main>
      <div className="container m-auto">
        <div className="px-20">
          <div className="flex flex-col gap-8">
            <h1 className="font-workSans text-2xl not-italic font-bold text-[#181A2A]">
              Trending
            </h1>
            <div className="flex justify-between gap-5">
              <TrendingPost />
              <TrendingPost />
              <TrendingPost />
              <TrendingPost />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
