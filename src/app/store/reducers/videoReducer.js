import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showVideo: false,
    sourceVideo: "",
};

const videoSlice = createSlice({
    name: "videoSlice",
    initialState,
    reducers: {
        handleShowVideo: (state, action) => {
            state.showVideo = true;
            state.sourceVideo = action.payload;
        },
        handleCloseVideo: (state, action) => {
            state.showVideo = false;
            state.sourceVideo = "";
        },
    },
});

export const { handleShowVideo, handleCloseVideo } = videoSlice.actions;
const { reducer: videoReducer } = videoSlice;
export default videoReducer;
