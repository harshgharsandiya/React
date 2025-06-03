# useReducer

-   `useReducer` is used to manage state in our react app.
-   State management tool
-   State Management used to manage all states of app in simpel way.
-   Always use useReducer when you have a lot of states and method to handle.

## Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState, init);
```

-   `reducer` is a function that takes in the current state and an action and returns the new state.
-   `initialState` is the initial state of the reducer.
-   `init` is an optional function that takes in the initial state and returns the initial state.
