# Building a system for User registration and longing 

```typescript
import React, {useState} from "react" 
import axios from "axios" 

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("") 

        const handleLogin(e : React.FormEvent) => {
            e.preventDefault(): 
            axios.post("http://127.0.1:8000/api/token/", {
                username, password
            }).then((response) => {
                console.log(responsel.data)
            }).catch(() => {
                consolelog(error.message)
            })
        }
}

return (
    <div>
        <input type={"text"} value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" onClick={handleLogin}>Submit</button>
    </div>
)
```

The `SignupPage` will be constructed similarly to the `LoginPage`, and we will also create a `handleSignup` function.


```typescript
import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Signup Page: React.FC = () => {
    const [ username, setUsername ] = useState<string>("");
    const [ first_Name, setfirst_Name ] = useState<string>(""); 
    const [ email, setEmail ] useState<string>("");
    const [ password, setPassword ] useState<string>("");
    
    const navigate = useNavigate()

    function handleSingup (e: React.FormEvent) => {
        e.preventDefault()

        axios.post(
        "http://127.0.0.1:8000/register/", {
            username,
            first_name,
            email,
            password
        })
        .then((response) => {
            console.log(response.data);
            navigate("/login")
        })
        .catch(()=> {
            console.log(error.message);
        })
    }

    return (
                <div>
            <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" value={username} 
placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="text" value={first_name} placeholder="Name" onChange={(e) => setFirst_name(e.target.value)} />
            <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" onClick={handleSignup}> Submit </button>
        </div>
    )
}
```

To allow request from the `frontend`, enable CORS for `localhost:5173`

in the `backend` in the `settings.py` file add `CORS ALLOWED WHITELIST`

```python
MIDLEWARE = [

    ---,
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ---,       
            
]

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']

CORS_ALLOWED_WJITELOST = [
    "http://localhost:5173"
]
```

Let's employ the `CreateContext` hook and `useContext` hook, which assists in distributing data between `components` that cannot be easily shared using `props`

Create a folder name `context` in the `src` directory. inside the `context` folder, generate a file named `AuthContext.tsx`

```typescript
import React, {createContext, useState, ReactNode, useEffect} from "react"
import jwt_decode from "jwt-decode"
import axios from axios
```

Subsequently, let's create a tyoe fir the `tokem` received after a successful `login`

```typescript
type AccessTokenType = {
    access: string | undefined;
    refresh : string | undefined;
};
```

We'll construct an interface for the use states utilized in this file. 

```typescript
interface CurrentUserContexType {
    authTokens : AccessTokensType; 
    setAuthTokens : React.Dispatch<React.SetStateAction<AccessTokensType>>; 
    user : string | undefined;
    setUser : React.Dispatch<React.SetStateAction<string | undefined>>
    loading : boolean; 
    setLoading : React.Dispatch<Reacr.SetStateAction<boolean>>
    callLogout : () => void;
}
```

All the `useState` variable will be mandatory

_usamos isso para poder fazer a autenticação pelo lado do client também_ 

All the `useState` variables will be mandatory

```typescript
interface Props {
  children: ReactNode;
}

export const AuthContext = createContext<CurrentUserContextType>(
  {} as CurrentUserContextType
);

const AuthProvider: React.FC<Props> = ({ children }) => {
  let [authTokens, setAuthTokens] = useState<AccessTokensType>(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens") || "")
      : undefined
  );

  let [user, setUser] = useState<string | undefined>(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens") || "")
      : undefined
  );

  let [loading, setLoading] = useState<boolean>(false);
}

export default AuthProvider;

```

The `authTokens` `useStated` is utilized to retrive and set the value of `authTokens` from the browser's `localStorage`. We use the method `localStorage.getItem("authTokens")` to retrive the value of the `authTokens` key from `localStorage`. 

The `user` `useState` is utilized for secure routes, where the user is redirected to the `LoginPage` if the variable is `undefined`.

The `loading` `useState` is a boolean state, with `false` as its `default` `value`. This is done so that until the tokens are updated, the website does not transmit requests using `expired tokens`, resulting in an error. 

Next, we'll generate the function for updating tokens.

```typescript
function updateAccess () {
        if(authTokens) {
            axios.post("http://127.0.0.1:8000/api/token/refresh/", 
                refresh : authTokens.refresh,

        }).then(function (response){
            setAuthTokens(response.data);
            localStorate.setItem("authTokens", JSON.stringify((response.data))
            setUser(jwt_decode(response.data.access))
            setLoading(true)
        })
        .catch(function (error) {
            console.log(error)
        });
```

Subsequently, we'll produce a function for logging out the user

```typescript
// calling Lout out function 

function callLogout () {
    setAuthTokens({access: undefined, refresh: undefined});
    setUser(undefined)
    localStorage.removeItem("authTokens")
}
```

After revisiting and accessing the token expiration time, we'll update the refresh token. 

```typescript
// updating the refresh token after revisiting and accessing the token expiration time 

useEffect(() => {
    if(!loading){
        updateAcess()
    }
    if(!authTokens) {
        setLoading(true);
    }

    const twentyMinutes = 1000 * 60 * 20
    
    let interval = setInterval(() => {
      if (authTokens) {
        updateAccess();
      }
    }, twentyMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

})
```

Finally, we'll return the values we want to offer to the children.

```typescript
    
    return (
        <AuthContext.Provider
            value={{
                setAuthTokens,
                authTokens,
                setLoading,
                loading,
                callLogout,
                user,
                setUser
            }}
        >
            {loading ? children : null}
        </AuthContext.Provider> 
    )
```



