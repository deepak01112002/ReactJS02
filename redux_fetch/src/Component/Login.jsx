import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginFetch } from "../Redux/LoginReducer/action";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const navigate = useNavigate();

  const data = useSelector((state) => state.loginReducer);
 
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginFetch(dispatch,state.email,state.password,navigate)
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Email"
          name="email"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Password"
          name="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
