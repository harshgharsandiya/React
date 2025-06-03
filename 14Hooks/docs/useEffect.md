-   useEffect is use to perform side effects in our components

-   Side effects are actions which are performed with the "Outside worlds.

-   We peform side effects when we need to reach outside of our React components to do somethings.

## Example

1. Fetching data from API
2. Updating DOM document & window
3. Timer functions setTimeout & setInterval

## Syntax

```jsx
useEffect(() => {
    // code to run
}, [dependency]);
```

> Callback : What to run
> Depencies : When to run

-   useEffect is combination of componentDidMount, componentDidUpdate and componentWillUnmount

## Variation of useEffect

1. without dependency array

-   run every single change in the component

2. with empty dependency array

-   run only once when the component is mounted

3. with dependency array

-   run when the dependency changes

## Cleanup Function
