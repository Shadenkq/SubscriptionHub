
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const Navigate = useNavigate( )

    const[error, setError]= useState("")

    const handleLogin = (e) =>{
        e.preventDefault() 
        const savedPassword = localStorage.getItem("userPassword") || "123456"
        if(email === "Admin@gmail.com" && password === "123456"){
            setIsLoggedIn(true);
            Navigate("/dashboard")
        }else{
            setError("Wrong Email or Password")
        }

    }

    return (
        <div className="login-page" >
            <div className="login-card" >
                <h2> Login </h2>
                <form onSubmit={handleLogin}  >
                    {error && <p className="error-msg"> {error}</p>}
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } placeholder="Password" />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>

            </div>

        </div>

    );
}

export default Login;