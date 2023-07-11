import React, { useState } from "react";
import "../Components/login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Login() {
    const [id, setId] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const navigateToHome = () => {
     
      navigate('/nav');
    };
    const handlePass = (e) => {
        setPass(e.target.value);
      };
    
    return (
        <form className="si">
            
            <div className="cont">
                <div><h1>Login In</h1></div>
                <div className="userName">
                    <label style={{}}>Email ID</label>
                    <input
                        type="email"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
               
                <div className="password">
                    <label style={{}}>Password</label>
                    <input
              type={pass ? 'text' : 'password'}
              value={pass}
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$"
              onChange={handlePass}
              required
            />
                </div>
             
                <div id="submit">
                
                <button onClick={navigateToHome}>Log In</button>
                   
                </div>
                <div id="new">
                    Don't have an account? 
                    <Link to='/signup'>Signup</Link>
                </div>
            </div>
        
        </form>
    );
}
export default Login;
