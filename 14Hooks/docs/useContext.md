# useContext

-   `useContext` is used to manage global data in react application

    -   Global State
    -   Themes
    -   Services
    -   User Settings
    -   API Keys

-   Avoids prop drilling by sharing data across components without passing props manually.

-   Creates a shared context for data

-   Allows direct access to data from any nested component

# Create Context

1. Creating the Context
2. Providing the Context
3. Consuming the Context

```jsx
import React, { createContext, useContext } from 'react';

// 1. Creating the Context
const ThemeContext = createContext();

// 2. Providing the Context
const ThemeProvider = ({ children }) => {
    const theme = 'dark';
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};

// 3. Consuming the Context
const ThemeConsumer = () => {
    const theme = useContext(ThemeContext);
    return <div>{theme}</div>;
};

export { ThemeProvider, ThemeConsumer };
```
