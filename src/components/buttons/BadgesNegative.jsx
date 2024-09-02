export const BadgesNegative = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-start gap-4">
      <div className="flex items-center justify-center px-[10px] py-1 rounded-md bg-[#4b6bfb08]">
        <p className="font-workSans xl:text-sm lg:text-xs font-medium text-[#4B6BFB]">
          {text}
        </p>
      </div>{" "}
    </div>
  );
};
