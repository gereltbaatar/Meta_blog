import { BadgesNegative } from "../buttons";

export const BlogAllPostCard = ({
  title,
  imgUrl,
  tag,
  userName,
  profile_image,
  date,
}) => {
  return (
    <div className="max-w-[392px] border border-solid border-[#E8E8EA] rounded-xl p-4 flex flex-col gap-4 hover:shadow-md hover:border-[rgb(207,207,207)]">
      <div className="h-[240px] max-w-[360px] rounded-md bg-cover bg-center bg-[#F4F4F5] ">
        <img src={`${imgUrl}`} alt="" className="h-full w-auto object-cover" />
      </div>
      <div className="flex flex-col gap-5 p-2">
        <div className="flex flex-col gap-4">
          <BadgesNegative text={tag} />
          <p className="font-workSans font-semibold not-italic text-2xl text-[#181A2A] leading-7 line-clamp-3">
            {title}
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex gap-3 items-center">
            <div className="rounded-[50%] bg-[#F4F4F5]">
              <img
                src={`${profile_image}`}
                alt=""
                className="w-9 h-9 rounded-[50%]"
              />
            </div>
            <p className="font-workSans font-medium not-italic text-base text-[#97989F]">
              {userName}
            </p>
          </div>
          <p className="font-workSans font-normal not-italic text-base text-[#97989F]">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};
