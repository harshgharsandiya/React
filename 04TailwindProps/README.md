# React Quick Notes

## React Rendering
- `createRoot` creates a virtual DOM.
- Only updates parts of the real DOM that changed.
- React batches multiple updates together to optimize rendering (doesn't update immediately every time).
- React Fiber is the engine behind:
  - Incremental rendering
  - Reconciliation (syncing virtual DOM with real DOM)
  - Efficient list diffing using **keys** (keys must be stable, unique, predictable).

## Props
- Props pass data to components.
- Make components reusable and dynamic.

## Useful Command
```bash
npm install tailwindcss @tailwindcss/vite
```

## 📚 Resources

[React Fibre Architecture](https://github.com/acdlite/react-fiber-architecture)

[TailWind vite install](https://drive.google.com/file/d/1mlmO0e479nASrxJ-YLImHoxpmwCymLHs/view)
