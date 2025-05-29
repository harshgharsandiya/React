# Movie Mania

![Dark Mode](./ss/image1.png)
![Light Mode](./ss/image2.png)


## To have sorting Functionality
```
npm i lodash
```

## To support svg
- Vite not support `ReactComponent`
- To use this

```
npm install vite-plugin-svgr
```

In `vite.config.js`
```js
import svgr from 'vite-plugin-svgr'
```

```js
export default defineConfig({
  plugins: [react(), svgr()],
})
```