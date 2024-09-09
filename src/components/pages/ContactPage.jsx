import { ContactUs, Footer, Header, Menu } from "../parts";
import { useState } from "react";

export const ContactPage = () => {
  const [posRight, setPosRight] = useState(false);
  const [zIndex, setZIndex] = useState(false);
  const [menuHidden, setMenuHidden] = useState(false);

  const handleClickMenu = () => {
    setPosRight(!posRight);
    setZIndex(!zIndex);
    setMenuHidden(!menuHidden);
  };

  return (
    <main className="flex flex-col gap-[100px]">
      <Header handleClickMenu={handleClickMenu} />
      <ContactUs />
      <Footer />
      <Menu
        posRight={posRight}
        zIndex={zIndex}
        menuHidden={menuHidden}
        handleClickMenu={handleClickMenu}
      />
    </main>
  );
};
