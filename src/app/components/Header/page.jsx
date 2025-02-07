import ReduxProvider from "../ReduxProvider/page";
import HeaderMiddle from "./components/HeaderMiddle";
import HeaderTop from "./components/HeaderTop";

const Header = () => {
    return (
        <header className="header">
            <ReduxProvider>
                <HeaderTop />
            </ReduxProvider>
            <HeaderMiddle />
        </header>
    );
};

export default Header;
