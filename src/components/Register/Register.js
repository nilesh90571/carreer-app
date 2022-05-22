import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RingLoader } from "../../components/Loaders/RingLoader/RingLoader";
import "./Register.css";
import axios from "axios";

// Import React Icons
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordView = () => {
    setShowPassword((show) => !show);
  };

  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const toggleConfirmPasswordView = () => {
    setShowConfirmedPassword((show) => !show);
  };

  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [message, setMessage] = useState("");
  const [Otp, setOtp] = useState("");
  const [isLoading, setLoading] = useState(false);

  const prsndtail = {
    full_name: Fullname,
    email: Email,
    password: Password,
    company_id: 1,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (CPassword === Password) {
      axios
        .post(
          "https://shivila.herokuapp.com/api/v1/register/?role=admin",
          prsndtail
        )
        .then((res) => {
          console.log(res);
          setLoading(false);
          setMessage("Created Successfully");
          navigate("/login");
        })
        .catch((err) => {
          setLoading(false);
          setMessage("something went wrong");
          console.log(err.response.status);
          console.log(err);
        });
    } else {
      setMessage("Invalid Credentials");
    }

    setFullname("");
    setEmail("");
    setPassword("");
    setCPassword("");
  };

  function getOtp(e) {
    e.preventDefault();

    axios
      .get(
        `https://shivila.herokuapp.com/verify/otp/?field=email&data=${Email}`
      )
      .then((res) => {
        alert(
          `the ${res.data.digits} digits otp has beeen sent to the mail \n and will be valid till ${res.data.valid_for} seconds`
        );
      })
      .catch((err) => {
        console.log(err.response.status);
      });
  }

  const odata = {
    otp: Otp,
    data: Email,
  };

  const verifyOtp = (e) => {
    e.preventDefault();

    axios
      .post(`https://shivila.herokuapp.com/verify/otp/?field=email`, odata)
      .then((res) => {
        console.log(res);
        alert("okay otp verified");
      })
      .catch((err) => console.log(err.response.status));
  };

  return (
    <section className="login">
      {isLoading ? (
        <RingLoader />
      ) : (
        <div className="content">
          <div className="message">
            <h2 className="title">
              Register To
              <br />
              Get Your Account
            </h2>
            <p className="details">
              Already Have An Account..?
              <br />
              Sign In{" "}
              <Link to="/login" className="btnSwitch">
                Here
              </Link>
            </p>
          </div>

          <form
            className="loginForm"
            onSubmit={submitHandler}
            action=""
            method="POST"
          >
            <p>{message}</p>
            <div className="inputField">
              <input
                className="input"
                type="text"
                placeholder="Full Name"
                value={Fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
              <div >
              <div className="otpContainer">
                <input
                  className="input"
                  type="email"
                  placeholder="Email ID"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                  required
                />
                <button className="otpBtn" onClick={getOtp}>
                  Get OTP
                </button>
                </div>
                <div className="otpContainer">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter OTP"
                  value={Otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                />
                <button className="otpBtn" onClick={verifyOtp}>
                  Verify
                </button>
              </div>
              </div>
              <div className="passwordContainer">
                <input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="toggleView" onClick={togglePasswordView}>
                  {showPassword ? (
                    <BsEyeFill className="icon" />
                  ) : (
                    <BsEyeSlashFill className="icon" />
                  )}
                </span>
              </div>

              <div className="passwordContainer">
                <input
                  className="input"
                  type={showConfirmedPassword ? "text" : "password"}
                  value={CPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                  placeholder="Confirm Password"
                  required
                />
                <span
                  className="toggleView"
                  onClick={toggleConfirmPasswordView}
                >
                  {showConfirmedPassword ? (
                    <BsEyeFill className="icon" />
                  ) : (
                    <BsEyeSlashFill className="icon" />
                  )}
                </span>
              </div>
            </div>
            <input className="submit" type="submit" value="Create Account" />
          </form>
        </div>
      )}
    </section>
  );
}
