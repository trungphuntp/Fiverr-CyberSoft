import { Suspense } from "react";
import dynamic from "next/dynamic";
import ComponentLoading from "@/app/components/Loading/page";
import MessageProvider from "@/app/components/MessageProvider/page";

const ReduxProvider = dynamic(() => import("@/app/components/ReduxProvider/page"), {
    suspense: true,
});
const FormLogin = dynamic(() => import("./components/formLogin"), {
    suspense: true,
});

const LoginPage = () => {
    return (
        <main className="loginMain pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)]">
            <div className="container flex items-center justify-center">
                <section className="LoginContent">
                    <div className="LoginContent__img">
                        <img src="/avatar_login.svg" alt="avatar login" />
                    </div>
                    <div className="LoginContent__login">
                        <h1 className="LoginContent__login-title">Sign In to Fiverr</h1>
                        <div className="LoginContent__login-form relative">
                            <Suspense fallback={<ComponentLoading />}>
                                <ReduxProvider>
                                    <MessageProvider>
                                        <FormLogin />
                                    </MessageProvider>
                                </ReduxProvider>
                            </Suspense>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default LoginPage;
