import { Error404, Footer, Header, Menu } from "../parts";
import { useState } from "react";

export const ErrorPage = () => {
  const [posRight, setPosRight] = useState(false);
  const [zIndex, setZIndex] = useState(false);
  const [menuHidden, setMenuHidden] = useState(false);

  const handleClickMenu = () => {
    setPosRight(!posRight);
    setZIndex(!zIndex);
    setMenuHidden(!menuHidden);
  };

  return (
    <main className="w-full h-screen flex flex-col justify-between">
      <div></div>
      <Header handleClickMenu={handleClickMenu} />
      <Error404 />
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
