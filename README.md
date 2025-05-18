# 📘 React Learning Journey


**Stared on:**: `17/5/2025`
**Learning from:** Chai Aur Code Youtube

## Timeline

### ✅ Day 1 – `18/05/2025`
- 📌 **Topics Covered:**
  - React Project Structure Understanding
  - `create-react-app` vs `vite`

- 🧠 **Key Notes:**
  - React component names must start with a **Capital Letter**.
  - You can use **fragments** (`<> </>`) to wrap multiple elements without adding extra DOM nodes.

  - `React.createElement()` creates elements in a **tree-like (virtual DOM) structure**.
  - JSX expressions like `{variable}` only allow **evaluated JavaScript expressions**, not full statements (e.g., no `if`, `for`).
  - **Babel** compiles JSX syntax into `React.createElement()` calls behind the scenes.

  ```jsx
  const name = "React";
  const element = <h1>Hello, {name}</h1>;
  // Babel transpiles this to:
  React.createElement("h1", null, `Hello, ${name}`);
  ```
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





## 📚 Resources

- [React Official Docs](https://react.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [Chai Aur Code](https://www.youtube.com/@ChaiAurCode)


## 🛠️ Tools Used

- Vite 
- VS Code
- GitHub
- Chrome DevTools

---


## 🎯 Goals

- [ ] Day1

---