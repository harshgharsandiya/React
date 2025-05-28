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