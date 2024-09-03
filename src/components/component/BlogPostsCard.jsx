import { BadgesNegative } from "../buttons/BadgesNegative";

export const BlogPostCard = ({ title, imgUrl, tag }) => {
  return (
    <div className="max-w-[392px] border border-solid border-[#E8E8EA]  rounded-xl p-4 flex flex-col gap-4">
      <div
        className="h-[240px] max-w-[360px] rounded-md bg-cover bg-center bg-[#F4F4F5]"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
      <div className="flex flex-col gap-5 p-2">
        <div className="flex flex-col gap-4">
          <BadgesNegative text={tag} />

          <p className="font-workSans font-semibold not-italic text-2xl text-[#181A2A] leading-7 flex flex-wrap">
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
