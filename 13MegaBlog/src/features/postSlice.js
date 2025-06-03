import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPosts: [],
    userPosts: [],
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setAllPosts: (state, action) => {
            state.allPosts = action.payload;
        },
        setUserPosts: (state, action) => {
            state.userPosts = action.payload;
        },
        addPost: (state, action) => {
            const newPost = action.payload;
            state.allPosts.push(newPost);
            state.userPosts.push(newPost);
        },
        deletePost: (state, action) => {
            const id = action.payload;
            state.allPosts = state.allPosts.filter(
                post => post.id !== id
            );
            state.userPosts = state.userPosts.filter(
                post => post.id !== id
            );
        }
    }
})

export const { setAllPosts, setUserPosts, addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
