import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BACKEND_API_ENDPOINT = import.meta.env.VITE_BASE_URL;
console.log(BACKEND_API_ENDPOINT);
const initialState = {
  postStatus: "idle",
  loading: false,
  error: null,
  userData: {},
  posts: [],
  authStatus: false,
};

export const userLogin = createAsyncThunk("login", async (data) => {
  try {
    console.log(data);
    const response = await axios.post(
      `${BACKEND_API_ENDPOINT}/user/login`,
      data,
      {
        withCredentials: true,
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
});

export const createUser = createAsyncThunk("register", async (data) => {
  try {
    const response = await axios.post(
      `${BACKEND_API_ENDPOINT}/user/register`,
      data,
      { withCredentials: true }
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

export const createPost = createAsyncThunk("createPost", async (data) => {
  try {
    const response = await axios.post(
      `${BACKEND_API_ENDPOINT}/post/create-post`,
      data,
      {
        withCredentials: true,
      }
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

export const getCurrentUser = createAsyncThunk("currentUser", async () => {
  try {
    const response = await axios.get(
      `${BACKEND_API_ENDPOINT}/user/current-user`,
      {
        withCredentials: true,
      }
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

export const getAllPosts = createAsyncThunk("allPosts", async () => {
  try {
    const response = await axios.get(`${BACKEND_API_ENDPOINT}/post/all-posts`, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.data.docs;
  } catch (error) {
    throw error;
  }
});

export const deletePost = createAsyncThunk("deletePost", async (postId) => {
  try {
    await axios.post(
      `${BACKEND_API_ENDPOINT}/post/delete/${postId}`,
      {},
      {
        withCredentials: true,
      }
    );
    return {};
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.userData = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.authStatus = true;
        state.userData = action.payload.loggedUser;
      })
      .addCase(userLogin.rejected, (state) => {
        state.authStatus = false;
        // state.error = action.payload;
        state.loading = false;
      })
      .addCase(getAllPosts.pending, (state, action) => {
        state.postStatus = "idle";
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.postStatus = "success";
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authStatus = true;
      })
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.authStatus = true;
        state.userData = action.payload;
      })
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.postStatus = "idle";
        state.posts.push(action.payload);
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state) => {
        state.loading = false;
        state.postStatus = "idle";
      });
  },
});

export const selectAllPosts = (state) => state.auth.posts;
export const selectUserData = (state) => state.auth.userData;
export const selectPostStatus = (state) => state.auth.postStatus;
export const selectError = (state) => state.auth.error;
export const selectLoading = (state) => state.auth.loading;
export const selectAuthStatus = (state) => state.auth.authStatus;
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
