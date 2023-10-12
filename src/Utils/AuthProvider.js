import { useContext,useState,useEffect, createContext } from "react";

const AuthContext = createContext()

export const AuthProvider=({children})=>{

    const [loading , setLoading] = useState(false)

    const [user,setUser] = useState(false)

    useEffect(()=>{
        persistUser()
    },[])

    const loginUser = (userInfo) => {
        setLoading(true)
        fetch(
            'http://localhost:8000',
            {
                method:'post',
                body: JSON.stringify(
                    {
                        username:userInfo.username,
                        password:userInfo.password
                    }
                ),
                headers:{
                    'content-type':'application/json'
                }
            }
        ).then(
            res => res.json()
        ).then(
            (res)=>{
                console.log(res)
                if(res['authenticate']){
                    setUser(true)
                    console.log(user)
                }
            }
        ).catch(err => console.log(err))
        setLoading(false)
    }

    const logoutUser = () => {}

    const registerUser = ()=> {}

    const persistUser = () => {}

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser,
        persistUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <h1>Loading</h1> : children}
        </AuthContext.Provider>
    )
}


export const useAuth    = () =>{
    return useContext(AuthContext)
}

export default AuthProvider
