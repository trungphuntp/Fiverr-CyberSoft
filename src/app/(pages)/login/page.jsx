import MessageProvider from "@/app/components/MessageProvider/page";
import ReduxProvider from "@/app/components/ReduxProvider/page";
import FormLogin from "./components/formLogin";

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
                        <div className="LoginContent__login-form">
                            <ReduxProvider>
                                <MessageProvider>
                                    <FormLogin />
                                </MessageProvider>
                            </ReduxProvider>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default LoginPage;
