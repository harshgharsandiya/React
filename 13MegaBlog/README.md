# Mega Blog

## Installation

```bash
npm i \
  @reduxjs/toolkit \
  react-redux \
  react-router-dom \
  appwrite \
  @tinymce/tinymce-react \
  html-react-parser \
  react-hook-form
```

## Key Notes

- Access `env` variable

```js
import.meta.env.VITE_KEY_NAME;
```

- Vendor LockIn : Write code in such a way that it will not depend on specific vendor and still continusly run

    - Services
    - [Appwrite AuthService](./docs/Appwrite_AuthService.md)

- Without indexes in Appwrite we cannot write Query in our App

- Redux configuration so that store atleast know user logged in or logged out

- From Options usually get Array

- Create Post Card components

## React-Hook-Form

- `useForm`
- use other than handleSubmit name to handle form as handleSubmit accespt callback of ours to handle form

## Futures Notes

- Whenever the user logs out or changes, remember to:
    - dispatch(setUserPosts([])); // clear sensitive data

## Features Work

- Loading store

    ```js
    // loadingSlice.js
    import { createSlice } from '@reduxjs/toolkit';

    const loadingSlice = createSlice({
        name: 'loading',
        initialState: {
            global: false,
            postsLoading: false,
            authLoading: false,
        },
        reducers: {
            setGlobalLoading: (state, action) => {
                state.global = action.payload;
            },
            setPostsLoading: (state, action) => {
                state.postsLoading = action.payload;
            },
            setAuthLoading: (state, action) => {
                state.authLoading = action.payload;
            },
        },
    });

    export const { setGlobalLoading, setPostsLoading, setAuthLoading } =
        loadingSlice.actions;
    export default loadingSlice.reducer;
    ```

## References:

- [Environment Variable](https://vite.dev/guide/env-and-mode)
- [Hooks](./docs//Hooks.md)
- [Regex](https://regexr.com/)
