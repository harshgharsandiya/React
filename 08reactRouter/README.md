## React Router Installation

```bash
npm i react-router-dom
```

## Notes

- `Link` -- `a` tag make full page refresh not `Link`
- `NavLink` -- provide additional thing

```bash
<NavLink
    className={({isActive}) =>
            `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} lg:p-0`
        }
    >
        Home
</NavLink>

```

### RouterProvider

```bash

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route 
            loader=''
            path='github/:username' 
            element={<Github />}
            />
        </Route>

<RouterProvider router={router}/>
```

### Router Paramas

```bash
<Route path='user/:userId/:postId/comment/:commentId' element={<User />}/>
```

```bash
const { userId, postId, commentId } = useParams()
```


## References
- [React Router](https://reactrouter.com/)

