import { Badges } from "../buttons";

export const TrendingPost = () => {
  return (
    <div
      className="flex items-end w-[290px] h-[320px] rounded-xl bg-cover bg-center"
      style={{
        backgroundImage: `url(./trending.png)`,
      }}
    >
      <div className=" flex flex-col gap-4 p-7">
        <Badges classEdit={"px-[10px] py-1"} text={"Technology"} />
        <p className="font-workSans not-italic font-semibold text-white xl:text-lg lg:text-[14px] lg:leading-5">
          The Impact of Technology on the Workplace: How Technology is Changing
        </p>
      </div>
    </div>
  );
};
