# useLayoutEffect

-   work exactly same as `useEffect`
-   but difference is when it runs

> `useEffect` runs after DOM is printed on browser

> `useLayoutEffect` runs before DOM is printed on browser

-   It runs synchronously
-   use case of to get dimesion of the layout

## Workflow

1. React calculate all components
2. `useLayoutEffect`
3. React render all components
4. `useEffect`
