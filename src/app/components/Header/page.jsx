"use client";
import { useNavContext } from "@/app/contexts/NavContext/page";
import MessageProvider from "../MessageProvider/page";
import HeaderMiddle from "./components/HeaderMiddle";
import HeaderTop from "./components/HeaderTop";

const Header = () => {
  const { refHeader } = useNavContext();
  return (
    <header className="header" ref={refHeader}>
      <MessageProvider>
        <HeaderTop />
      </MessageProvider>
      <HeaderMiddle />
    </header>
  );
};

export default Header;
