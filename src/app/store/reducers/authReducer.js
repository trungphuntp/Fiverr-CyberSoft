import { loginAction, registerActon } from "@/app/actions/AuthActions";
import { getUserById } from "@/app/actions/UserActions";
import { STORAGE } from "@/app/constants/storage";
import { formatDate } from "@/app/utils/format";
import { methodToken } from "@/app/utils/Token";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleSetMessage } from "./messageReducer";
import { getMyHiredWork } from "@/app/actions/HireWorkActions";

const initialState = {
    loading: {
        login: false,
        register: false,
        profile: false,
        booking: false,
    },
    profile: null,
};

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        handleSetProfile: (state, action) => {
            state.profile = action.payload;
        },
        handleLogout: (state, action) => {
            state.profile = null;
            methodToken.remove(STORAGE.token);
            methodToken.remove(STORAGE.idUser);
        },
    },
    // extra reducer để nhận extra function
    extraReducers: (builder) => {
        // profile
        builder.addCase(handleGetProfile.fulfilled, (state, action) => {
            state.profile = { ...action.payload, bookingJob: [] };
            state.loading.profile = false;
        });
        builder.addCase(handleGetProfile.rejected, (state, action) => {
            state.loading.profile = false;
        });
        builder.addCase(handleGetProfile.pending, (state, action) => {
            state.loading.profile = true;
        });

        // booking
        builder.addCase(handleGetBooking.fulfilled, (state, action) => {
            state.profile = { ...state.profile, bookingJob: action.payload };
            state.loading.booking = false;
        });
        builder.addCase(handleGetBooking.rejected, (state, action) => {
            state.loading.booking = false;
        });
        builder.addCase(handleGetBooking.pending, (state, action) => {
            state.loading.booking = true;
        });

        // login
        builder.addCase(handleLogin.fulfilled, (state, action) => {
            state.loading.login = false;
        });
        builder.addCase(handleLogin.rejected, (state, action) => {
            state.loading.login = false;
        });
        builder.addCase(handleLogin.pending, (state, action) => {
            state.loading.login = true;
        });

        // register
        builder.addCase(handleRegister.fulfilled, (state, action) => {
            state.loading.register = false;
        });
        builder.addCase(handleRegister.rejected, (state, action) => {
            state.loading.register = false;
        });
        builder.addCase(handleRegister.pending, (state, action) => {
            state.loading.register = true;
        });
    },
});

export const { handleSetProfile, handleLogout } = authSlice.actions;
const { reducer: authReducer } = authSlice;
export default authReducer;

// =================== async THUNK API ===================
// handle login
export const handleLogin = createAsyncThunk("auth/handleLogin", async (dataLogin, thunkAPI) => {
    try {
        // payload
        const { email, password } = dataLogin || {};
        const payload = {
            email: email || "",
            password: password || "",
        };
        // call api
        const res = await loginAction(payload);
        const { token } = res || {};

        if (!!res?.user?.id) {
            thunkAPI.dispatch(handleGetProfile(res.user.id));
            thunkAPI.dispatch(handleSetMessage(["Login success!", "success"]));
            thunkAPI.dispatch(handleGetBooking());

            // set id token
            methodToken.set(STORAGE.idUser, res.user.id);
            // set token vào cookies
            if (!!token) {
                methodToken.set(STORAGE.token, token);
            }
            return res;
        } else {
            thunkAPI.dispatch(handleSetMessage(["Email or Password does not exist!", "error"]));
            throw res;
        }
    } catch (error) {
        const errorsInfor = error?.response?.data;
        return thunkAPI.rejectWithValue(errorsInfor);
    }
});

// handle register
export const handleRegister = createAsyncThunk(
    "auth/handleRegister",
    async (registerData, thunkAPI) => {
        try {
            // payload
            const { email, password, gender, name, phone } = registerData || {};
            const genderPayload = gender === "male" ? true : false;

            const payload = {
                name: name?.toLowerCase().trim() || "",
                email: email.toLowerCase().trim() || "",
                password: password || "",
                phone: phone.trim() || "",
                birthday: formatDate("1/1/2000"),
                gender: genderPayload,
                role: "USER",
                skill: [],
                certification: [],
            };

            const res = await registerActon(payload);

            if (!!res?.email) {
                thunkAPI.dispatch(handleSetMessage(["Register success!", "success"]));
                thunkAPI.dispatch(
                    handleLogin({
                        email: email,
                        password: password,
                    })
                );
                return res;
            } else {
                throw res;
            }
        } catch (error) {
            thunkAPI.dispatch(handleSetMessage(["Email already exists!", "error"]));
            const errorsInfor = error?.response?.data;
            return thunkAPI.rejectWithValue(errorsInfor);
        }
    }
);

// handle get profile
export const handleGetProfile = createAsyncThunk(
    "auth/handleGetProfile",
    async (idData, thunkAPI) => {
        try {
            const res = await getUserById(idData);
            if (!!res?.id) {
                return res;
            } else {
                throw res;
            }
        } catch (error) {
            const errorsInfor = error?.response?.data;
            return thunkAPI.rejectWithValue(errorsInfor);
        }
    }
);

// handle get booking
export const handleGetBooking = createAsyncThunk("auth/handleGetBooking", async (_, thunkAPI) => {
    try {
        const res = await getMyHiredWork();
        if (res?.length > 0) {
            return res;
        } else {
            return [];
        }
    } catch (error) {
        const errorsInfor = error?.response?.data;
        return thunkAPI.rejectWithValue(errorsInfor);
    }
});
