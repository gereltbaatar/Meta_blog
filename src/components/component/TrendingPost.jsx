import { Badges } from "../buttons";

export const TrendingPost = ({ imgUrl, tag, description }) => {
  return (
    <div
      className="flex items-end w-[290px] h-[320px] rounded-xl bg-cover bg-center  bg-[#14162466] bg-blend-soft-light "
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className=" flex flex-col gap-4 p-7">
        <Badges classEdit={"px-[10px] py-1"} text={tag} />
        <p className="font-workSans not-italic font-semibold text-white xl:text-lg lg:text-[14px] lg:leading-5 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};
