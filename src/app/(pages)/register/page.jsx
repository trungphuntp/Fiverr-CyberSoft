import { Suspense } from "react";
import dynamic from "next/dynamic";
import ComponentLoading from "@/app/components/Loading/page";

// Lazy load các components
const ReduxProvider = dynamic(() => import("@/app/components/ReduxProvider/page"), {
    suspense: true,
});
const MessageProvider = dynamic(() => import("@/app/components/MessageProvider/page"), {
    suspense: true,
});
const FormRegister = dynamic(() => import("./components/FormRegister"), {
    suspense: true,
});

const RegisterPage = () => {
    return (
        <main className="registerMain pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)]">
            <div className="container flex items-center justify-center">
                <section className="registerContent">
                    <div className="registerContent__register">
                        <h1 className="registerContent__register-title">Register to Fiverr</h1>
                        <div className="registerContent__register-form relative">
                            <Suspense fallback={<ComponentLoading />}>
                                <ReduxProvider>
                                    <Suspense fallback={<ComponentLoading />}>
                                        <MessageProvider>
                                            <Suspense fallback={<ComponentLoading />}>
                                                <FormRegister />
                                            </Suspense>
                                        </MessageProvider>
                                    </Suspense>
                                </ReduxProvider>
                            </Suspense>
                        </div>
                    </div>
                    <div className="registerContent__img">
                        <img src="/register_background.svg" alt="avatar register" />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default RegisterPage;
