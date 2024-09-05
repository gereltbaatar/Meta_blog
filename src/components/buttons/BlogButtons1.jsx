export const BlogButtonsSeeAll = () => {
  return (
    <button className="font-workSans font-bold not-italic text-xs leading-[25px] text-[#495057] hover:text-[#4B6BFB]">
      See all
    </button>
  );
};

export const BlogButtonsDesign = ({ handleFilter }) => {
  return (
    <button
      className="font-workSans font-bold not-italic text-xs leading-[25px] text-[#495057] hover:text-[#4B6BFB]"
      onClick={() => handleFilter("design")}
    >
      Design
    </button>
  );
};
export const BlogButtonsTravel = ({ handleFilter }) => {
  return (
    <button
      className="font-workSans font-bold not-italic text-xs leading-[25px] text-[#495057] hover:text-[#4B6BFB]"
      onClick={() => handleFilter("travel")}
    >
      Travel
    </button>
  );
};
export const BlogButtonsFashion = ({ handleFilter }) => {
  return (
    <button
      className="font-workSans font-bold not-italic text-xs leading-[25px] text-[#495057] hover:text-[#4B6BFB]"
      onClick={() => handleFilter("fashion")}
    >
      Fashion
    </button>
  );
};
export const BlogButtonsTechnology = ({ handleFilter }) => {
  return (
    <button
      className="font-workSans font-bold not-italic text-xs leading-[25px] text-[#495057] hover:text-[#4B6BFB]"
      onClick={() => handleFilter("technology")}
    >
      Technology
    </button>
  );
};
export const BlogButtonsBranding = ({ handleFilter }) => {
  return (
    <button
      className="font-workSans font-bold not-italic text-xs leading-[25px] text-[#495057] hover:text-[#4B6BFB]"
      onClick={() => handleFilter("coding")}
    >
      Coding
    </button>
  );
};
