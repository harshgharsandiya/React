# useMemo

-   useMemo hook is used to apply Memoization in React
    -   Memoization is a technique for improving the performance of code
    -   It is useful to avoid expensive calculations on every render when the returned value is not change.

## Syntax

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

-   In useEffect we can't return value and we can't store it in variable. We have to create one more state and with set method we update that.
-   In useMemo we can return value and we can store it in variable.
