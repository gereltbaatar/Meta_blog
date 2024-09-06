export const BlogButtonsYellow = ({ handleFilter }) => {
  return (
    <button
      className="font-workSans font-bold not-italic text-xs leading-[25px] text-[#D4A373] hover:text-[#4B6BFB]"
      onClick={() => handleFilter("")}
    >
      All
    </button>
  );
};
