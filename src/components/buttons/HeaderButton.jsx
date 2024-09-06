export const HeaderButton = ({ text }) => {
  return (
    <button>
      <p className="font-workSans text-base not-italic font-normal hover:text-[#4B6BFB] hover:scale-[1.1]">
        {text}
      </p>
    </button>
  );
};
