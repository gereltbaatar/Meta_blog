import { BadgesNegative } from "../buttons";

export const BlogAllPostCard = ({
  title,
  imgUrl,
  tag,
  userName,
  profile_image,
  date,
}) => {
  const generatMonth = (month) => {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  };

  return (
    <div className="max-w-[392px] border border-solid border-[#E8E8EA] rounded-xl p-4 flex flex-col gap-4">
      <div
        className="h-[240px] max-w-[360px] rounded-md bg-cover bg-center bg-[#F4F4F5] "
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
        <div className="flex gap-5 items-center">
          <div className="flex gap-3 items-center">
            <div
              className="w-9 h-9 rounded-[50%] bg-cover bg-center bg-[#F4F4F5]"
              style={{
                backgroundImage: `url(${profile_image})`,
              }}
            ></div>
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
