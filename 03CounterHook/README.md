## 🔁 React Hooks – Quick Notes

- **Hooks** let you use **state**, **lifecycle**, and other React features in **functional components** (no need for class components).
- Hooks update the **UI efficiently** without manually referencing or syncing multiple values.

### 🛠️ Commonly Used Hooks

| Hook           | Purpose                                  |
|----------------|-------------------------------------------|
| `useState()`   | Add and manage state in a function        |
| `useEffect()`  | Handle side-effects (API calls, timers)   |
| `useRef()`     | Store mutable values that don't cause re-renders |
| `useContext()` | Share global state without prop drilling  |
| `useReducer()` | Manage complex state logic (like Redux)   |

### ✅ Why Hooks?
- No need for `this` or class components.
- Cleaner, modular logic using functions.
- Update multiple values easily in UI using `useState`, instead of many manual references.

### 🧠 Example:

```jsx
const [count, setCount] = useState(0);

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
```