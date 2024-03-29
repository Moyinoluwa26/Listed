import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "light",
    user: "",
    token: "",
    posts: []
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            state.posts.push(action.payload.post);
        },

    }
});

export const { setMode, setLogin, setLogout, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;