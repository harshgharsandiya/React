## `useRef()` 

- useRef() is a React Hook that lets you store a value without causing a re-render when it changes.

| Feature             | `useState()`     | `useRef()`                          |
| ------------------- | ---------------- | ----------------------------------- |
| Triggers Re-render? | ✅ Yes            | ❌ No                                |
| Value used in JSX?  | ✅ Often          | ❌ Rarely                            |
| When to Use?        | UI state updates | Store background values (not in UI) |


### Syntax
```js
import { useRef } from 'react';

const myRef = useRef(initialValue);

// Access or update value like this:
myRef.current = newValue;
```

### Summary
- Use useState() if value affects what user sees (UI).

- Use useRef() if value is internal only (e.g., counters, timers, DOM refs).


## `forwardRef()`