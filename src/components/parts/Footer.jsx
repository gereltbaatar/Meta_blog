import Link from "next/link";
import { FooterHeadButtons, HeaderButton } from "../buttons";
import { GmailNumber, GmailPhone } from "../component";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  Logo,
  TwitterIcon,
} from "../svg";

export const Footer = () => {
  return (
    <main className="border border-[#E8E8EA] bg-[#F6F6F7] ">
      <div className="container m-auto ">
        <div className="px-20 pt-16 flex flex-col gap-6">
          <div className="flex justify-between pr-32">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3 max-w-[280px]">
                <h1 className="font-workSans font-semibold not-italic text-lg text-[#181A2A]">
                  About
                </h1>
                <p className="font-workSans font-normal not-italic text-base text-[#696A75] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <GmailPhone text={"Email :"} />
                  <GmailNumber text={"info@jstemplate.net"} />
                </div>
                <div className="flex gap-2">
                  <GmailPhone text={"Phone :"} />
                  <GmailNumber text={"880 123 456 789"} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 max-w-[280px]">
              <Link href={"/"}>
                <FooterHeadButtons text={"Home"} />
              </Link>
              <Link href={"/blog"}>
                <FooterHeadButtons text={"Blog"} />
              </Link>
              <Link href={"/contact"}>
                <FooterHeadButtons text={"Contact"} />
              </Link>
            </div>
            <div className="flex gap-5 max-w-[280px]">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </div>
          <div className="">
            <div className="border-[0.5px] border-[#DCDDDF]"></div>
            <div className="p-8 flex justify-between">
              <div className="flex gap-[10px]">
                <Logo />
                <div className="">
                  <div className="flex">
                    <p className="font-plusJakartaSans font-normal not-italic text-xl text-[#141624]">
                      Meta
                    </p>
                    <p className="font-plusJakartaSans font-extrabold not-italic text-xl text-[#141624]">
                      Blog
                    </p>
                  </div>
                  <p className="font-workSans font-normal not-italic text-base text-[#3B3C4A]">
                    © All Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FooterHeadButtons text={"Terms of Use"} />
                <div className="w-[1px] h-6 bg-[#E8E8EA]"></div>
                <FooterHeadButtons text={"Privacy Policy"} />
                <div className="w-[1px] h-6 bg-[#E8E8EA]"></div>
                <FooterHeadButtons text={"Cookie Policy"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
