import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "",
    typeMessage: "success",
};

const messageSlice = createSlice({
    name: "messageReducer",
    initialState,
    reducers: {
        handleSetMessage: (state, action) => {
            const message = action.payload;
            if (!!action.payload) {
                state.message = message[0];
                state.typeMessage = message[1];
            } else {
                state.message = "";
                state.typeMessage = "success";
            }
        },
        handleResetMessage: (state, action) => {
            state.message = "";
            state.typeMessage = "success";
        },
    },
});

export const { handleSetMessage, handleResetMessage } = messageSlice.actions;
const { reducer: messageReducer } = messageSlice;
export default messageReducer;

// Cách xài message antd trong dự án
// bọc MessageProvider vào component muốn sử dụng (headerTop)
// thêm vào headerTop (component luôn luôn hiển thị) useEffect(() => {
//       if (!!message) {
//     switch (typeMessage) {
//         case "success":
//             messageAPI.success(message);
//             break;
//         case "error":
//             messageAPI.error(message);
//             break;
//         case "warning":
//             messageAPI.warning(message);
//             break;
//         default:
//             break;
//     }
//     dispatch(handleResetMessage());
// }
// }, [message]);

// ============== Dùng redux lưu lời thông báo ===============
// const { message } = useSelector((state) => state.message);
// dispatch(handleSetMessage("[{lời thông báo},{type thông báo (success, error, warning)}]"));
