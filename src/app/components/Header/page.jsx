import HeaderMiddle from "./components/HeaderMiddle";
import HeaderTop from "./components/HeaderTop";

const Header = () => {
    return (
        <header className="header">
            <HeaderTop />
            <HeaderMiddle />
        </header>
    );
};

export default Header;
