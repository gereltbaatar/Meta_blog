export const HeaderButton = ({ text, pathname, path }) => {
  return (
    <div>
      <p
        className={`font-workSans text-base not-italic font-normal hover:text-[#4B6BFB] ${
          pathname === path ? "text-[#4B6BFB]" : "text-black"
        } hover:scale-[1.1]`}
      >
        {text}
      </p>
    </div>
  );
};
