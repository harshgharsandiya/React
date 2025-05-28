# 📘 React Learning Journey


**Stared on:**: `17/5/2025`
**Learning from:** Chai Aur Code Youtube

## Timeline

### ✅ Day 1 
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
  [📄 Hooks Notes](03CounterHook/README.md)
  
  [📄 Fibre + Props Notes](04TailwindProps/README.md)


### ✅ Day 2 
- 📌 **Topics Covered:**
- [05bgChanger](05bgChanger/README.md)
- [06passwordGenerator](06passwordGenerator/README.md)
- [07currencyConverter](07currencyConverter/README.md)



### ✅ Day 3 – `26/05/2025`
- 📌 **Topics Covered:**
- [08reactRouter](08reactRouter/README.md)








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