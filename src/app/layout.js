// src/layouts/RootLayout.jsx
import { Suspense } from "react";
import Footer from "./components/Footer/page";
import Header from "./components/Header/page";
import Navbar from "./components/Navbar/page";
import ProviderReactQuery from "./components/ProviderReactQuery/page";
import ReduxProvider from "./components/ReduxProvider/page";
import { AccordionProvider } from "./contexts/AccordionContext/page";
import { NavContextProvider } from "./contexts/NavContext/page";

import "./globals.css";
import "./styles/main.scss";

export const metadata = {
    title: {
        default: "Fiverr Cybersoft",
        template: "%s | Fiverr Cybersoft",
    },
    description: "A modern web application built with Next.js App Router, React Query, and Redux.",
    applicationName: "Fiverr Cybersoft",
    referrer: "origin-when-cross-origin",
    keywords: [
        "Next.js",
        "React",
        "App Router",
        "React Query",
        "Redux",
        "Frontend",
        "Web Application",
        "Fiverr",
        "Cybersoft",
        "fiverr Cybersoft",
    ],
    authors: [{ name: "PhuNguyen/Cybersoft", url: "https://github.com/trungphuntp" }],
    creator: "PhuNguyen/Cybersoft",
    publisher: "PhuNguyen/Cybersoft",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: "/favicon.svg",
        // apple: "/favicon.svg", // Icon cho Apple devices
        // shortcut:  "/favicon.svg", // Icon cho shortcut trên desktop
    },
    openGraph: {
        title: "Fiverr Cybersoft",
        description:
            "A modern web application built with Next.js App Router, React Query, and Redux.",
        url: "https://fiverr-cyber-soft.vercel.app",
        siteName: "Fiverr Cybersoft",
        images: [
            {
                url: "https://res.cloudinary.com/dasxdynmm/image/upload/v1741617556/Fiverr_Cybersoft_Image_fcym8d.png",
                width: 1200,
                height: 630,
                alt: "Fiverr Cybersoft Image",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fiverr Cybersoft",
        description:
            "A modern web application built with Next.js App Router, React Query, and Redux.",
        siteId: "@your_twitter_handle", // Thay bằng Twitter handle của bạn
        creator: "@your_twitter_handle",
        creatorId: "your_twitter_id",
        images: [
            "https://res.cloudinary.com/dasxdynmm/image/upload/v1741617556/Fiverr_Cybersoft_Image_fcym8d.png",
        ],
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ProviderReactQuery>
                    <Suspense>
                        <AccordionProvider>
                            <ReduxProvider>
                                <NavContextProvider>
                                    {/* <UserProvider> */}
                                    <Header />
                                    <Navbar />
                                </NavContextProvider>
                                {children}
                                <Footer />
                                {/* </UserProvider> */}
                            </ReduxProvider>
                        </AccordionProvider>
                    </Suspense>
                </ProviderReactQuery>
            </body>
        </html>
    );
}
