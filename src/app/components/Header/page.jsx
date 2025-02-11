import MessageProvider from "../MessageProvider/page";
import ReduxProvider from "../ReduxProvider/page";
import HeaderMiddle from "./components/HeaderMiddle";
import HeaderTop from "./components/HeaderTop";

const Header = () => {
    return (
        <header className="header">
            <ReduxProvider>
                <MessageProvider>
                    <HeaderTop />
                </MessageProvider>
            </ReduxProvider>
            <HeaderMiddle />
        </header>
    );
};

export default Header;
