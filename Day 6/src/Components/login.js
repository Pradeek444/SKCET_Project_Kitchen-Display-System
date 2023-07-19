import React, { useState } from "react";
import "../Components/login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
  
  
    const navigate = useNavigate();
  
    const handlePass = (e) => {
      setPass(e.target.value);
    };
  
    const handleEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevents the form from automatically submitting
  
      if (email !== "" && pass !== ""  ) {
        // Only navigate to /dash if both email and password are filled
        navigate("/dash1");
      }
      if (email !== "" && pass !== ""  ) {
        // Only navigate to /dash if both email and password are filled
        navigate("/dash2");
      }
    };
  
    return (
      <form className="si" onSubmit={handleSubmit}>
        <div className="cont">
          <div>
            <h1>Login In</h1>
          </div>
          <div className="userName">
            <label>Email ID</label>
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
  
          <div className="password">
            <label>Password</label>
            <input
              type="password"
              value={pass}
              onChange={handlePass}
              pattern=".{8,}"   required title="8 characters minimum"
            />
          </div>
        
        
  
          <div id="submit">
            <button className="su" type="submit">
              Log In
            </button>
          </div>
          <div id="new">
            Don't have an account? <Link to="/signup">Signup</Link>
          </div>
        </div>
      </form>
    );
  }
export default Login;  