#🧠 React Context

- Context = Way to share data (like user info or theme) across many components without props.


1. Create Context File

```bash
// UserContext.js
import { createContext } from 'react';

const UserContext = createContext();
export default UserContext;
```

2. Create Context Provider

```bash
// UserContextProvider.js
import React, { useState } from 'react';
import UserContext from './UserContext';

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
```

3. Wrap App with Provider
```
// App.jsx
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}
```

4. To Send/Set Data
```
// Login.jsx
import { useContext } from 'react';
import UserContext from './context/UserContext';

const { setUser } = useContext(UserContext);
setUser({ name: 'Harsh', age: 21 });
```

5. To Get/Use Data
```
// Profile.jsx
import { useContext } from 'react';
import UserContext from './context/UserContext';

const { user } = useContext(UserContext);
console.log(user.name);
```


## References
- [🔗useContext](https://react.dev/reference/react/useContext)


## 💡 Tip to Remember:
> Context = "Global State Box"
> Provider = "Box Giver"
> useContext() = "Open the box and use the stuff"