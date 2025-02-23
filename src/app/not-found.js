"use client";
import Button from "./components/Button/page";
import PATH from "./constants/path";

const NotFound = () => {
    return (
        <main className="mainNotFound pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)]">
            <section className=" bg-gray-900 min-h-[500px] flex items-center justify-center">
                <div className="py-8 px-4 mx-auto max-w-screen-xl">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="font-[m700] text-7xl tracking-tight  text-[var(--primary-color)]">
                            404
                        </h1>
                        <p className=" text-3xl tracking-tight font-[m500] text-gray-900 md:text-4xl dark:text-white">
                            Something's missing.
                        </p>
                        <p className="mb-4 text-lg font-light text-gray-400 mt-4">
                            Sorry, we can't find that page. You'll find lots to explore on the home
                            page.
                        </p>
                        <Button linkIn={PATH.HOME} className="hover:opacity-80">
                            Back to Homepage
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NotFound;
