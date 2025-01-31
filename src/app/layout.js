import Footer from "./components/Footer/page";
import Header from "./components/Header/page";
import Navbar from "./components/Navbar/page";
import ProviderReactQuery from "./components/ProviderReactQuery/page";
import { AccordionProvider } from "./contexts/AccordionContext/page";
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
                    <AccordionProvider>
                        <NavContextProvider>
                            <Header />
                            <Navbar />
                        </NavContextProvider>
                        {children}
                        <Footer />
                    </AccordionProvider>
                </ProviderReactQuery>
            </body>
        </html>
    );
}
