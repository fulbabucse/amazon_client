import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { baseURL } from "../../utils/baseURL";

const initialState = {
  user: { email: "", name: "", photoURL: "" },
  isLoading: true,
  error: "",
  isAdmin: false,
};

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ email, password }) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res.user.email;
  }
);

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async ({ email, password }) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user.email;
  }
);

export const getUser = createAsyncThunk("auth/getUser", async (email) => {
  const res = await fetch(`${baseURL}/users?email=${email}`);
  const user = await res.json();

  if (user?.status) {
    return user;
  }
  return email;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user.email = payload;
      state.isLoading = false;
    },
    logOut: (state) => {
      state.user = {};
    },
    removeLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, action) => {
        state.isLoading = true;
        state.user.email = "";
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.email = payload;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user.email = "";
        state.error = action.error.message;
      })
      .addCase(signInUser.pending, (state, action) => {
        state.isLoading = true;
        state.user.email = "";
        state.error = "";
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.email = payload;
        state.error = "";
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user.email = "";
        state.error = action.error.message;
      })
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true;
        state.user = {};
        state.error = "";
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        if (payload.status) {
          state.user = payload.user;
        } else {
          state.user.email = payload;
        }
        state.isLoading = false;
        state.error = "";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = {};
        state.error = action.error.message;
      });
  },
});

export const { setUser, logOut, removeLoading } = authSlice.actions;

export default authSlice.reducer;
