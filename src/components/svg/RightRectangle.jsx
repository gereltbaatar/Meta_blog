export const RightRectangle = ({ nestSlide }) => {
  return (
    <button
      onClick={nestSlide}
      className="border border-solid border-black rounded-md flex items-center justify-center xl:w-10 xl:h-10 lg:w-7 lg:h-7 w-7 h-7 hover:border-[#4B6BFB]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="17"
        viewBox="0 0 9 17"
        fill="none"
      >
        <path
          d="M1 1L8.5 8.5L1 16"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};
