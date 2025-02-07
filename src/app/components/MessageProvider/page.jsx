"use client";
import { message } from "antd";
import { createContext, useContext, useEffect } from "react";

const MessageContext = createContext();

const MessageProvider = ({ children }) => {
    // Cấu hình message
    useEffect(() => {
        message.config({
            top: 100,
            duration: 6,
            maxCount: 3,
        });
    }, []);

    const [messageAPI, contextHolder] = message.useMessage();

    // CÁCH DÙNG
    // Bao provider vào component muốn dùng (client component)
    // dùng messageAPI để thực hiện toast

    return (
        <>
            <MessageContext.Provider value={{ messageAPI }}>
                {contextHolder}
                {children}
            </MessageContext.Provider>
        </>
    );
};

export default MessageProvider;
export const useMessageContext = () => useContext(MessageContext);
