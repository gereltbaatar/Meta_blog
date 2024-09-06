import { Badges } from "../buttons";
import { Inputs } from "../component";

export const ContactUs = () => {
  return (
    <main className="">
      <div className="container m-auto mt-24">
        <div className="px-20 flex flex-col items-center">
          <div className="flex flex-col items-center justify-center gap-5 pt-[14px] px-[10px]">
            <div className="max-w-[625px] flex flex-col items-start gap-5">
              <h1 className="font-workSans font-semibold text-4xl">
                Contact Us
              </h1>
              <p className="font-plusJakartaSans font-normal not-italic text-base text-[#696A75]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
            <div className="flex gap-[50px] py-[10px]">
              <div className="flex flex-col gap-[10px] p-4 border border-[#E8E8EA] rounded-xl w-[300px]">
                <h2 className="font-workSans font-semibold not-italic text-2xl leading-10 ">
                  Address
                </h2>
                <p className="font-workSans font-normal not-italic text-lg text-[#696A75]">
                  1328 Oak Ridge Drive, Saint Louis, Missouri
                </p>
              </div>
              <div className="flex flex-col gap-[10px] p-4 border border-[#E8E8EA] rounded-xl w-[300px]">
                <h2 className="font-workSans font-semibold not-italic text-2xl leading-10 ">
                  Contact
                </h2>
                <p className="font-workSans font-normal not-italic text-lg text-[#696A75]">
                  313-332-8662 info@email.com
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 pl-[35px] pt-[29px] pr-[130px] pb-[26px] bg-[#F6F6F7] rounded-[10px] w-full">
              <h1 className="font-workSans font-semibold not-italic text-lg">
                Leave a Message
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex gap-5 justify-between">
                  <Inputs
                    classEdit={"w-[225px] h-[38px]"}
                    placeholder={"Your Name"}
                  />
                  <Inputs
                    classEdit={"w-[225px] h-[38px]"}
                    placeholder={"Your Email"}
                  />
                </div>
                <Inputs classEdit={"w-full h-[38px]"} placeholder={"Subject"} />
                <div className="h-auto bg-white rounded-[5px] border border-[#DCDDDF] p-[14px] pl-5 ">
                  <textarea
                    type="text"
                    className="flex items-start justify-start font-workSans font-normal not-italic text-base text-[#97989F] h-full w-full pb-[100px] outline-none flex-wrap"
                    placeholder="Write a message"
                  />
                </div>
                <Badges
                  classEdit={"py-[10px] px-4 hover:scale-[1.1]"}
                  text={"Send Message"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
