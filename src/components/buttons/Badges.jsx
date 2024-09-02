export const Badges = ({ text, classEdit }) => {
  return (
    <div className="flex flex-col justify-center items-start gap-4">
      <div
        className={`flex items-center justify-center ${classEdit} rounded-md bg-[#4B6BFB]`}
      >
        <p className="font-workSans xl:text-sm lg:text-xs font-medium text-[#ffffff]">
          {text}
        </p>
      </div>
    </div>
  );
};
