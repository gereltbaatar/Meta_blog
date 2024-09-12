import { useEffect, useState } from "react";
import { Footer, Header, Menu } from "../parts";

const MainLayout = ({ children }) => {
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
      {children}
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

export default MainLayout;
