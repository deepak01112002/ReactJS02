import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

  const data = useSelector((state) => state);
  console.log(data);
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "LOADING" });
    axios
      .get(`http://localhost:3000/users?email=${state.email}`)
      .then((Res) => {
        
        if(Res.data[0].password == state.password){
            dispatch({ type: "SUCCESS" ,payload : Res.data[0].username});
            navigate("/")
        }else{
            alert("Wrong Password")
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR" });
      });
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
