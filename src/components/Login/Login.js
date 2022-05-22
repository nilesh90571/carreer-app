import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import './Login.css';


// Import React Icons
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordView = () => {
    setShowPassword((show) => !show);
  };

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const pdetials = {
    email: Username,
    password: Password,
  };

  return (
    <section className="login">
      <div className="content">
        <div className="message">
          <h2 className="title">
            Sign In To
            <br />
            Your Account
          </h2>
          <p className="details">
            Don't Have Any Account..?
            <br />
            Register{" "}
            <Link to="/" className="btnSwitch">
              Here
            </Link>
          </p>
        </div>

        {/* Login Form */}
        <div className="loginForm">
          <form onSubmit={()=>navigate("/profile")}>
            {/* Input Fields */}
            <div className="inputField">
              <input className="input" type="text" placeholder="Email ID" />
              <div className="passwordContainer">
                <input className="input" type={showPassword ? "text" : "password"} placeholder="Password" />
                <span className="toggleView" onClick={togglePasswordView}>
                  {showPassword ? <BsEyeFill className="icon" /> : <BsEyeSlashFill className="icon" />}
                </span>
              </div>
            </div>

            {/* Forget Password Link */}
            {/* <div className="extra">
              <button className="forget">
                <p className="text">Forget Password</p>
              </button>
            </div> */}

            {/* Login Button */}
            <input type="submit" className="submit" value="Login To Account" />
          </form>
        </div>
      </div>
    </section>
  );
}
