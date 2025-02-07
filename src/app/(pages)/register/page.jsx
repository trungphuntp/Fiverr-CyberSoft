import ReduxProvider from "@/app/components/ReduxProvider/page";
import FormRegister from "./components/FormRegister";
import MessageProvider from "@/app/components/MessageProvider/page";

const RegisterPage = () => {
    return (
        <main className="registerMain pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)]">
            <div className="container flex items-center justify-center">
                <section className="registerContent">
                    <div className="registerContent__register">
                        <h1 className="registerContent__register-title">Register to Fiverr</h1>
                        <div className="registerContent__register-form">
                            <ReduxProvider>
                                <MessageProvider>
                                    <FormRegister />
                                </MessageProvider>
                            </ReduxProvider>
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
