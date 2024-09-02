export const Inputs = ({ placeholder, classEdit }) => {
  return (
    <input
      type="text "
      className={`p-[14px] pl-5 rounded-[5px] border border-[#DCDDDF] bg-white font-workSans font-normal not-italic text-base text-[#97989F] h-[38px] w-full ${classEdit} outline-none`}
      placeholder={placeholder}
    />
  );
};
