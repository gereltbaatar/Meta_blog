import { Badges } from "../buttons";
import { LiftRectangle, RightRectangle } from "../svg";

export const Contents = () => {
  return (
    <main className="">
      <div className="lg:flex lg:justify-center">
        <div className="lg:container lg:m-auto">
          <div className="px-20">
            <div className="">
              <div
                className="flex items-end justify-start min-h-[350px] lg:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[600px] w-auto rounded-xl bg-cover bg-center bg-[#F4F4F5]"
                style={{
                  backgroundImage: `url(./cobtentImage.jpeg)`,
                }}
              >
                <div className="flex flex-col items-start border border-solid rounded-xl border-[#E8E8EA] bg-white 2xl:w-[600px] lg:w-[350px] 2xl:p-10 lg:p-5 2xl:gap-6 lg:gap-3 m-3">
                  <div className="flex flex-col 2xl:gap-4 lg:gap-2">
                    <Badges classEdit={"px-[10px] py-1"} text={"Technology"} />
                    <h1 className="font-workSans text-[#181A2A] font-semibold 2xl:text-4xl lg:text-2xl ">
                      Grid system for better Design User Interface
                    </h1>
                  </div>
                  <p className="font-workSans text-[#97989F] text-base font-normal  ">
                    August 20, 2022
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-[10px] mt-[10px]">
                <LiftRectangle />
                <RightRectangle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
