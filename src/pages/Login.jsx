import React, { useState } from "react";
import LoginWrapper from "../wrappers/LoginWrapper";
import loginImage from "../images/login.png";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import SecurityImage from "../components/SecurityImage";
import { FaEye } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { togglePassword } from "../features/password/passwordSlice";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";
import { getUserStorage } from "../utils/localStorageData";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { passwordType } = useSelector((store) => store.securePass);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogUserChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleLogUserSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (!email || !password) {
      toast.error("Please Provide Credentials");
      return;
    }
    const userDetail = getUserStorage();
    if (
      user?.email === userDetail?.email &&
      user?.password === userDetail?.password
    ) {
      dispatch(loginUser({ email, password }));
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      toast.warning("Wrong Email or Password");
    }
  };

  return (
    <LoginWrapper>
      <SecurityImage image={loginImage} />
      <form className="form" onSubmit={handleLogUserSubmit}>
        <h3>Welcome Back!</h3>
        <FormInput
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={user.email}
          handleChange={handleLogUserChange}
        />
        <FormInput
          type={passwordType}
          name="password"
          placeholder="Your Password"
          value={user.password}
          handleChange={handleLogUserChange}
          icon={
            <FaEye
              className="icon"
              onClick={() => dispatch(togglePassword())}
            />
          }
        />

        <button className="btn">Login</button>
        <div className="btn-container">
          <button>
            <Link to="/register">Create an Account</Link>
          </button>
          <button>
            <Link to="#">Forget Password</Link>
          </button>
        </div>
      </form>
    </LoginWrapper>
  );
};

export default Login;
