import { Suspense } from "react";
import dynamic from "next/dynamic";
import ComponentLoading from "@/app/components/Loading/page";

const Schero = dynamic(() => import("./(components)/schero"), {
    suspense: true,
});
const Sctrustby = dynamic(() => import("./(components)/sctrustby"), {
    suspense: true,
});
const Scpopular = dynamic(() => import("./(components)/scpopular"), {
    suspense: true,
});
const Scfreelance = dynamic(() => import("./(components)/scfreelance"), {
    suspense: true,
});
const Sctestimonials = dynamic(() => import("./(components)/sctestimonials"), {
    suspense: true,
});
const Scexplore = dynamic(() => import("./(components)/scexplore"), {
    suspense: true,
});

const HomePage = () => {
    return (
        <main className="mainHome relative">
            {/* section hero */}
            <Suspense fallback={<ComponentLoading />}>
                <Schero />  
            </Suspense>

            {/* section trustby */}
            <Suspense fallback={<ComponentLoading />}>
                <Sctrustby />
            </Suspense>

            {/* section popular */}
            <Suspense fallback={<ComponentLoading />}>
                <Scpopular />
            </Suspense>

            {/* section freelance */}
            <Suspense fallback={<ComponentLoading />}>
                <Scfreelance />
            </Suspense>

            {/* section testimonials */}
            <Suspense fallback={<ComponentLoading />}>
                <Sctestimonials />
            </Suspense>

            {/* section explore */}
            <Suspense fallback={<ComponentLoading />}>
                <Scexplore />
            </Suspense>
        </main>
    );
};

export default HomePage;
