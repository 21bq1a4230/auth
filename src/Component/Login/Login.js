import {React, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Utils/AuthProvider";
// import "./logi.css"





const  Login= ({auth}) => {

    const navigate = useNavigate()
    const {user} = useAuth()
    
    const {loginUser} = useAuth()

    useEffect(()=>{
        if(user){
            navigate('/welcome');
        }
    },[])

    

    const handleLogin = (event) =>{
        const userInfo ={
            username:document.getElementById('username').value,
            password:document.getElementById('password').value
        }
        loginUser(userInfo)
    }
        return(
            <div className="login">
                <label>Login</label>
                <input type="text" id = "username"/>
                <label>Password</label>
                <input type="password" id="password" />
                    <button onClick={handleLogin}>Login</button>
            </div>
        )
    }

export default Login