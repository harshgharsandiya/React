# 📦 Redux Toolkit Store Creation 

1. Install Redux Toolkit & React-Redux
```bash
npm install @reduxjs/toolkit react-redux
```

2. Folder Structure
```bash
src/
├── app/
│   └── store.js         # Redux store
├── features/todo
│            └── todoSlice.js  # Feature (state + logic)
└── App.js

```

3. Create a Slice (State + Actions)
```js
// features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value++ },
    decrement: state => { state.value-- },
    addByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, addByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

4.  Set Up Store
```js
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

5. Connect Store to React App
```js
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
```

6.  Use State and Actions in Component
```js
// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
}

export default App;
```


##  Summary
✅ createSlice() – Creates state + actions
✅ configureStore() – Sets up the store
✅ Provider – Wraps App to give access to Redux
✅ useSelector() – Reads state
✅ useDispatch() – Sends actions