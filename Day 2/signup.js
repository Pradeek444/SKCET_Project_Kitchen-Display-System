
import React, { useState } from "react";
import '../Components/sign.css';
import { useNavigate } from "react-router-dom";

function Signup() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[newpass,setNewpass]=useState("");
    const [confpass, setConfpass] = useState("");

    const navigate = useNavigate();

    const navigateToLogin = () => {
     
      navigate('/');
    };

    return (
         <form className="sign">
            <div className="conte">
                <div><h1>Signup</h1></div>
               
      
                <div className="password">
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
             
                <div className="password">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
           
                <div className="password">
                    <label >New Password</label>
                    <input
                        type="text"
                        value={newpass}
                        onChange={(e) => setNewpass(e.target.value)}
                    />
                </div>
              
                <div className="password">
                    <label>Confirm Password</label>
                    <input
                        type="text"
                        value={confpass}
                        onChange={(e) => setConfpass(e.target.value)}
                    />
                </div>
                <div id="submit">
                <button onClick={navigateToLogin}>Signup</button>
                </div>
                {/* <div id="new">
                    Don't have an account? <a href="signup">Signup</a>
                </div> */}
            </div>
        </form>
    ); 
}
export default Signup;