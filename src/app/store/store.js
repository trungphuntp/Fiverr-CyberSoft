import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

const store = configureStore({
    reducer: {
        profile: authReducer,
    },
});
export default store;
