import { BadgesNegative } from "../buttons/BadgesNegative";

export const BlogPostCard = ({ title, imgUrl, tag }) => {
  return (
    <div className="max-w-[392px] max-h-[498px] h-full border border-solid border-[#E8E8EA]  rounded-xl p-4 flex flex-col gap-4 hover:shadow-md hover:border-[rgb(207,207,207)]">
      <div className="h-[240px] max-w-[360px] rounded-md bg-[#F4F4F5] ">
        <img src={`${imgUrl}`} alt="" className="h-full w-auto object-cover " />
      </div>
      <div className="flex flex-col gap-5 p-2">
        <div className="flex flex-col gap-4">
          <BadgesNegative text={tag} />

          <p className="font-workSans font-semibold not-italic text-2xl text-[#181A2A] leading-7  line-clamp-3">
            {title}
          </p>
        </div>
        <p className="font-workSans font-normal not-italic text-base text-[#97989F]">
          August 20, 2022
        </p>
      </div>
    </div>
  );
};
