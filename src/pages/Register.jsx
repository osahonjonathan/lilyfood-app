import React, { useState } from "react";
import FormInput from "../components/FormInput";
import SecurityImage from "../components/SecurityImage";
import { Link } from "react-router-dom";
import LoginWrapper from "../wrappers/LoginWrapper";
import registerImage from "../images/register.png";
import { FaEye } from "react-icons/fa";
import { togglePassword } from "../features/password/passwordSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerUser } from "../features/user/userSlice";
import { setUserStorage } from "../utils/localStorageData";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { passwordType } = useSelector((store) => store.securePass);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegUserChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleRegUserSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    if (!name || !email || !password) {
      toast.error("Please Provide Credentials");
      return;
    }
    dispatch(registerUser({ name, email, password }));
    setUserStorage(user);
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <LoginWrapper>
      <SecurityImage image={registerImage} />
      <form className="form" onSubmit={handleRegUserSubmit}>
        <h3 className="reg-tit">Welcome To Lilies!</h3>
        <FormInput
          type="text"
          name="name"
          placeholder="Your First Name"
          value={user.name}
          handleChange={handleRegUserChange}
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={user.email}
          handleChange={handleRegUserChange}
        />
        <FormInput
          type={passwordType}
          name="password"
          placeholder="Your Password"
          value={user.password}
          handleChange={handleRegUserChange}
          icon={
            <FaEye
              className="reg-icon"
              onClick={() => dispatch(togglePassword())}
            />
          }
        />

        <button className="btn">Sign up</button>
        <h4 className="log">
          <span>Already have an account.</span>
          <Link to="/login" className="logon">
            Login
          </Link>
        </h4>
      </form>
    </LoginWrapper>
  );
};

export default Register;
