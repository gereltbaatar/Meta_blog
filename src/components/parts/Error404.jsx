import Link from "next/link";
import { Badges } from "../buttons";

export const Error404 = () => {
  return (
    <main className="">
      <div className="container m-auto mt-24">
        <div className="flex flex-col lg:px-20 px-4">
          <div className="flex items-center justify-center gap-10">
            <h1 className="flex justify-center items-center font-workSans font-normal not-italic text-7xl leading-[72px]">
              404
            </h1>
            <div className="h-[156px] border  border-[#E8E8EA]"></div>
            <div className="flex flex-col gap-5 justify-between py-2">
              <h2 className="font-workSans font-semibold not-italic text-2xl leading-10">
                Page Not Found
              </h2>
              <p className="font-workSans font-normal not-italic text-lg text-[#696A75] max-w-[400px]">
                We're sorry, This page is unknown or does not exist the page you
                are looking for.
              </p>
              <Link href={"./"}>
                <Badges
                  text={"Back To Home"}
                  classEdit={" py-[10px] px-4 hover:scale-[1.1]"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
