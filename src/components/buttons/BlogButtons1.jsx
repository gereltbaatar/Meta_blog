export const BlogButtonsSeeAll = () => {
  return (
    <button className="font-workSans font-bold not-italic text-xs leading-[25px] text-[#495057] hover:text-[#4B6BFB] hover:scale-[1.1]">
      See all
    </button>
  );
};

export const BlogButtonsDesign = ({ handleFilter }) => {
  return (
    <button
      className="font-workSans font-bold not-italic text-xs leading-[25px] text-[#495057] hover:text-[#4B6BFB] hover:scale-[1.1]"
      onClick={() => handleFilter("design")}
    >
      Design
    </button>
  );
};
export const BlogButtonsTravel = ({ handleFilter }) => {
  return (
    <button
      className="font-workSans font-bold not-italic text-xs leading-[25px] text-[#495057] hover:text-[#4B6BFB] hover:scale-[1.1]"
      onClick={() => handleFilter("travel")}
    >
      Travel
    </button>
  );
};
export const BlogButtonsFashion = ({ handleFilter }) => {
  return (
    <button
      className="font-workSans font-bold not-italic text-xs leading-[25px] text-[#495057] hover:text-[#4B6BFB] hover:scale-[1.1]"
      onClick={() => handleFilter("ui")}
    >
      Ui
    </button>
  );
};
export const BlogButtonsTechnology = ({ handleFilter }) => {
  return (
    <button
      className="font-workSans font-bold not-italic text-xs leading-[25px] text-[#495057] hover:text-[#4B6BFB] hover:scale-[1.1]"
      onClick={() => handleFilter("technology")}
    >
      Technology
    </button>
  );
};
export const BlogButtonsBranding = ({ handleFilter }) => {
  return (
    <button
      className="font-workSans font-bold not-italic text-xs leading-[25px] text-[#495057] hover:text-[#4B6BFB] hover:scale-[1.1]"
      onClick={() => handleFilter("coding")}
    >
      Coding
    </button>
  );
};
