import MessageProvider from "../MessageProvider/page";
import HeaderMiddle from "./components/HeaderMiddle";
import HeaderTop from "./components/HeaderTop";

const Header = () => {
    return (
        <header className="header">
            <MessageProvider>
                <HeaderTop />
            </MessageProvider>
            <HeaderMiddle />
        </header>
    );
};

export default Header;
