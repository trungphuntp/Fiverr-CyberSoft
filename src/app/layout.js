import Footer from "./components/Footer/page";
import Header from "./components/Header/page";
import Navbar from "./components/Navbar/page";
import ProviderReactQuery from "./components/ProviderReactQuery/page";
import { NavContextProvider } from "./contexts/NavContext/page";
import "./globals.css";
import "./styles/main.scss";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
                />
                <link rel="icon" href="/favicon.svg" />
            </head>
            <body>
                <ProviderReactQuery>
                    <NavContextProvider>
                        <Header />
                        <Navbar />
                    </NavContextProvider>
                    {children}
                    <Footer />
                </ProviderReactQuery>
            </body>
        </html>
    );
}
